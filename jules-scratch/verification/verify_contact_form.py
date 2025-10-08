from playwright.sync_api import sync_playwright, Page, expect

def verify_contact_page(page: Page):
    """
    This test verifies that the new contact page and quote form are rendered correctly.
    It navigates through the multi-step form and takes screenshots at each step.
    """
    # 1. Navigate to the contact page
    page.goto("http://localhost:3000/contact")

    # 2. Assert the heading is visible
    expect(page.get_by_role("heading", name="Talk to engineers. Get a scoped quote.")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01-contact-page-load.png")

    # 3. Fill out Step 1
    page.get_by_label("Full Name").fill("Jules Verne")
    page.get_by_label("Work Email").fill("jules.verne@example.com")
    page.get_by_label("Company").fill("Awesome Inc.")
    page.get_by_label("Your Role").fill("Lead Engineer")

    # Take screenshot before clicking next
    page.screenshot(path="jules-scratch/verification/02-step1-filled.png")
    page.get_by_role("button", name="Next →").click()

    # 4. Assert Step 2 is visible and fill it out
    expect(page.get_by_role("heading", name="Step 2: Project Details")).to_be_visible()
    page.get_by_label("Web & Mobile").check()
    page.get_by_label("Full project").check()
    page.get_by_label("Goals & Success Criteria").fill("Build the next big thing!")
    page.get_by_label("Timeline").fill("3-6 months")
    page.get_by_label("Budget Range").select_option("$25k+")

    # Take screenshot of step 2
    page.screenshot(path="jules-scratch/verification/03-step2-filled.png")
    page.get_by_role("button", name="Next →").click()

    # 5. Assert Step 3 is visible and check for CAPTCHA
    expect(page.get_by_role("heading", name="Step 3: Extras & Submit")).to_be_visible()

    # Check that the CAPTCHA is present
    expect(page.frame_locator('iframe[title="hCaptcha challenge"]').locator("body")).to_be_visible()

    # Check that the submit button is disabled initially
    submit_button = page.get_by_role("button", name="Submit Request")
    expect(submit_button).to_be_disabled()

    # Take final screenshot
    page.screenshot(path="jules-scratch/verification/04-step3-captcha.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_contact_page(page)
        browser.close()

if __name__ == "__main__":
    main()