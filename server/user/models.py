from django.db import models

class Item(models.Model):
    CATEGORY_CHOICES = [
        ("FRUITS", "Fresh Fruits"),
        ("VEGGIES", "Fresh Vegetables"),
        ("DAIRY", "Dairy & Eggs"),
        ("MEAT", "Meat & Seafood"),
        ("BAKERY", "Bakery & Snacks"),
        ("BEV", "Beverages"),
        ("ESSENTIALS", "Daily Essentials"),
        ("FROZEN", "Frozen Foods"),
        ("HOUSE", "Household Essentials"),
        ("CARE", "Personal Care & Health"),
    ]

    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    offer_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    image_url = models.URLField(help_text="use url for now later use imgur or cloudinary api...<dev>")

    def __str__(self):
        return self.product_name
    
class ItemQuantity(models.Model):
    item = models.OneToOneField(Item, on_delete=models.CASCADE, related_name="quantity")
    stock = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.item.product_name} - {self.stock}" 