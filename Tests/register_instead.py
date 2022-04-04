from assertpy import assert_that
from faker import Faker
import pdb
import pytest

fake = Faker()

@pytest.mark.student
def test_valid_student_registration(page):    
    # Act
    page.goto("/")           
    # Arrange
    page.is_visible("//h1[contains(.,'Log In')]")    
    page.is_visible("//h1[contains(.,'Register')]")
    page.click("//span[contains(.,'Student')]")    
    page.fill("//input[@id='first_name']", fake.first_name)
    page.fill("//input[@id='last_name']", fake.last_name)
    page.fill("//input[@id='school']", fake.school)
    page.fill("//input[@id='email']", fake.email)
    page.fill("//input[@id='password']", "Test123!")    
    page.fill("//input[@id='//input[@id='repeat_password']", "Test123!")            
    page.click("//span[contains(.,'Register')]")
    # Assert
    assert_that(page.is_visible("//h1[@class='title2'][contains(.,'World')]")).is_true()    
    assert_that(page.is_visible("(//h1[contains(.,'Welcome to Math World')])")).is_true()
    page.click("//span[contains(.,'Log Out')]")