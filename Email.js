import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailvalider, setemailvalider] = useState(false);
  const [passwordvalider, setpasswordvalider] = useState(false);

  const VerifierEmail = (fa) => {
    setEmail(fa.target.value);
    const regex = /^[a-zA-Z]+@[a-zA-Z]{4,6}\.(com|ma|fr)$/;
    setemailvalider(regex.test(fa.target.value));
  };

  const VerifierPassword = (fa) => {
    setPassword(fa.target.value);
    setpasswordvalider(fa.target.value.length >= 8);
  };

  const handleSubmit = (fa) => {
    fa.preventDefault();
    if (emailvalider && passwordvalider) {
      alert(`Email: ${email}\nMot de passe: ${password}`);
    } else if (!emailvalider && !passwordvalider) {
      alert("Email et mot de passe invalides!");
    } else if (!emailvalider) {
      alert("Email est  invalide!");
    } else {
      alert("Mot de passe  est invalide!");
    }
  };

  return (
    <div className="center text-center">
      <form style={{ backgroundColor: "#ADD8E6", padding: "20px", borderRadius: "10px" }} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Connexion</h2>
        <div>
        <label>Email :</label>
        </div>
        <input type="text" name="email" value={email} onChange={VerifierEmail} />
        <br />
        <div>
        <label>Mot de passe :</label>
        </div>
        <input type="password" name="password" value={password} onChange={VerifierPassword} />
        <br />
        <input type="submit" value="Envoyer" /><br />
        <span style={{ color: emailvalider ? "green" : "red" }}>{emailvalider ? "valide" : "invalide"} email</span>
        <br />
        <span style={{ color: passwordvalider ? "green" : "red" }}>{passwordvalider ? "valide" : "invalide"} mot de passe</span>
      </form>
    </div>
  );
}

export default Email;