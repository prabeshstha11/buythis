from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Item, ItemQuantity
from .serializers import ItemSerializer, ItemQuantitySerializer
from .permissions import IsAdminOrReadOnly


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def check_superuser(request):
    if request.user.is_superuser:
        return Response({"msg": "You are a superuser"})
    else:
        return Response({"msg": "Access denied"}, status=403)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAdminOrReadOnly]

    @action(detail=True, methods=['post'], permission_classes=[IsAdminOrReadOnly])
    def order(self, request, pk=None):
        item = self.get_object()
        qty_obj, created = ItemQuantity.objects.get_or_create(item=item)

        if qty_obj.stock <= 0:
            return Response({"error": "out of stock"}, status=status.HTTP_400_BAD_REQUEST)
        
        qty_obj.stock -= 1
        qty_obj.save()

        return Response({"msg": f"Order placed for {item.product_name}, remaining stock {qty_obj.stock}"})