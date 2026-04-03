import { API_BASE_URL } from "../../../constants/constant.js";

const BASE_URL = `${API_BASE_URL}/users`;

function navigate(fromId, toId) {
  document.getElementById(fromId).classList.remove('active');
  document.getElementById(toId).classList.add('active');
}

//login
const loginBtn = document.querySelector("#page1 .btn-primary");

loginBtn.addEventListener("click", async () => {
  const inputs = document.querySelectorAll("#page1 input");

  const email = inputs[0].value;
  const password = inputs[1].value;

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    alert("Login successful ✅");
    console.log(data);
    window.location.href = "../../profile/profile.html";

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
});



//registration
let registerData = {};

const page2Next = document.querySelector("#page2 .btn-primary");

page2Next.addEventListener("click", () => {
  const inputs = document.querySelectorAll("#page2 input");

  registerData.name = inputs[0].value;
  registerData.email = inputs[1].value;

  navigate('page2', 'page3');
});


const page3Next = document.querySelector("#page3 .btn-primary");

page3Next.addEventListener("click", () => {
  const selects = document.querySelectorAll("#page3 select");

  const month = selects[0].value;
  const day = selects[1].value;
  const year = selects[2].value;
  const gender = selects[3].value;

  registerData.DOB = `${year}-${month}-${day}`;
  registerData.gender = gender;

  navigate('page3', 'page4');
});


const page4Next = document.querySelector("#page4 .btn-primary");

page4Next.addEventListener("click", async () => {
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  registerData.password = password;

  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Registered successfully 🎉");
    console.log(data);

    navigate('page4', 'page1');

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
});

//password visibility toggle
function togglePasswordVisibility(checkbox) {
  const passInput = document.getElementById('new-password');
  const confirmInput = document.getElementById('confirm-password');
  const type = checkbox.checked ? 'text' : 'password';
  passInput.type = type;
  confirmInput.type = type;
}