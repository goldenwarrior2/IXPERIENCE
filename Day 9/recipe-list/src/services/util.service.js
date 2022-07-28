
const codes = {
   ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
   ARGUMENT_ERROR: "auth/argument-error",
   APP_NOT_AUTHORIZED: "auth/app-not-authorized",
   APP_NOT_INSTALLED: "auth/app-not-installed",
   CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
   CODE_EXPIRED: "auth/code-expired",
   CORDOVA_NOT_READY: "auth/cordova-not-ready",
   CORS_UNSUPPORTED: "auth/cors-unsupported",
   CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
   CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
   CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
   DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
   DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
   EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
   EMAIL_EXISTS: "auth/email-already-in-use",
   EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
   EXPIRED_OOB_CODE: "auth/expired-action-code",
   EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
   INTERNAL_ERROR: "auth/internal-error",
   INVALID_API_KEY: "auth/invalid-api-key",
   INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
   INVALID_APP_ID: "auth/invalid-app-id",
   INVALID_AUTH: "auth/invalid-user-token",
   INVALID_AUTH_EVENT: "auth/invalid-auth-event",
   INVALID_CERT_HASH: "auth/invalid-cert-hash",
   INVALID_CODE: "auth/invalid-verification-code",
   INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
   INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
   INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
   INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
   INVALID_EMAIL: "auth/invalid-email",
   INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
   INVALID_IDP_RESPONSE: "auth/invalid-credential",
   INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
   INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
   INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
   INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
   INVALID_OOB_CODE: "auth/invalid-action-code",
   INVALID_ORIGIN: "auth/unauthorized-domain",
   INVALID_PASSWORD: "auth/wrong-password",
   INVALID_PERSISTENCE: "auth/invalid-persistence-type",
   INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
   INVALID_PROVIDER_ID: "auth/invalid-provider-id",
   INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
   INVALID_SENDER: "auth/invalid-sender",
   INVALID_SESSION_INFO: "auth/invalid-verification-id",
   INVALID_TENANT_ID: "auth/invalid-tenant-id",
   MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
   MFA_REQUIRED: "auth/multi-factor-auth-required",
   MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
   MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
   MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
   MISSING_CODE: "auth/missing-verification-code",
   MISSING_CONTINUE_URI: "auth/missing-continue-uri",
   MISSING_IFRAME_START: "auth/missing-iframe-start",
   MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
   MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
   MISSING_MFA_INFO: "auth/missing-multi-factor-info",
   MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
   MISSING_PHONE_NUMBER: "auth/missing-phone-number",
   MISSING_SESSION_INFO: "auth/missing-verification-id",
   MODULE_DESTROYED: "auth/app-deleted",
   NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
   NETWORK_REQUEST_FAILED: "auth/network-request-failed",
   NULL_USER: "auth/null-user",
   NO_AUTH_EVENT: "auth/no-auth-event",
   NO_SUCH_PROVIDER: "auth/no-such-provider",
   OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
   OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
   POPUP_BLOCKED: "auth/popup-blocked",
   POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
   PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
   QUOTA_EXCEEDED: "auth/quota-exceeded",
   REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
   REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
   REJECTED_CREDENTIAL: "auth/rejected-credential",
   SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
   SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
   TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
   TIMEOUT: "auth/timeout",
   TOKEN_EXPIRED: "auth/user-token-expired",
   TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
   UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
   UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
   UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
   UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
   UNVERIFIED_EMAIL: "auth/unverified-email",
   USER_CANCELLED: "auth/user-cancelled",
   USER_DELETED: "auth/user-not-found",
   USER_DISABLED: "auth/user-disabled",
   USER_MISMATCH: "auth/user-mismatch",
   USER_SIGNED_OUT: "auth/user-signed-out",
   WEAK_PASSWORD: "auth/weak-password",
   WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
   ALREADY_INITIALIZED: "auth/already-initialized",
}


class Utils {

  getFirebaseError(err) {
    switch (err.code) {
      case codes.INVALID_EMAIL: return 'Your email is not valid';
    }

    return 'An error occured';
  }
}
const service = new Utils();
export default service;