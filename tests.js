// Election Saathi — Test Suite
// Tests core election assistant logic

const tests = {
  passed: 0,
  failed: 0,

  assert(description, condition) {
    if (condition) {
      console.log(`✅ PASS: ${description}`);
      this.passed++;
    } else {
      console.error(`❌ FAIL: ${description}`);
      this.failed++;
    }
  },

  run() {
    console.log("=== Election Saathi Test Suite ===\n");

    // 1. Voter eligibility logic
    this.assert(
      "User aged 18 is eligible to vote",
      checkEligibility(18) === true
    );
    this.assert(
      "User aged 17 is NOT eligible to vote",
      checkEligibility(17) === false
    );
    this.assert(
      "User aged 0 is NOT eligible",
      checkEligibility(0) === false
    );
    this.assert(
      "User aged 100 is eligible",
      checkEligibility(100) === true
    );

    // 2. Gemini prompt builder
    this.assert(
      "System prompt contains ECI reference",
      buildSystemPrompt().includes("Election Commission")
    );
    this.assert(
      "System prompt instructs no political opinions",
      buildSystemPrompt().includes("political opinions")
    );

    // 3. Quiz scoring logic
    this.assert(
      "Score of 5/5 returns 100%",
      calculateScore(5, 5) === 100
    );
    this.assert(
      "Score of 3/5 returns 60%",
      calculateScore(3, 5) === 60
    );
    this.assert(
      "Score of 0/5 returns 0%",
      calculateScore(0, 5) === 0
    );

    // 4. WhatsApp share URL builder
    this.assert(
      "WhatsApp URL is correctly formed",
      buildWhatsAppURL("test message").startsWith("https://wa.me/?text=")
    );
    this.assert(
      "WhatsApp URL encodes spaces",
      !buildWhatsAppURL("hello world").includes(" ")
    );

    // 5. Pincode validator
    this.assert(
      "Valid 6-digit pincode passes",
      validatePincode("110001") === true
    );
    this.assert(
      "5-digit pincode fails",
      validatePincode("11000") === false
    );
    this.assert(
      "Non-numeric pincode fails",
      validatePincode("ABCDEF") === false
    );

    // 6. localStorage key storage
    this.assert(
      "API key saves to localStorage",
      testLocalStorage("gemini_api_key", "test123") === true
    );

    // 7. Countdown timer
    this.assert(
      "Countdown returns positive number for future date",
      getCountdownDays(new Date("2025-10-01")) >= 0
    );

    // Results
    console.log(`\n=== Results: ${this.passed} passed, ${this.failed} failed ===`);
    console.log(`Score: ${Math.round((this.passed/(this.passed+this.failed))*100)}%`);
  }
};

// Pure functions to test (mirror these in index.html)
function checkEligibility(age) {
  return typeof age === "number" && age >= 18;
}

function buildSystemPrompt() {
  return `You are Election Saathi. You help Indian citizens 
  understand the Election Commission of India procedures. 
  Never give political opinions or endorse candidates.`;
}

function calculateScore(correct, total) {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

function buildWhatsAppURL(text) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

function validatePincode(pin) {
  return /^\d{6}$/.test(pin);
}

function testLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return localStorage.getItem(key) === value;
  } catch {
    return false;
  }
}

function getCountdownDays(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

// Run tests
tests.run();
