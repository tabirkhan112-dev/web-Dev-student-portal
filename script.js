// Login Form
const loginForm = document.querySelectorAll("form")[0];

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login Successful!");
    loginForm.reset();
});

// Signup Form
const signupForm = document.querySelectorAll("form")[1];

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Signup Successful!");
    signupForm.reset();
});

// Student Form
const studentForm = document.querySelectorAll("form")[2];
const table = document.querySelector("table");

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = studentForm.querySelectorAll("input");
    const gender = studentForm.querySelector("select").value;

    const fullName = inputs[0].value;
    const fatherName = inputs[1].value;
    const email = inputs[2].value;
    const dob = inputs[3].value;
    const nationality = inputs[4].value;

    const row = table.insertRow();

    row.innerHTML = `
        <td>${fullName}</td>
        <td>${fatherName}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${dob}</td>
        <td>${nationality}</td>
    `;

    alert("Student Added Successfully!");
    studentForm.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});