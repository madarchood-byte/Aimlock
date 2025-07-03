// Free Fire OB40 Editor Patch
// ✅ AIMBOT_HEAD + AIMLOCK_HEAD + NO_RECOIL + FOV + SENSI

let body = $response.body;
let json = JSON.parse(body);

// Inject OP-level config
json.config = json.config || {};
json.config["Iphone Ob40 Editor"] = "ANTIBAN 100% |";
json.config["ipad Ob40 Editor"] = "ANTIBAN 100% |";
json.config["EDITOR"] = {
  "Flags": 9999,
  "MaximumSpeed": 9999,
  "TimeToMaximumSpeed": 9999
};

json.config["AIMBOT_HEAD"] = {
  "AIMBOT_HEAD_OB40_gun_M1887_100": true,
  "AIMBOT_HEAD_OB40_gun_MP40_100": true,
  "AIMBOT_HEAD_OB40_gun_M4A1_100": true,
  "AIMBOT_HEAD_OB40_gun_AWM_100": true
};

json.config["AIMLOCK_HEAD"] = {
  "AIMLOCK_HEAD_OB40_gun_M1887_100": true,
  "AIMLOCK_HEAD_OB40_gun_MP40_100": true,
  "AIMLOCK_HEAD_OB40_gun_M4A1_100": true,
  "AIMLOCK_HEAD_OB40_gun_AWM_100": true
};

json.config["NO_RECOIL"] = {
  "NO_RECOIL_OB40_gun_M1887_0": true,
  "NO_RECOIL_OB40_gun_MP40_0": true,
  "NO_RECOIL_OB40_gun_M4A1_0": true,
  "NO_RECOIL_OB40_gun_AWM_0": true
};

json.config["AIMFOV"] = {
  "AIMFOV_OB40_gun_M1887_180": true,
  "AIMFOV_OB40_gun_MP40_180": true,
  "AIMFOV_OB40_gun_M4A1_180": true,
  "AIMFOV_OB40_gun_AWM_180": true
};

json.config["SENSI"] = {
  "SENSI_OB40_gun_M1887_9999": true,
  "SENSI_OB40_gun_MP40_9999": true,
  "SENSI_OB40_gun_M4A1_9999": true,
  "SENSI_OB40_gun_AWM_9999": true
};

$done({ body: JSON.stringify(json) });
