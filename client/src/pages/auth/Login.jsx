import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GridComponent from "../../components/GridComponent";

//  icons
const ArrowLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

/* feature icons */
const ProfileIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f97316"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f97316"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f97316"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 4 12 14.01 9 11.01" />
    <path d="M7 21h10M12 17v4" />
    <path d="M3 7V5h18v2a9 9 0 0 1-9 9 9 9 0 0 1-9-9z" />
  </svg>
);

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    //  wire up auth
  };

  const inputStyle = {
    width: "100%",
    background: "#1c1c1c",
    border: "1px solid #2e2e2e",
    borderRadius: "10px",
    padding: "13px 16px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const features = [
    {
      icon: <ProfileIcon />,
      title: "All in One Coding Profile",
      desc: "Centralize your achievements across platforms into a single, high-contrast dashboard.",
    },
    {
      icon: <BookIcon />,
      title: "Follow Popular Sheets",
      desc: "Stay organized with curated data structures and algorithms sheets from the community.",
    },
    {
      icon: <TrophyIcon />,
      title: "Contest Tracker",
      desc: "Never miss a deadline with automated alerts and precision tracking for every major competition.",
    },
  ];

  return (
    <GridComponent>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        {/* ── TOP NAV ───────────────────────────────────────────────── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <ArrowLeft />
            </button>
            <span
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Kom<span style={{ color: "#f97316" }}>pile</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link
              to="/login"
              style={{
                color: "#f97316",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              style={{
                background: "#f97316",
                color: "white",
                padding: "9px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* body */}
        <div style={{ flex: 1, display: "flex" }}>
          {/* LEFT PANEL */}
          <div
            style={{
              flex: "0 0 48%",
              padding: "60px 72px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "44px",
                  fontWeight: "800",
                  margin: "0 0 10px",
                  letterSpacing: "-1px",
                }}
              >
                Sign in
              </h1>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  margin: "0 0 36px",
                }}
              >
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  style={{
                    color: "#3b82f6",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Sign up here
                </Link>
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email address"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                    onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
                  />
                </div>

                {/* Password */}
                <div style={{ marginBottom: "28px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <label style={{ color: "#d1d5db", fontSize: "14px" }}>
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      style={{
                        color: "#f97316",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter password"
                      value={form.password}
                      onChange={handleChange}
                      style={{ ...inputStyle, paddingRight: "48px" }}
                      onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                      onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      style={{
                        position: "absolute",
                        right: "14px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "#9ca3af",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                {/* subnmit */}
                <button
                  id="login-submit"
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#f97316",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "15px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginBottom: "32px",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ea580c";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f97316";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Sign in
                </button>
              </form>

            </div>

            {/* Footer */}
            <div style={{ marginTop: "48px", textAlign: "center" }}>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "12px",
                  lineHeight: "1.7",
                  margin: "0 0 6px",
                }}
              >
                By signing in or creating an account, you are agreeing to our{" "}
                <Link
                  to="/terms"
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and our{" "}
                <Link
                  to="/privacy"
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                © 2024 Kompile.&nbsp;&nbsp;&nbsp;
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Contact Support
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "48px 60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* warm gloww */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "420px",
                height: "420px",
                background:
                  "radial-gradient(circle, rgba(160,80,10,0.45) 0%, transparent 68%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <img
              src="/Assets/logos/hi_logo.png"
              alt="Kompile mascot"
              style={{
                width: "210px",
                height: "auto",
                position: "relative",
                zIndex: 1,
                marginBottom: "20px",
              }}
            />

            <h2
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "700",
                textAlign: "center",
                margin: "0 0 10px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Welcome to Kompile
            </h2>
            <p
              style={{
                color: "#9ca3af",
                textAlign: "center",
                fontSize: "14px",
                lineHeight: "1.65",
                maxWidth: "340px",
                margin: "0 0 36px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Your high-performance utility for technical excellence and
              precision retrieval.
            </p>

            {/* Feature cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                width: "100%",
                maxWidth: "400px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(249,115,22,0.12)",
                      borderRadius: "8px",
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        color: "#9ca3af",
                        fontSize: "12px",
                        lineHeight: "1.55",
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GridComponent>
  );
}

export default Login;
