from assertpy import assert_that
import pdb
import pytest

@pytest.mark.student
def test_valid_student_login(page):
    page.goto("/")           
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.fill("//input[@id='email']", "user123@gmail.com")
    page.fill("//input[@id='password']", "Test123!")    
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")    
    assert_that(page.is_visible("//div[@class='content'][contains(@id,'message')][contains(.,'Welcome to Math World')]")).is_true()    
    page.click("//span[contains(.,'Log Out')]")
    assert_that(page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")).is_true()


@pytest.mark.student
def test_invalid_student_password(page):    
    page.goto("/")
    page.is_visible("//h1[@class='title1'][contains(.,'Math')]")  
    page.click("//span[contains(.,'Log In')]")    
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//span[contains(.,'Log In')]")
    page.fill("//input[@id='email']", "user123@gmail.com")
    page.fill("//input[@id='password']", "wdTest123!")
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")    
    assert_that(page.is_visible("//h3[contains(.,'Email or Password is incorrect.')]")).is_true()


@pytest.mark.student
def test_invalid_student_username(page):    
    page.goto("/")
    page.is_visible("//h1[@class='title1'][contains(.,'Math')]")  
    page.click("//span[contains(.,'Log In')]")    
    page.is_visible("//h1[contains(.,'Log In')]")
    page.fill("//input[@id='email']", "wrong_email@gmail.com")
    page.fill("//input[@id='password']", "Test123!")
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")    
    assert_that(page.is_visible("//h3[contains(.,'Email or Password is incorrect.')]")).is_true()

@pytest.mark.student
def test_blank_student_username(page):    
    page.goto("/")
    page.is_visible("//h1[@class='title1'][contains(.,'Math')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")    
    page.fill("//input[@id='password']", "Test123!")
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")
    assert_that(page.is_visible("//div[@class='errorMessage'][contains(.,'Email is required')]")).is_true()


@pytest.mark.student
def test_blank_student_password(page):    
    page.goto("/")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.fill("//input[@id='email']", "user123@gmail.com")    
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")
    assert_that(page.is_visible("//div[@class='errorMessage'][contains(.,'Password is required')]")).is_true()    

@pytest.mark.student
def test_blank_student_login(page):    
    page.goto("/")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.fill("//input[@id='email']", "user123@gmail.com")
    page.fill("//input[@id='password']", "Test123!")
    page.click("//span[@class='n-button__content'][contains(.,'Log In')]")
    assert_that(page.is_visible(
        "//div[@class='content'][contains(@id,'message')][contains(.,'Welcome to Math World')]")).is_true()
    page.click("//span[contains(.,'Log Out')]")
    assert_that(page.is_visible(
        "//div[@class='content'][contains(.,'For Teachers and For Students')]")).is_true()


@pytest.mark.teacher
def test_valid_teaher_login(page):
    page.goto("/")
    page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//button[@id='asTeacher']")
    page.is_visible("//label[@for='code'][contains(.,'Code')]")
    page.fill("//input[@id='email']", "user123@gmail.com")
    page.fill("//input[@id='password']", "Test123!")
    page.fill("//input[@id='code']", "123code")
    page.click("//button[contains(.,'Log In')]")
    header: str = "//div[@class='content'][contains(@id,'message')][contains(.,'Welcome to Math World')]"
    page.is_visible(header)
    page.click("//span[contains(.,'Log Out')]")
    assert_that(page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")).is_true()


@pytest.mark.teacher
def test_invalid_teacher_password(page):
    page.goto("/")
    page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//button[@id='asTeacher']")
    page.is_visible("//label[@for='code'][contains(.,'Code')]")
    page.fill("//input[@id='email']", "user123@gmail.com")
    page.fill("//input[@id='password']", "Test123/\*")
    page.fill("//input[@id='code']", "123code")
    page.click("//button[contains(.,'Log In')]")
    assert_that(page.is_visible("//h3[contains(.,'Email or Password is incorrect.')]")).is_true()


@pytest.mark.teacher
def test_invalid_teacher_username(page):
    page.goto("/")
    page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//button[@id='asTeacher']")
    page.is_visible("//label[@for='code'][contains(.,'Code')]")
    page.fill("//input[@id='email']", "user123gmail.com")
    page.fill("//input[@id='password']", "Test123!")
    page.fill("//input[@id='code']", "123code")
    page.click("//button[contains(.,'Log In')]")
    assert_that(page.is_visible("//div[@class='errorMessage'][contains(.,'Email must be valid')]")).is_true()
    
@pytest.mark.teacher
def test_blank_teacher_username(page):    
    page.goto("/")
    page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//button[@id='asTeacher']")
    page.is_visible("//label[@for='code'][contains(.,'Code')]")
    page.fill("//input[@id='password']", "Test123!")
    page.fill("//input[@id='code']", "123code")
    page.click("//button[contains(.,'Log In')]")
    assert_that(page.is_visible("//div[@class='errorMessage'][contains(.,'Email is required')]")).is_true()

@pytest.mark.teacher
def test_blank_teacher_password(page):
    page.goto("/")
    page.is_visible("//div[@class='content'][contains(.,'For Teachers and For Students')]")
    page.click("//span[contains(.,'Log In')]")
    page.is_visible("//h1[contains(.,'Log In')]")
    page.click("//button[@id='asTeacher']")
    page.is_visible("//label[@for='code'][contains(.,'Code')]")
    page.fill("//input[@id='email']", "user123@gmail.com")    
    page.fill("//input[@id='code']", "123code")
    page.click("//button[contains(.,'Log In')]")
    assert_that(page.is_visible("//div[@class='errorMessage'][contains(.,'Password is required')]")).is_true()

