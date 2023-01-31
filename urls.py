from django.urls import re_path as url 
from Studentsapp import views


urlpatterns=[
    url(r'^department/$',views.departmentApi),
    url(r'^department/([0-9]+)$',views.departmentApi),

    url(r'^employee/$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi),

    url(r'^signup/$',views.signupApi),
    url(r'^signup/([0-9]+)$',views.signupApi),

]