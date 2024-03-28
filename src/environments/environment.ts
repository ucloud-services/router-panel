export const environment = {
	production: false,
	keycloakUrl: window["env"]["keycloakUrl"] || "",
	keycloakRealm: window["env"]["keycloakRealm"] || "",
	keycloakClientId: window["env"]["keycloakClientId"] || ""
};
