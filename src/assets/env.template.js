(function(window) {
  window["env"] = window["env"] || {};
  // Environment variables
  window["env"]["keycloakUrl"] = "${KEYCLOAK_URL}";
  window["env"]["keycloakRealm"] = "${KEYCLOAK_REALM}";
  window["env"]["keycloakClientId"] = "${KEYCLOAK_CLIENT_ID}";
})(this);