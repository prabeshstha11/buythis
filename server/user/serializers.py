from rest_framework import serializers
from .models import Item, ItemQuantity

class ItemQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemQuantity
        fields = ["id", "stock"]


class ItemSerializer(serializers.ModelSerializer):
    quantity = ItemQuantitySerializer(required=False)

    class Meta:
        model = Item
        fields = [
            "id",
            "product_name",
            "product_description",
            "product_category",
            "product_price",
            "offer_price",
            "image_url",
            "quantity"
        ]

    def create(self, validated_data):
        quantity_data = validated_data.pop("quantity", None)
        item = Item.objects.create(**validated_data)

        # Only superusers can create stock
        request = self.context.get("request")
        if request and request.user.is_superuser and quantity_data:
            ItemQuantity.objects.create(item=item, **quantity_data)

        return item

    def update(self, instance, validated_data):
        quantity_data = validated_data.pop("quantity", None)

        # update normal item fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Only superusers can update stock
        request = self.context.get("request")
        if request and request.user.is_superuser and quantity_data:
            qty_obj, created = ItemQuantity.objects.get_or_create(item=instance)
            qty_obj.stock = quantity_data.get("stock", qty_obj.stock)
            qty_obj.save()

        return instance
