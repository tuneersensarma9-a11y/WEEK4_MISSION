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

I am writing to express my strong interest in the ${role} position at your esteemed organization. I am particularly drawn to this opportunity as it aligns well with my skills, interests, and career aspirations.

My name is ${name}, and I possess a solid foundation in ${skills}.Through my academic and practical experiences, I have developed the ability to approach problems analytically and deliver effective solutions. I am passionate about applying my knowledge to real-world challenges and continuously improving my skill set.

I am confident that my dedication, strong problem-solving abilities, and eagerness to learn will enable me to contribute positively to your team. I thrive in collaborative environments and am always willing to take initiative to achieve organizational goals.

I would greatly value the opportunity to contribute to ${company}, where I can both apply my existing skills and further develop professionally in a dynamic and growth-oriented environment.

Thank you for your time and consideration. I look forward to the possibility of discussing how my skills and enthusiasm can contribute to your organization.

Sincerely,  
${name}`;
}

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputText.innerText);
  copyBtn.innerText = "Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy to Clipboard"), 2000);
});
