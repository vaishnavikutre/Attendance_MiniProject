from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class AddUser(APIView):
    def post(self,request):
        response = {"message":"","status":""}
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response['message'] = "User Created successfully"
            response['status'] = 1
            return  Response(response, status=status.HTTP_200_OK)
        else:
            response['message'] = serializer.errors
            response['status'] = 1
            return Response(response, status=status.HTTP_400_BAD_REQUEST)    
        


  
