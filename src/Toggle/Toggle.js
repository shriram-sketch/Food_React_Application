import React, { useState, useEffect } from "react";
import "./Toggle.css";
function Component() {
  const [showed, setShowed] = useState(false);
  let data = Object.values(JSON.parse(localStorage.getItem("formData")));
  function clear() {
    localStorage.clear();
  }
  return (
    <div>
      <img
        className="toggle"
        onClick={() => setShowed(!showed)}
        src="data:image/png;base64,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"
        width="40px"
        style={{ marginTop: "5px", cursor: "pointer" }}
      />

      {showed && (
        <div class="toggle-inside">
          <ul aria-labelledby="dropdownMenu1" class="dropdown-menutoggle">
            <img
              src="https://img.icons8.com/material-rounded/344/user.png"
              width="100%"
            />
            {data?.map((item, index) => (
              <>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1X7yOpM5IxFGxUMGATCvrbqC-QL-xYKLwecxONzdajqA/edit?usp=sharing"
                    target="_blank"
                    style={{ color: "#6b8ce6" }}
                  >
                    {item.name}
                  </a>
                </li>
                <li />
                <li>
                  <a
                    href=" "
                    target="_blank"
                    title="Email to request access"
                    style={{ color: "#6b8ce6" }}
                  >
                    {item.phone}
                  </a>
                </li>
                <li>
                  <a
                    href=" "
                    target="_blank"
                    title="Email to request access"
                    style={{ color: "#6b8ce6" }}
                  >
                    {item.email}
                  </a>
                </li>

                <li>
                  <a onClick={clear} style={{ color: "#6b8ce6" }}>
                    Signout
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Component;
