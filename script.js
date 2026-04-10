const form = document.getElementById("coverForm");
const outputBox = document.getElementById("outputBox");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  const letter = generateMockCoverLetter(name, role, company, skills);

  outputText.innerText = letter;
  outputBox.classList.remove("hidden");
});

function generateMockCoverLetter(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position at your esteemed organization.

My name is ${name}, and I bring strong expertise in ${skills}. I am passionate about applying my skills to real-world challenges and contributing effectively to your team.

I believe my dedication, problem-solving ability, and eagerness to learn make me a strong candidate for this role.

I would love the opportunity to contribute to ${company} and grow professionally.

Thank you for your time and consideration.

Sincerely,  
${name}`;
}

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.innerText);
  copyBtn.innerText = "Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy to Clipboard"), 2000);
});