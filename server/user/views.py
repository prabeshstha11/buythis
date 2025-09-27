from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def check_superuser(request):
    if request.user.is_superuser:
        return Response({"msg": "You are a superuser"})
    else:
        return Response({"msg": "Access denied"}, status=403)
