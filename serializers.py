from rest_framework import serializers
from Studentsapp.models import Employees,Departments,Signup

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ("DepartmentId",
                  "DepartmentName",
                  "Location",
                  "StudentName",
                  "Date")

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                'EmployeeName',
                'Department',
                'DateOfJoining',
                'PhotoFileName')

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = ('SignupId',
                'Name',
                'Email',
                'Password',
                'Contact')