(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_ChangePassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/ChangePassword */ "H3yn");
/* harmony import */ var _model_UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/UserProfile */ "kmoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function UserProfileComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "use", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " User Profile updated. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_29_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "use", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Invalid OTP, Please try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_29_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 39);
} }
function UserProfileComponent_div_29_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 39);
} }
function UserProfileComponent_div_29_div_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Mobile is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_29_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_29_div_21_p_1_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.mobile.errors.required);
} }
function UserProfileComponent_div_29_div_22_div_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "OTP is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_29_div_22_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_29_div_22_div_5_p_1_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.otp.errors.required);
} }
function UserProfileComponent_div_29_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, UserProfileComponent_div_29_div_22_div_5_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.otp.errors && (ctx_r9.otp.dirty || ctx_r9.otp.touched));
} }
const _c0 = function (a0, a1) { return { "has-danger": a0, "has-success": a1 }; };
function UserProfileComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_29_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.onUserProfileSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserProfileComponent_div_29_div_2_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UserProfileComponent_div_29_div_3_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UserProfileComponent_div_29_div_9_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UserProfileComponent_div_29_div_15_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UserProfileComponent_div_29_div_21_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, UserProfileComponent_div_29_div_22_Template, 6, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Submit form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.userProfileFormData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.userProfileSuccessNotificationAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.invalidOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx_r0.userName.invalid && (ctx_r0.userName.dirty || ctx_r0.userName.touched), ctx_r0.userName.valid && (ctx_r0.userName.dirty || ctx_r0.userName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.userName.errors && (ctx_r0.userName.dirty || ctx_r0.userName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx_r0.email.invalid && (ctx_r0.email.dirty || ctx_r0.email.touched), ctx_r0.email.valid && (ctx_r0.email.dirty || ctx_r0.email.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && (ctx_r0.email.dirty || ctx_r0.email.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx_r0.mobile.invalid && (ctx_r0.mobile.dirty || ctx_r0.mobile.touched), ctx_r0.mobile.valid && (ctx_r0.mobile.dirty || ctx_r0.mobile.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.mobileOTPvalidationPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mobile.errors && (ctx_r0.mobile.dirty || ctx_r0.mobile.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mobileOTPvalidationPopup);
} }
function UserProfileComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " you userHistory goes here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " you transactionHistory goes here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "use", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Password has been updated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password should be 8 character and contain atleast one Upper, lower and Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_32_div_13_p_1_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserProfileComponent_div_32_div_13_p_2_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.oldPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.oldPassword.errors.pattern);
} }
function UserProfileComponent_div_32_div_20_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "New Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_20_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("New Password must be 8 characters long, we need another ", ctx_r22.newPassword.errors.minlength.requiredLength - ctx_r22.newPassword.errors.minlength.actualLength, " characters ");
} }
function UserProfileComponent_div_32_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_32_div_20_p_1_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserProfileComponent_div_32_div_20_p_2_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.newPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.newPassword.errors.minlength);
} }
function UserProfileComponent_div_32_div_27_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_32_div_27_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Confirm Password must be 8 characters long, we need another ", ctx_r24.confirmPassword.errors.minlength.requiredLength - ctx_r24.confirmPassword.errors.minlength.actualLength, " characters ");
} }
function UserProfileComponent_div_32_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserProfileComponent_div_32_div_27_p_1_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserProfileComponent_div_32_div_27_p_2_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.confirmPassword.errors.minlength);
} }
function UserProfileComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "symbol", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserProfileComponent_div_32_div_4_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_32_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UserProfileComponent_div_32_div_13_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UserProfileComponent_div_32_div_20_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, UserProfileComponent_div_32_div_27_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.changePasswordSuccessNotificationAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, ctx_r3.oldPassword.invalid && (ctx_r3.oldPassword.dirty || ctx_r3.oldPassword.touched), ctx_r3.oldPassword.valid && (ctx_r3.oldPassword.dirty || ctx_r3.oldPassword.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.oldPassword.errors && (ctx_r3.oldPassword.dirty || ctx_r3.oldPassword.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx_r3.newPassword.invalid && (ctx_r3.newPassword.dirty || ctx_r3.newPassword.touched), ctx_r3.newPassword.valid && (ctx_r3.newPassword.dirty || ctx_r3.newPassword.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.newPassword.errors && (ctx_r3.newPassword.dirty || ctx_r3.newPassword.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx_r3.confirmPassword.invalid && (ctx_r3.confirmPassword.dirty || ctx_r3.confirmPassword.touched), ctx_r3.confirmPassword.valid && (ctx_r3.confirmPassword.dirty || ctx_r3.confirmPassword.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.confirmPassword.errors && (ctx_r3.confirmPassword.dirty || ctx_r3.confirmPassword.touched));
} }
class UserProfileComponent {
    constructor(apiService, datasevice, router) {
        this.apiService = apiService;
        this.datasevice = datasevice;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
        this.faChalkboardTeacher = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faChalkboardTeacher"];
        this.faTasks = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTasks"];
        this.faUserLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserLock"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"];
        this.personalDetails = true;
        this.userHistory = false;
        this.transactionHistory = false;
        this.changePassword = false;
        this.changePasswordSuccessNotificationAlert = false;
        this.userProfileSuccessNotificationAlert = false;
        this.mobileOTPvalidationPopup = false;
        this.invalidOtp = false;
        this.oldPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=).{8,20}$')]);
        this.newPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=).{8,20}$')]);
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=).{8,20}$')]);
        this.changePasswordObject = new _model_ChangePassword__WEBPACK_IMPORTED_MODULE_2__["ChangePassword"]('', '', '');
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
        });
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?:\\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\\d{7}$')]);
        this.otp = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.userProfileFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: this.userName,
            address: this.address,
            email: this.email,
            mobile: this.mobile,
            otp: this.otp
        });
        if (sessionStorage.getItem('userName') == null) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.apiService.getUser().subscribe(value => {
            console.log(value.body);
            sessionStorage.setItem('mobile', value.body.mobile);
            this.userProfileFormData.setValue({
                userName: value.body.username,
                // address: value.body.address,
                email: value.body.email,
                mobile: value.body.mobile,
                otp: null
            });
        });
    }
    onSubmit() {
        if (this.formData.valid) {
            this.changePasswordObject.oldPassword = this.formData.value.oldPassword;
            this.changePasswordObject.newPassword = this.formData.value.newPassword;
            this.changePasswordObject.confirmPassword = this.formData.value.confirmPassword;
            this.apiService.changePassword(this.changePasswordObject).subscribe(value => {
                this.formData.reset();
                this.changePasswordSuccessNotificationAlert = true;
                setTimeout(() => {
                    this.changePasswordSuccessNotificationAlert = false;
                }, 10000);
            });
        }
    }
    onUserProfileSubmit() {
        console.log(this.userProfileFormData);
        if (this.userProfileFormData.valid) {
            console.log(this.userProfileFormData);
            let userProfile = new _model_UserProfile__WEBPACK_IMPORTED_MODULE_3__["UserProfile"](this.userProfileFormData.value.userName, this.userProfileFormData.value.address, this.userProfileFormData.value.email, this.userProfileFormData.value.mobile, null);
            if (sessionStorage.getItem('mobile') !== this.userProfileFormData.value.mobile && !this.userProfileFormData.value.otp) {
                this.apiService.resendOtp(userProfile).subscribe(value => {
                });
                this.mobileOTPvalidationPopup = true;
                return;
            }
            if (sessionStorage.getItem('mobile') !== this.userProfileFormData.value.mobile && this.userProfileFormData.value.otp) {
                userProfile = new _model_UserProfile__WEBPACK_IMPORTED_MODULE_3__["UserProfile"](this.userProfileFormData.value.userName, this.userProfileFormData.value.address, this.userProfileFormData.value.email, this.userProfileFormData.value.mobile, this.userProfileFormData.value.otp);
            }
            console.log(userProfile);
            this.apiService.updateUser(userProfile)
                .subscribe(value => {
                this.mobileOTPvalidationPopup = false;
                this.userProfileSuccessNotificationAlert = true;
                setTimeout(() => {
                    this.userProfileSuccessNotificationAlert = false;
                }, 10000);
            }, error => {
                this.invalidOtp = true;
                setTimeout(() => {
                    this.invalidOtp = false;
                }, 10000);
            });
        }
    }
    personalDetailsClick() {
        this.personalDetails = true;
        this.transactionHistory = false;
        this.changePassword = false;
        this.userHistory = false;
        this.mobileOTPvalidationPopup = false;
        this.apiService.getUser().subscribe(value => {
            console.log(value.body);
            sessionStorage.setItem('mobile', value.body.mobile);
            this.userProfileFormData.setValue({
                userName: value.body.username,
                // address: value.body.address,
                email: value.body.email,
                mobile: value.body.mobile,
                otp: null
            });
        });
    }
    _userHistory() {
        this.personalDetails = false;
        this.transactionHistory = false;
        this.changePassword = false;
        this.userHistory = true;
    }
    _transactionHistory() {
        this.personalDetails = false;
        this.transactionHistory = true;
        this.changePassword = false;
        this.userHistory = false;
    }
    _changePassword() {
        this.personalDetails = false;
        this.transactionHistory = false;
        this.changePassword = true;
        this.userHistory = false;
    }
    logout() {
        sessionStorage.clear();
        this.datasevice.logout();
        window.location.href = '/';
    }
    _wallet() {
        this.router.navigate(['/payment']);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 33, vars: 9, consts: [[1, "container", 2, "margin-top", "5em"], [1, "row", "mt-5"], [1, "display-6", "text-primary", 2, "text-align", "center"], [1, "col-4", "mt-3"], [1, "list-group"], [1, "list-group-item", 2, "background-color", "#FF3B30"], [1, "row"], [1, "col", 2, "text-align", "center"], ["src", "../../assets/img/user.png", "width", "100", "height", "100", 1, "rounded-circle", "border", "border-1"], [1, "list-group-item"], [1, "badge", "bg-primary", 3, "click"], ["type", "button", 1, "list-group-item", 3, "click"], [3, "icon"], ["class", "col-8 mt-3", 4, "ngIf"], [1, "col-8", "mt-3"], [1, "row", "g-3", "needs-validation", 3, "formGroup", "ngSubmit"], ["class", "alert alert-success d-flex align-items-center", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center", "role", "alert", 4, "ngIf"], [1, "col-md-6"], [1, "form-group", 3, "ngClass"], ["for", "userName", 1, "form-label"], ["type", "text", "id", "userName", "formControlName", "userName", 1, "form-control"], ["class", "form-control-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "mobile", 1, "form-label"], ["type", "text", "id", "mobile", "formControlName", "mobile", "required", "", 1, "form-control", 3, "disabled"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-12"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", "required", "", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center"], ["width", "24", "height", "24", "role", "img", "aria-label", "Success:", 1, "bi", "flex-shrink-0", "me-2"], [0, "xlink", "href", "#check-circle-fill"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center"], ["width", "24", "height", "24", "role", "img", "aria-label", "Danger:", 1, "bi", "flex-shrink-0", "me-2"], [0, "xlink", "href", "#exclamation-triangle-fill"], [1, "form-control-feedback"], [4, "ngIf"], [1, "form-group"], ["for", "otp", 1, "form-label"], ["type", "text", "id", "otp", "formControlName", "otp", "required", "", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"], ["id", "check-circle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "col-6"], ["for", "oldPassword", 1, "form-label"], ["type", "password", "id", "oldPassword", "formControlName", "oldPassword", "required", "", 1, "form-control"], [1, "row", "mt-3"], ["for", "newPassword", 1, "form-label"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "required", "", 1, "form-control"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "required", "", 1, "form-control"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Wallet AED 50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_span_click_12_listener() { return ctx._wallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Top Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_14_listener() { return ctx.personalDetailsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Personal Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_17_listener() { return ctx._userHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " User History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_20_listener() { return ctx._transactionHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Transaction History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_23_listener() { return ctx._changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Log Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UserProfileComponent_div_29_Template, 30, 20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UserProfileComponent_div_30_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, UserProfileComponent_div_31_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UserProfileComponent_div_32_Template, 32, 17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faChalkboardTeacher);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faUserLock);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.personalDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transactionHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.changePassword);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".form-control-feedback[_ngcontent-%COMP%]{\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1mZWVkYmFja3tcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "/sNo":
/*!********************************************************!*\
  !*** ./src/app/cart-content/cart-content.component.ts ***!
  \********************************************************/
/*! exports provided: CartContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContentComponent", function() { return CartContentComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-confirmation-popover */ "psqO");










function CartContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cart is empty ... !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Shop Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faCartPlus);
} }
const _c0 = function (a0) { return { width: a0 }; };
function CartContentComponent_div_2_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartContentComponent_div_2_table_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.removefromCart(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Item's");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartContentComponent_div_2_table_3_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.addtoCart(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("confirm", function CartContentComponent_div_2_table_3_Template_button_confirm_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.deleteItem(item_r3); })("cancel", function CartContentComponent_div_2_table_3_Template_button_cancel_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.cancelClicked = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r3.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.productDTO.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, item_r3.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popoverTitle", ctx_r2.popoverTitle)("popoverMessage", ctx_r2.popoverMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r3.qty, " AED");
} }
function CartContentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CartContentComponent_div_2_table_3_Template, 26, 9, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " AED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Inclusive of vat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.cartItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" TOTAL (", ctx_r1.count, " item's) ", ctx_r1.count, ".00 ");
} }
class CartContentComponent {
    constructor(formBuilder, dataservice, router, http) {
        this.formBuilder = formBuilder;
        this.dataservice = dataservice;
        this.router = router;
        this.http = http;
        this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCartPlus"];
        this.cartItem = [];
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.popoverTitle = 'Items Delete';
        this.popoverMessage = 'You are about ot  detele this items';
        this.payNowForm = this.formBuilder.group({
            amountToRecharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")])
        });
    }
    ngOnInit() {
        this.dataservice.cart.subscribe((cart) => {
            this.cartItem = cart;
        });
        this.dataservice.count.subscribe((count) => {
            this.count = count;
        });
        // this.cartItem = JSON.parse(localStorage.getItem('item') ||'[]');  
        // this.count = JSON.parse(localStorage.getItem('count') ||'[]');
    }
    get amountToRecharge() {
        return this.payNowForm.get('amountToRecharge');
    }
    addtoCart(draw) {
        this.dataservice.addtoCart(draw);
    }
    removefromCart(draw) {
        this.dataservice.removefromCart(draw);
    }
    buyAll(draw) {
        this.dataservice.buyAll(draw);
    }
    deleteItem(draw) {
        this.dataservice.deleteItem(draw);
    }
    valuechange(UpdatedValue, item) {
        //const x = parseInt(UpdatedValue.data);
        console.log(UpdatedValue);
        console.log(item);
        this.dataservice.userEnter(UpdatedValue, item);
    }
}
CartContentComponent.ɵfac = function CartContentComponent_Factory(t) { return new (t || CartContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CartContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartContentComponent, selectors: [["app-cart-content"]], decls: 3, vars: 2, consts: [[1, "container", 2, "margin-top", "7em"], ["class", "row", "style", "margin-top: 150px; margin-bottom: 300px; text-align: center", 4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [1, "row", 2, "margin-top", "150px", "margin-bottom", "300px", "text-align", "center"], [1, "col-12"], [2, "margin", "auto", "text-align", "center", "margin-bottom", "5em"], [1, "display-6", "text-primary"], ["src", "../../assets/img/empty_cart.svg", 1, "mt-5"], ["routerLink", "", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg"], [3, "icon"], [1, "row", "mt-5"], [1, "col-md-9", "mt-2"], [1, "table-responsive", "border", "rounded"], ["class", "table table-borderless align-middle", "style", "width: 950px", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mt-2"], [1, "card"], [1, "card-body", 2, "text-align", "center"], [1, "h6"], [1, "text-primary"], ["routerLink", "/checkout_list", 1, "btn", "btn-primary"], [1, "table", "table-borderless", "align-middle", 2, "width", "950px"], [1, "cart_item_img", 3, "src"], [1, "progress", 2, "height", "7px"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-warning", "w-10", 3, "ngStyle"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "fw-lighter"], ["mwlConfirmationPopover", "", "placement", "left", "type", "button", 1, "btn", "btn-outline-danger", 3, "popoverTitle", "popoverMessage", "confirm", "cancel"]], template: function CartContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CartContentComponent_div_1_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CartContentComponent_div_2_Template, 15, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__["ConfirmationPopoverDirective"]], styles: [".cart_item_img[_ngcontent-%COMP%]{\n    padding: 5%;\n    margin: 5%;\n    max-width: 100px;\n    max-height: 100px;\n\n}\ntd[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 10rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJjYXJ0LWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0X2l0ZW1faW1ne1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1hcmdpbjogNSU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcblxufVxudGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/luck/luk_/src/main.ts */"zUnb");


/***/ }),

/***/ "4vIn":
/*!***********************************************************!*\
  !*** ./src/app/home/best-seller/best-seller.component.ts ***!
  \***********************************************************/
/*! exports provided: BestSellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestSellerComponent", function() { return BestSellerComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








const _c0 = function (a0) { return { "width": a0 }; };
function BestSellerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sold Out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Get a Chance to Win");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ROUND ", preview_r3.drawRoundNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r3.currentDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r3.totalDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, preview_r3.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r3.percentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", preview_r3.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](preview_r3.productDTO.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r3.productDTO.productDescription, ". ");
} }
function BestSellerComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sold Out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_22_div_2_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const draw_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.productPreview(draw_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Get a chance to win");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Enter the Draw with AED 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_22_div_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const draw_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.productPreview(draw_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BestSellerComponent_div_22_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const draw_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.addtoCart(draw_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draw_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r5.currentDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r5.totalDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, draw_r5.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", draw_r5.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r5.productDTO.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faShoppingCart);
} }
function BestSellerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "carousel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BestSellerComponent_div_22_div_2_Template, 30, 8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 490)("cellWidth", 400)("autoplay", true)("margin", 10)("minSwipeDistance", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.draws);
} }
function BestSellerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faShoppingCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.count);
} }
class BestSellerComponent {
    constructor(ApiService, dataservice) {
        this.ApiService = ApiService;
        this.dataservice = dataservice;
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
        this.filter = 'BEST_SELLER';
        this.cartItems = [];
    }
    ngOnInit() {
        this.ApiService.getDraw(this.filter).subscribe((drawData) => {
            this.draws = drawData.body;
        });
        this.dataservice.count.subscribe((countter) => {
            this.count = countter;
        });
    }
    productPreview(_id) {
        this.previews = this.draws.filter((draw) => draw.id == _id);
        //console.log(this.preview)
    }
    addtoCart(draw) {
        this.dataservice.addtoCart(draw);
        this.dataservice.cartItems.subscribe((items) => {
            this.draws = items;
            console.log(this.draws);
        });
    }
    removefromCart(draw) {
        this.dataservice.addtoCart(draw);
    }
}
BestSellerComponent.ɵfac = function BestSellerComponent_Factory(t) { return new (t || BestSellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
BestSellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BestSellerComponent, selectors: [["app-best-seller"]], decls: 27, vars: 3, consts: [["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngFor", "ngForOf"], [1, "container", "mb-5"], [1, "row", "mt-4"], [1, "col-md", "mt-4"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["href", "#best_seeler"], ["href", "#new_arrival"], ["href", "#sold_out"], [1, "col-md"], [1, "row", "mt-2"], [1, "col", "mt-4"], ["id", "best_seeler", 1, "display-6"], [1, "row", 2, "margin", "25px"], [4, "ngIf"], [1, "row"], [1, "col"], ["routerLink", "/cart_content"], ["class", "cartCss", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "text-primary"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "card-body"], [1, "text-success"], [1, "text-secondary"], [1, "text-danger"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-warning", "w-10", 3, "ngStyle"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "h6", "text-primary"], [1, "h4"], [1, "lead", "text-secondary"], [3, "height", "cellWidth", "autoplay", "margin", "minSwipeDistance"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", "alt", "...", 1, "card-img-top", 2, "width", "200px", "height", "200px", "margin-left", "19%", 3, "src", "click"], [1, "text-primary"], [1, "col-12"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", "type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "width", "150px", 3, "click"], [3, "icon"], [1, "cartCss"], ["size", "2x", 2, "color", "white", 3, "icon"], [1, "badge", "rounded-pill", 2, "margin-top", "-6px", "position", "absolute", "margin-left", "-15px", "background-color", "#F08080"]], template: function BestSellerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BestSellerComponent_div_2_Template, 24, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Best Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "New Arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Sold Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "BEST SELLER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BestSellerComponent_div_22_Template, 3, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, BestSellerComponent_div_26_Template, 4, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.previews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.draws !== undefined && ctx.draws.length >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.count);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: ["a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\n\n   \n  color: #484848;\n \n    text-decoration: none;\n    display: inline-block;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3Qtc2VsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGNBQWM7O0lBRVoscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJiZXN0LXNlbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLCBhOnZpc2l0ZWQge1xuXG4gICBcbiAgY29sb3I6ICM0ODQ4NDg7XG4gXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/carousel.component */ "oz1u");
/* harmony import */ var _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./best-seller/best-seller.component */ "4vIn");
/* harmony import */ var _new_arrival_new_arrival_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-arrival/new-arrival.component */ "Gwd2");
/* harmony import */ var _sold_out_sold_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sold-out/sold-out.component */ "hCiE");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./winner/winner.component */ "Ak6X");







class HomeComponent {
    constructor() {
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-6", "mt-2"], [1, "card", "p-3", "card_left"], [1, "row", "mb-2"], [1, "col-8", "p-3"], [1, "h2"], [1, "col-4", "mt-3"], [1, ""], ["width", "80%", "src", "../../assets/img/apple.png"], [1, "mt-2"], ["width", "80%", "src", "../../assets/img/google.png"], [1, "card", "card_right", 2, "min-height", "162px"], [1, "col", "pt-3", "d-flex", "justify-content-center"], ["src", "../../assets/img/iphone_12_PNG23@2x.png", "alt", "...", "width", "120", 2, "max-height", "120px"], [1, "col-md-8", "text-center"], [1, "card-body", "tex-center"], [1, "card-title"], [1, "card-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-best-seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Say Hello to Our Latest App Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Win");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "iPhone 12 Pro Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Spend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " 1 AED | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "And Make it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " YOURS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-new-arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-sold-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-winner");
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_3__["BestSellerComponent"], _new_arrival_new_arrival_component__WEBPACK_IMPORTED_MODULE_4__["NewArrivalComponent"], _sold_out_sold_out_component__WEBPACK_IMPORTED_MODULE_5__["SoldOutComponent"], _winner_winner_component__WEBPACK_IMPORTED_MODULE_6__["WinnerComponent"]], styles: [".card_right[_ngcontent-%COMP%], .card_left[_ngcontent-%COMP%]{\n    border-radius: 7px;\n    color: white;\n    \n}\n.card_left[_ngcontent-%COMP%]{\nborder-color: #2066B0;\nbackground-color: #2066B0;\n}\n.card_right[_ngcontent-%COMP%]{\n    border-color: #ff1493;\n    background-color:#ff1493;\n}\nsmall[_ngcontent-%COMP%]{\n    color: white;\n}\n.oblique[_ngcontent-%COMP%]{\n    font-style: oblique;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1COztFQUVyQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9yaWdodCwgLmNhcmRfbGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxufVxuLmNhcmRfbGVmdHtcbmJvcmRlci1jb2xvcjogIzIwNjZCMDtcbmJhY2tncm91bmQtY29sb3I6ICMyMDY2QjA7XG59XG4uY2FyZF9yaWdodHtcbiAgICBib3JkZXItY29sb3I6ICNmZjE0OTM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmYxNDkzO1xufVxuc21hbGx7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm9ibGlxdWV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgXG4gIH0iXX0= */"] });


/***/ }),

/***/ "Ak6X":
/*!*************************************************!*\
  !*** ./src/app/home/winner/winner.component.ts ***!
  \*************************************************/
/*! exports provided: WinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerComponent", function() { return WinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");


class WinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
WinnerComponent.ɵfac = function WinnerComponent_Factory(t) { return new (t || WinnerComponent)(); };
WinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinnerComponent, selectors: [["app-winner"]], decls: 34, vars: 5, consts: [[1, "container-fluid", "p-3", 2, "background-color", "#2ECC71", "color", "white", "margin-top", "8rem"], [1, "container", "p-3"], [1, "row"], [1, "col-8"], ["id", "winners", 1, "display-6"], [3, "height", "cellWidth", "autoplay", "margin", "minSwipeDistance"], [1, "carousel-cell", "m-2"], [1, "card", "p-2", 2, "color", "#239B56", "text-align", "center"], [1, "fs-4"], ["src", "../../assets/img/Group 11303@2x.jpg", 1, "card-img-top", 2, "height", "200px"], [1, "card-body"], [1, ""], [1, "text-secondary"], ["href", "#", 1, "btn", 2, "background-color", "#239B56", "color", "white"], ["src", "../../assets/img/Group 11305@2x.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px"]], template: function WinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WINNERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All our winners are listed here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12 : 00 : 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mercedes - A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get a chance to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "12 : 00 : 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "I phone 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Get a chance to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Next Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 450)("cellWidth", 300)("autoplay", true)("margin", 15)("minSwipeDistance", 5);
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5uZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.counter = 0;
        this.cartItems = [];
        this.userName = sessionStorage.getItem("userName");
        this.userToken = sessionStorage.getItem("token");
        this.userVerified = sessionStorage.getItem("userVerified");
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.userName);
        this.verified = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.userVerified);
        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.counter);
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.cartItems);
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.userToken);
    }
    logout() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.userName);
    }
    addtoCart(draw) {
        this.existItem = this.cartItems.find((x) => x.productId == draw.productId);
        if (this.existItem) {
            this.cartItems = this.cartItems.map((x) => x.productId === draw.productId
                ? Object.assign(Object.assign({}, this.existItem), { qty: this.existItem.qty + 1 }) : x);
        }
        else {
            this.cartItems = [...this.cartItems, Object.assign(Object.assign({}, draw), { qty: 1 })];
        }
        let counter = 0;
        this.cartItems.forEach(function (x) {
            counter += x.qty;
        });
        this.count.next(counter);
        this.cart.next(this.cartItems);
        sessionStorage.setItem('item', JSON.stringify(this.cartItems));
        sessionStorage.setItem('count', JSON.stringify(counter));
    }
    userEnter(userInput, items) {
        this.existItem = this.cartItems.find((x) => x.productId == items.productId);
        if (this.existItem) {
            this.cartItems = this.cartItems.map((x) => x.productId === items.productId
                ? Object.assign(Object.assign({}, this.existItem), { qty: userInput }) : x);
        }
        let counter = 0;
        this.cartItems.forEach(function (x) {
            counter += x.qty;
        });
        this.count.next(counter);
        this.cart.next(this.cartItems);
        //localStorage.setItem('items',JSON.stringify(this.cartItems)); 
        // localStorage.setItem('count',JSON.stringify(counter));
    }
    removefromCart(draw) {
        this.existItem = this.cartItems.find((x) => x.productId === draw.productId);
        if (this.existItem.qty === 1) {
            this.cartItems = this.cartItems.filter((x) => x.productId !== draw.productId);
        }
        else {
            this.cartItems = this.cartItems.map((x) => x.productId === draw.productId
                ? Object.assign(Object.assign({}, this.existItem), { qty: this.existItem.qty - 1 }) : x);
        }
        let counter = 0;
        this.cartItems.forEach(function (itemQTY) {
            counter += itemQTY.qty;
        });
        this.count.next(counter);
        this.cart.next(this.cartItems);
        // localStorage.setItem('items',JSON.stringify(this.cartItems)); 
    }
    deleteItem(draw) {
        this.cartItems = this.cartItems.filter((x) => x.productId !== draw.productId);
        localStorage.setItem('items', JSON.stringify(this.cartItems));
        let counter = 0;
        this.cartItems.forEach(function (itemQTY) {
            counter += itemQTY.qty;
        });
        this.count.next(counter);
        this.cart.next(this.cartItems);
    }
    buyAll(draw) {
        this.existItem = this.cartItems.find((x) => x.productId == draw.productId);
        if (this.existItem) {
            this.cartItems = this.cartItems.map((x) => x.productId === draw.productId
                ? Object.assign(Object.assign({}, this.existItem), { qty: this.existItem.totalDrawEntrants - draw.currentDrawEntrants }) : x);
            localStorage.setItem('items', JSON.stringify(this.cartItems));
        }
        let counter = 0;
        this.cartItems.forEach(function (itemQTY) {
            counter += itemQTY.qty;
        });
        this.count.next(counter);
        this.cart.next(this.cartItems);
        //localStorage.setItem('count',JSON.stringify(counter));
        // localStorage.setItem('items',JSON.stringify(this.cartItems)); 
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Gwd2":
/*!***********************************************************!*\
  !*** ./src/app/home/new-arrival/new-arrival.component.ts ***!
  \***********************************************************/
/*! exports provided: NewArrivalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArrivalComponent", function() { return NewArrivalComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







const _c0 = function (a0) { return { "width": a0 }; };
function NewArrivalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sold Out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Get a Chance to Win");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ROUND ", preview_r2.drawRoundNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r2.currentDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r2.totalDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, preview_r2.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r2.percentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", preview_r2.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](preview_r2.productDTO.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", preview_r2.productDTO.productDescription, ". ");
} }
function NewArrivalComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sold Out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewArrivalComponent_div_9_div_2_Template_img_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const draw_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.productPreview(draw_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Get a chance to win ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "1 AED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewArrivalComponent_div_9_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const draw_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.productPreview(draw_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewArrivalComponent_div_9_div_2_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const draw_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.addtoCart(draw_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draw_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r4.currentDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r4.totalDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, draw_r4.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", draw_r4.percentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", draw_r4.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](draw_r4.productDTO.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faShoppingCart);
} }
function NewArrivalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "carousel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewArrivalComponent_div_9_div_2_Template, 31, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 550)("cellWidth", 300)("autoplay", true)("margin", 5)("minSwipeDistance", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.newArrival);
} }
class NewArrivalComponent {
    constructor(dataservice, ApiService) {
        this.dataservice = dataservice;
        this.ApiService = ApiService;
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
        this.filter = 'NEW_ARRIVAL';
    }
    ngOnInit() {
        this.ApiService.getDraw(this.filter).subscribe((drawData) => {
            this.newArrival = drawData.body;
        });
        this.dataservice.count.subscribe(c => {
            this.count = c;
        });
    }
    productPreview(_id) {
        this.previews = this.newArrival.filter((draw) => draw.id == _id);
        console.log(this.previews);
    }
    addtoCart(product) {
        this.dataservice.addtoCart(product);
    }
}
NewArrivalComponent.ɵfac = function NewArrivalComponent_Factory(t) { return new (t || NewArrivalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
NewArrivalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewArrivalComponent, selectors: [["app-new-arrival"]], decls: 10, vars: 2, consts: [["id", "staticBackdrop1", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngFor", "ngForOf"], [1, "container", "mb-5"], [1, "row", "mt-4"], [1, "col", "mt-4"], ["id", "new_arrival", 1, "display-6"], [4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "text-primary"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "card-body"], [1, "text-success"], [1, "text-secondary"], [1, "text-danger"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-warning", "w-10", 3, "ngStyle"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "h6", "text-primary"], [1, "h4"], [1, "lead", "text-secondary"], [3, "height", "cellWidth", "autoplay", "margin", "minSwipeDistance"], ["class", "carousel-cell m-2", 4, "ngFor", "ngForOf"], [1, "carousel-cell", "m-2"], [1, "card-body", "m-2", "p-2"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop1", "alt", "...", 1, "card-img-top", 2, "width", "200px", "height", "200px", "margin-left", "14%", 3, "src", "click"], [1, "h6"], [1, "row", "mt-2"], [1, "col", "mt-1"], [1, "col", "con"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop1", "type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "width", "150px", 3, "click"], [3, "icon"]], template: function NewArrivalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewArrivalComponent_div_2_Template, 24, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NEW ARRIVAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NewArrivalComponent_div_9_Template, 3, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.previews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newArrival !== undefined && ctx.newArrival.length >= 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYXJyaXZhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _helper_base_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/base_url */ "iwus");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");





class ApiService {
    constructor(dataservice, httpClient) {
        this.dataservice = dataservice;
        this.httpClient = httpClient;
    }
    /* when user  getting the first look */
    getDraw(filter) {
        return this.httpClient.get(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `draw/public?status=${filter}`);
    }
    drawDetails(filter) {
        return this.httpClient.get(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `draw/public${filter}`);
    }
    getUserBalance(token) {
        const headedsrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', `Bearer ${token}`)
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('content-type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        headers = headers.append('Authorization', `Bearer ${token}`);
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        console.log(headers);
        return this.httpClient.get(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `user/me`, { headers });
    }
    changePassword(object) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('content-type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        console.log(headers);
        return this.httpClient.post(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `user/change_password`, object, { headers });
    }
    getUser() {
        let headers = this.getHeader();
        console.log(headers);
        return this.httpClient.get(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `user/me`, { headers });
    }
    updateUser(userProfile) {
        let headers = this.getHeader();
        return this.httpClient.put(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `user/update`, userProfile, { headers });
    }
    resendOtp(userProfile) {
        let headers = this.getHeader();
        let json = {
            mobile: userProfile.mobile
        };
        return this.httpClient.post(_helper_base_url__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + `user/resend_otp`, json, { headers });
    }
    getHeader() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('content-type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H3yn":
/*!*****************************************!*\
  !*** ./src/app/model/ChangePassword.ts ***!
  \*****************************************/
/*! exports provided: ChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
class ChangePassword {
    constructor(oldPassword, newPassword, confirmPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
}


/***/ }),

/***/ "HbLN":
/*!*************************************************************************!*\
  !*** ./src/app/home/check-phone-verify/check-phone-verify.component.ts ***!
  \*************************************************************************/
/*! exports provided: CheckPhoneVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPhoneVerifyComponent", function() { return CheckPhoneVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function CheckPhoneVerifyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Send verification code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckPhoneVerifyComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
    }
    ngOnInit() {
        this.dataservice.verified.subscribe((verified) => {
            this.userVerified = verified;
            console.log(this.userVerified);
        });
    }
}
CheckPhoneVerifyComponent.ɵfac = function CheckPhoneVerifyComponent_Factory(t) { return new (t || CheckPhoneVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
CheckPhoneVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckPhoneVerifyComponent, selectors: [["app-check-phone-verify"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "display-6"], ["class", "row", "style", "margin-top: 7em; margin-bottom: 15em", 4, "ngIf"], [1, "row", 2, "margin-top", "7em", "margin-bottom", "15em"], [1, "col-md-12"], [1, "card", "border-0"], [1, "col-6", 2, "margin-top", "60px", "text-align", "right"], ["src", "../../assets/img/Verify your Mobile number first.svg", "alt", "...", "width", "200px"], [1, "col-6"], [1, "card-body", 2, "margin-top", "40px"], [1, "form__group", "field"], ["formControlName", "password", "type", "text", "placeholder", "Enter phone number", 1, "form__field"], ["for", "name", 1, "form__label"], ["type", "submit", 1, "btn", "btn-primary"]], template: function CheckPhoneVerifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You need to verify your phone number ... !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckPhoneVerifyComponent_div_5_Template, 17, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userVerified == "false");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".form__group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 20px 0 0;\n    margin-top: 10px;\n    width: 50%;\n  }\n  \n  .form__field[_ngcontent-%COMP%] {\n    font-family: inherit;\n    width: 100%;\n    border: 0;\n    border-bottom: 2px solid #9b9b9b;\n    outline: 0;\n    font-size: 1.3rem;\n    color: black;\n    padding: 7px 0;\n    background: transparent;\n    transition: border-color 0.2s;\n  }\n  \n  .form__field[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n  }\n  \n  .form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    cursor: text;\n    top: 20px;\n  }\n  \n  .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: #2066B0;\n  }\n  \n  .form__field[_ngcontent-%COMP%]:focus {\n    padding-bottom: 6px;\n    font-weight: 700;\n    border-width: 3px;\n    border-image: linear-gradient(to right, #2066B0, #2066B0);\n    border-image-slice: 1;\n  }\n  \n  .form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: #2066B0;\n    font-weight: 700;\n  }\n  \n  \n  \n  .form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLXBob25lLXZlcmlmeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsNkJBQTZCO0VBQy9COztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5REFBeUQ7SUFDekQscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBLGdCQUFnQjs7RUFDaEI7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUEsU0FBUyIsImZpbGUiOiJjaGVjay1waG9uZS12ZXJpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtX19ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmZvcm1fX2ZpZWxkIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YjliOWI7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIH1cbiAgLmZvcm1fX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5mb3JtX19maWVsZDpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIHRvcDogMjBweDtcbiAgfVxuICBcbiAgLmZvcm1fX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMjA2NkIwO1xuICB9XG4gIFxuICAuZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwNjZCMCwgIzIwNjZCMCk7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICB9XG4gIC5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzIwNjZCMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAvKiByZXNldCBpbnB1dCAqL1xuICAuZm9ybV9fZmllbGQ6cmVxdWlyZWQsIC5mb3JtX19maWVsZDppbnZhbGlkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIFxuICAvKiBkZW1vICovIl19 */"] });


/***/ }),

/***/ "JeBd":
/*!**********************************************!*\
  !*** ./src/app/winners/winners.component.ts ***!
  \**********************************************/
/*! exports provided: WinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersComponent", function() { return WinnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WinnersComponent {
    constructor() { }
    ngOnInit() {
    }
}
WinnersComponent.ɵfac = function WinnersComponent_Factory(t) { return new (t || WinnersComponent)(); };
WinnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinnersComponent, selectors: [["app-winners"]], decls: 2, vars: 0, template: function WinnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "winners works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5uZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "KDPQ":
/*!**************************************************!*\
  !*** ./src/app/user-auth/user-auth.component.ts ***!
  \**************************************************/
/*! exports provided: UserAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthComponent", function() { return UserAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-in/log-in.component */ "LJdX");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "lGFB");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "T5FD");




class UserAuthComponent {
    constructor() { }
    ngOnInit() { }
}
UserAuthComponent.ɵfac = function UserAuthComponent_Factory(t) { return new (t || UserAuthComponent)(); };
UserAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAuthComponent, selectors: [["app-user-auth"]], decls: 3, vars: 0, template: function UserAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-log-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-forget-password");
    } }, directives: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWF1dGguY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "KbLF":
/*!****************************************************************************!*\
  !*** ./src/app/top-up-payment-messege/top-up-payment-messege.component.ts ***!
  \****************************************************************************/
/*! exports provided: TopUpPaymentMessegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpPaymentMessegeComponent", function() { return TopUpPaymentMessegeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TopUpPaymentMessegeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Checkout list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Continue shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopUpPaymentMessegeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Partial successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Checkout list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Continue shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopUpPaymentMessegeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry need to Top Up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Top-Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopUpPaymentMessegeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Fail ... !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Try shopping agian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopUpPaymentMessegeComponent {
    constructor(_Activatedroute) {
        this._Activatedroute = _Activatedroute;
        this.successful = false;
        this.unsuccessful = false;
        this.partialsuccess = false;
        this.fail = false;
    }
    ngOnInit() {
        this.messege_id = this._Activatedroute.snapshot.paramMap.get('messege_id');
        if (this.messege_id == 1) {
            this.successful = true;
        }
        else if (this.messege_id == 2) {
            this.partialsuccess = true;
        }
        else if (this.messege_id == 3) {
            this.topUp = true;
        }
        else if (this.messege_id == 4) {
            this.fail = true;
        }
    }
}
TopUpPaymentMessegeComponent.ɵfac = function TopUpPaymentMessegeComponent_Factory(t) { return new (t || TopUpPaymentMessegeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TopUpPaymentMessegeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopUpPaymentMessegeComponent, selectors: [["top-up-app-payment-messege"]], decls: 4, vars: 4, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row", 2, "margin-top", "150px", "margin-bottom", "300px", "text-align", "center"], [1, "col-12"], [2, "text-align", "center"], [1, "display-6", "text-primary"], ["src", "../../assets/img/successful.svg", 1, "mb-5"], [1, "col"], [1, "m-2"], ["routerLink", "/display_checkout_list", "type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", 2, "width", "250px"], ["routerLink", "/", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", 2, "width", "250px"], ["src", "../../assets/img/partial.svg", 1, "mb-5"], ["routerLink", "", "type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", 2, "width", "250px"], ["src", "../../assets/img/sorry.svg", 1, "mb-5"], ["routerLink", "/payment", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", 2, "width", "250px"], ["src", "../../assets/img/fail.svg", 1, "mb-5"]], template: function TopUpPaymentMessegeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopUpPaymentMessegeComponent_div_0_Template, 16, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopUpPaymentMessegeComponent_div_1_Template, 16, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopUpPaymentMessegeComponent_div_2_Template, 13, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopUpPaymentMessegeComponent_div_3_Template, 13, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.partialsuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtdXAtcGF5bWVudC1tZXNzZWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "LJdX":
/*!******************************************************!*\
  !*** ./src/app/user-auth/log-in/log-in.component.ts ***!
  \******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _helper_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/header */ "QE4s");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _helper_base_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/base_url */ "iwus");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LogInComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LogInComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
} }
class LogInComponent {
    constructor(datasevice, router, formBuilder, http, socialAuthService) {
        this.datasevice = datasevice;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.socialAuthService = socialAuthService;
        this.socialUser = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialUser"];
        this.isLoggedin = false;
        this.userName = '';
        this.success = false;
        this.passwordError = false;
        this.errorMessage = '';
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.logingUrl = '';
        this.ver = false;
        this.logInForm = this.formBuilder.group({
            mobile: '',
            password: '',
        });
    }
    ngOnInit() {
        this.datasevice.user.subscribe((user) => {
            this.userName = user;
        });
        /* this.socialAuthService.authState.subscribe((user) => {
          this.socialUser = user;
          this.isLoggedin = user != null;
          console.log(this.socialUser);
    
          if (this.isLoggedin) {
            const headers = new HttpHeaders()
              .append('Content-Type', 'application/json')
              .append('Access-Control-Allow-Headers', 'Content-Type')
              .append('Access-Control-Allow-Origin', '*');
    
            const raw = JSON.stringify({
              token: this.socialUser.idToken,
              provider: this.socialUser.provider,
            });
            console.log(raw);
            this.logingUrl = 'auth/social';
            this.http
              .post(baseUrl + this.logingUrl, raw, { headers: headers })
              .subscribe(
                (res) => {
                  console.log(res);
                  this.success = true;
                },
                (error) => {
                  console.log(error);
                }
              );
          }
        }); */
    }
    onSubmit() {
        // this.logInForm.getRawValue
        this.logingUrl = 'auth/signin';
        this.http
            .post(_helper_base_url__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + this.logingUrl, this.logInForm.getRawValue(), _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            /*store in session */
            sessionStorage.setItem('token', res.body.token);
            sessionStorage.setItem('userName', res.body.firstName);
            if (res.body.verified === true) {
                sessionStorage.setItem('userVerified', 'true');
            }
            else
                sessionStorage.setItem('userVerified', 'false');
            /*success message */
            this.success = true;
            this.logSuccessMessage = res.message;
            if (this.router.url === '/login_to_pay' ||
                this.router.url === '/phone_verification_to_pay') {
                setTimeout(function () { location.reload(); }, 1000);
                window.location.href = '/#/checkout_list';
            }
            else {
                setTimeout(function () { location.reload(); }, 2000);
                //window.location.href = '/#/'
            }
        }, (error) => {
            this.errorMessage = error.error.message;
            /** console.log(err.status) **/
        }, () => {
            console.log('HTTP request completed.');
            this.userName = this.userName;
        });
    }
    loginWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
    }
    loginWithFacebook() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    }
    logOut() {
        this.socialAuthService.signOut();
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 39, vars: 4, consts: [["id", "sign_in", "tabindex", "-1", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], [1, "modal-content", "rounded-0", "border-0"], [1, "row"], [1, "col-md-6", 2, "color", "#2066b0"], [1, "m-3"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, ""], ["class", "dummy-positioning d-flex", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col-md-6", "p-5", 2, "background-color", "#2066b0", "color", "white", "text-align", "center"], [1, "display-6"], [3, "formGroup", "ngSubmit"], [1, "form__group", "field"], ["formControlName", "mobile", "type", "text", "placeholder", "Phopne number", 1, "form__field"], ["for", "name", 1, "form__label"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form__field"], ["type", "submit", 1, "btn", "btn-light", "btn-lg", "btn-block", 2, "color", "#2066b0", "width", "100%"], ["href", "#", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#sign_up"], ["href", "#", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#forget_password"], [1, "dummy-positioning", "d-flex"], [1, "success-icon"], [1, "success-icon__tip"], [1, "success-icon__long"], ["src", "../../assets/img/undraw_Login_re_4vu2.svg", 2, "width", "97%", "margin-top", "4rem"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Hello, Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Log in to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LogInComponent_div_12_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LogInComponent_ng_template_13_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Forget password ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.success)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.logInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]], styles: [".form__group[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0 0;\n  margin-top: 10px;\n}\ninput[_ngcontent-%COMP%] {\n  color: white;\n}\n.form__field[_ngcontent-%COMP%] {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid white;\n  outline: 0;\n  font-size: 1.3rem;\n  color: white;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n.form__field[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n.form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n.form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: white;\n}\n.form__field[_ngcontent-%COMP%]:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  border-image: linear-gradient(to right, #ffffff, #ffffff);\n  border-image-slice: 1;\n}\n.form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: white;\n  font-weight: 700;\n}\n\n.form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n  box-shadow: none;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.dummy-positioning[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  align-items: center;\n  justify-content: center;\n}\n.success-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8em;\n  height: 8em;\n  font-size: 15px;\n  border-radius: 50%;\n  border: 4px solid #3cb371;\n  background-color: #fff;\n  position: relative;\n  overflow: hidden;\n  transform-origin: center;\n  animation: showSuccess 180ms ease-in-out;\n  transform: scale(1);\n}\n.success-icon__tip[_ngcontent-%COMP%], .success-icon__long[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  height: 4px;\n  background-color: #3cb371;\n  border-radius: 10px;\n}\n.success-icon__tip[_ngcontent-%COMP%] {\n  width: 2.4em;\n  top: 4.3em;\n  left: 1.4em;\n  transform: rotate(45deg);\n  animation: tipInPlace 300ms ease-in-out;\n  animation-fill-mode: forwards;\n  animation-delay: 180ms;\n  visibility: hidden;\n}\n.success-icon__long[_ngcontent-%COMP%] {\n  width: 4em;\n  transform: rotate(-45deg);\n  top: 3.7em;\n  left: 2.75em;\n  animation: longInPlace 140ms ease-in-out;\n  animation-fill-mode: forwards;\n  visibility: hidden;\n  animation-delay: 440ms;\n}\n@keyframes showSuccess {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes tipInPlace {\n  from {\n    width: 0em;\n    top: 0em;\n    left: -1.6em;\n  }\n  to {\n    width: 2.4em;\n    top: 4.3em;\n    left: 1.4em;\n    visibility: visible;\n  }\n}\n@keyframes longInPlace {\n  from {\n    width: 0em;\n    top: 5.1em;\n    left: 3.2em;\n  }\n  to {\n    width: 4em;\n    top: 3.7em;\n    left: 2.75em;\n    visibility: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseURBQXlEO0VBQ3pELHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUEsZ0JBQWdCO0FBQ2hCOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBU0EsVUFBVTtBQUNWO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUV4Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsd0JBQXdCO0VBRXhCLHVDQUF1QztFQUV2Qyw2QkFBNkI7RUFFN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsWUFBWTtFQUVaLHdDQUF3QztFQUV4Qyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBRWxCLHNCQUFzQjtBQUN4QjtBQVdBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBY0E7RUFDRTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7QUFDRjtBQWNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoibG9nLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHggMCAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9ybV9fZmllbGQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xufVxuLmZvcm1fX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtX19maWVsZDpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHRvcDogMjBweDtcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjZmZmZmZmKTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLyogcmVzZXQgaW5wdXQgKi9cbi5mb3JtX19maWVsZDpyZXF1aXJlZCxcbi5mb3JtX19maWVsZDppbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG5cblxuXG5cblxuLypzdWNjZXNzKi9cbi5kdW1teS1wb3NpdGlvbmluZyB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1Y2Nlc3MtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiA4ZW07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjM2NiMzcxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNob3dTdWNjZXNzIDE4MG1zIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNob3dTdWNjZXNzIDE4MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3VjY2Vzcy1pY29uX190aXAsXG4uc3VjY2Vzcy1pY29uX19sb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzY2IzNzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3VjY2Vzcy1pY29uX190aXAge1xuICB3aWR0aDogMi40ZW07XG4gIHRvcDogNC4zZW07XG4gIGxlZnQ6IDEuNGVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0aXBJblBsYWNlIDMwMG1zIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHRpcEluUGxhY2UgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTgwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMTgwbXM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zdWNjZXNzLWljb25fX2xvbmcge1xuICB3aWR0aDogNGVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0b3A6IDMuN2VtO1xuICBsZWZ0OiAyLjc1ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb25nSW5QbGFjZSAxNDBtcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBsb25nSW5QbGFjZSAxNDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQ0MG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDQ0MG1zO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N1Y2Nlc3Mge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvd1N1Y2Nlc3Mge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgdGlwSW5QbGFjZSB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwZW07XG4gICAgdG9wOiAwZW07XG4gICAgbGVmdDogLTEuNmVtO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMi40ZW07XG4gICAgdG9wOiA0LjNlbTtcbiAgICBsZWZ0OiAxLjRlbTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRpcEluUGxhY2Uge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMGVtO1xuICAgIHRvcDogMGVtO1xuICAgIGxlZnQ6IC0xLjZlbTtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDIuNGVtO1xuICAgIHRvcDogNC4zZW07XG4gICAgbGVmdDogMS40ZW07XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxvbmdJblBsYWNlIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDBlbTtcbiAgICB0b3A6IDUuMWVtO1xuICAgIGxlZnQ6IDMuMmVtO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogNGVtO1xuICAgIHRvcDogMy43ZW07IFxuICAgIGxlZnQ6IDIuNzVlbTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvbmdJblBsYWNlIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDBlbTtcbiAgICB0b3A6IDUuMWVtO1xuICAgIGxlZnQ6IDMuMmVtO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogNGVtO1xuICAgIHRvcDogMy43ZW07XG4gICAgbGVmdDogMi43NWVtO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "NH8U":
/*!************************************************************!*\
  !*** ./src/app/term-condition/term-condition.component.ts ***!
  \************************************************************/
/*! exports provided: TermConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermConditionComponent", function() { return TermConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TermConditionComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermConditionComponent.ɵfac = function TermConditionComponent_Factory(t) { return new (t || TermConditionComponent)(); };
TermConditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermConditionComponent, selectors: [["app-term-condition"]], decls: 21, vars: 0, consts: [[1, "container"], [1, "row", "m-4", "pt-5"], [1, "col"], [1, "h3"], [1, "mt-4"], [1, "mt4"]], template: function TermConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Luck Buy \u2013 Terms & Conditions for the Draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " These draw terms and conditions (\u201CDraw Terms\u201D) govern the terms and conditions applicable to Luck Buy (Fire Phoenix Trading LLC, \u201CLuck Buy\u201D,\u201CWe\u201D,\u201CUs\u201D,\u201COur\u201D) campaign draws that relate to our website (\u201CSite\u201D) and Our mobile app (\u201CApp\u201D), together the\u201CPlatform\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Any party using the Platform and/or participating in a Draw (\u201CUser\u201D,\u201CYou\u201D,\u201CYour\u201D) agrees to be bound by these Draw Terms and Conditions. If You do not agree to these Draw Terms, or any of its terms (including any amendments), then You should immediately cease using the Platform, and not enter any Draw. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " These Draw Terms are effective as of 1June 2021. We may amend these Draw Terms at any point in time without notice and the amendments will take effect once they have been displayed on the Platform. You acknowledge and agree that it is Your responsibility to review these Draw Terms periodically to familiarize Yourself with any modifications. Your continued use of the Platformand/or entry into Draws following any amendments shall be construed as acceptance of those amendments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The Draws will be approved by Dubai Economy (\u201CDE\u201D) and are in accordance with the Commercial Permit Guidebook (as such may be amended from time to time). A valid permit number will be issued for each respective campaign. Where Campaigns are being run from any other jurisdiction we operate from, Luck Buy will obtain the necessary regulatory requirements and permits as stipulated by the law in such jurisdiction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Only Users with a valid membership to the Platform (\u201CPlatformMembers\u201D) thatsatisfy all the terms are eligible to enter into ourDraws. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Each time a Platform Member purchases cloud storage, they are awarded a single complimentary ticket per purchase to a specified Draw. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Complimentary ticket numbers are computer generated and sequential to the order in which they are purchased. Platform Members cannot choose ticket numbers as they are generated only upon checkout and completion of purchase of the storageservice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Service and the complimentary tickets awarded to Platform Members are neither refundable nor transferable and are owned solely and exclusively by the Platform Member who they have been awarded to. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "QE4s":
/*!**********************************!*\
  !*** ./src/app/helper/header.ts ***!
  \**********************************/
/*! exports provided: headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

const headers = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    }),
};
/* export const Headers = new HttpHeaders();

  Headers.set('Authorization','up3gvsehb6pwthq96c8w')
Headers.set('Access-Control-Allow-Origin', '*');
Headers.set('Content-Type', 'application/json');
Headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
Headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');*/ 


/***/ }),

/***/ "QgJj":
/*!**************************************************************************!*\
  !*** ./src/app/display-checkout-list/display-checkout-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: DisplayCheckoutListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayCheckoutListComponent", function() { return DisplayCheckoutListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DisplayCheckoutListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.productDTO.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.qty * 1, "");
} }
function DisplayCheckoutListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayCheckoutListComponent_div_0_div_1_Template, 13, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cartItem);
} }
class DisplayCheckoutListComponent {
    constructor(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    ngOnInit() {
        this.dataservice.cart.subscribe((cart) => {
            this.cartItem = cart;
            console.log(this.cartItem);
        });
        this.dataservice.verified.subscribe((verified) => {
            this.userVerified = verified;
            console.log(this.userVerified);
        });
    }
}
DisplayCheckoutListComponent.ɵfac = function DisplayCheckoutListComponent_Factory(t) { return new (t || DisplayCheckoutListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DisplayCheckoutListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayCheckoutListComponent, selectors: [["app-display-checkout-list"]], decls: 1, vars: 1, consts: [["style", "margin-top: 6em;", "class", "container", 4, "ngIf"], [1, "container", 2, "margin-top", "6em"], ["class", "row mt-5", 4, "ngFor", "ngForOf"], [1, "row", "mt-5"], [1, "col-12", 2, "text-align", "center"], [1, "card"], [1, "row", "g-0"], [1, "col-md-4"], [1, "cart_item_img", 3, "src"], [1, "card-text", "p-5"], [1, "text-muted"]], template: function DisplayCheckoutListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DisplayCheckoutListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".cart_item_img[_ngcontent-%COMP%]{\n    padding: 5%;\n    margin: 5%;\n    max-width: 100px;\n    max-height: 100px;\n\n}\ntd[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 10rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktY2hlY2tvdXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJkaXNwbGF5LWNoZWNrb3V0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0X2l0ZW1faW1ne1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG1hcmdpbjogNSU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcblxufVxudGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'luckbuy';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "T5FD":
/*!************************************************************************!*\
  !*** ./src/app/user-auth/forget-password/forget-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _helper_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/header */ "QE4s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ForgetPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgetPasswordComponent_form_16_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Send Verification Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgetPasswordComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgetPasswordComponent_form_16_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.sendVerificationCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter the phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ForgetPasswordComponent_form_16_button_6_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.mobileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1._enterPhoneNumber);
} }
function ForgetPasswordComponent_form_17_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verifiy Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgetPasswordComponent_form_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgetPasswordComponent_form_17_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.verifiyCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ForgetPasswordComponent_form_17_button_6_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._verifiyCode);
} }
class ForgetPasswordComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.success = false;
        this._enterCode = false;
        this._enterPhoneNumber = true;
        this._sendVerificationCode = true;
        this._verifiyCode = false;
        this.mobileForm = this.formBuilder.group({
            mobile: '',
        });
        this.otpForm = this.formBuilder.group({
            mobile: '',
            otp: '',
        });
    }
    ngOnInit() { }
    sendVerificationCode() {
        const raw = JSON.stringify({
            mobile: this.mobileForm.value.mobile,
        });
        this.http
            .post('https://luck-buy.herokuapp.com/api/auth/forgot_password', raw, _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            console.log(res);
            this._enterCode = true;
            this._enterPhoneNumber = false;
            this._sendVerificationCode = false;
            this._verifiyCode = true;
        }, (error) => {
            console.log(error);
            this.phoneMessegeError = error.error.message;
        });
    }
    verifiyCode() {
        const raw = JSON.stringify({
            mobile: this.mobileForm.value.mobile,
            otp: this.otpForm.value.otp,
        });
        console.log(raw);
        this.http
            .post('https://luck-buy.herokuapp.com//api/auth/validate_forgot_password_otp', raw, _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            console.log(res);
            this.success = true;
        }, (error) => {
            console.log(error);
            this.phoneMessegeError = error.error.message;
        });
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 18, vars: 3, consts: [["id", "forget_password", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], [1, "modal-content", "rounded-0", "border-0"], [1, "row"], [1, "col-md-6", 2, "color", "#2066b0"], [1, "m-3"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, ""], ["src", "../../../assets/img/verifiy.svg", 2, "width", "97%", "margin-top", "4rem"], ["class", "dummy-positioning d-flex mb-5", 4, "ngIf"], [1, "col-md-6", "p-5", 2, "background-color", "#2066b0", "color", "white", "text-align", "center"], [1, "display-6"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "dummy-positioning", "d-flex", "mb-5"], [1, "success-icon"], [1, "success-icon__tip"], [1, "success-icon__long"], [3, "formGroup", "ngSubmit"], [1, "form__group", "field"], ["formControlName", "mobile", "type", "input", "placeholder", "Enter the phone number", 1, "form__field"], ["for", "name", 1, "form__label"], ["type", "submit", "class", "btn btn-light btn-lg btn-block", "style", "color: #2066b0; width: 100%", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-light", "btn-lg", "btn-block", 2, "color", "#2066b0", "width", "100%"], ["formControlName", "otp", "type", "input", "placeholder", "Enter Code", 1, "form__field"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Verification !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ForgetPasswordComponent_div_11_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ForgetPasswordComponent_form_16_Template, 7, 2, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ForgetPasswordComponent_form_17_Template, 7, 2, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._enterPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._verifiyCode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".form__group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 15px 0 0;\n    margin-top: 10px;\n   \n  }\n  input[_ngcontent-%COMP%]{\n      color: white;\n  }\n  .form__field[_ngcontent-%COMP%] {\n    font-family: inherit;\n    width: 100%;\n    border: 0;\n    border-bottom: 2px solid white;\n    outline: 0;\n    font-size: 1.3rem;\n    color:white;\n    padding: 7px 0;\n    background: transparent;\n    transition: border-color 0.2s;\n  }\n  .form__field[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n  }\n  .form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    cursor: text;\n    top: 20px;\n  }\n  .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: white;\n  }\n  .form__field[_ngcontent-%COMP%]:focus {\n    padding-bottom: 6px;\n    font-weight: 700;\n    border-width: 3px;\n    border-image: linear-gradient(to right, #ffffff, #ffffff);\n    border-image-slice: 1;\n  }\n  .form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: white;\n    font-weight: 700;\n  }\n  \n  .form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n  }\n  a[_ngcontent-%COMP%]{\n      color: white;\n  }\n  .dummy-positioning[_ngcontent-%COMP%] {\n\n  margin: 15px;\n align-items: center;\n justify-content: center;\n}\n  .success-icon[_ngcontent-%COMP%] {\n display: inline-block;\n width: 8em;\n height: 8em;\n font-size: 15px;\n border-radius: 50%;\n border: 4px solid #3CB371;\n background-color: #fff;\n position: relative;\n overflow: hidden;\n transform-origin: center;\n animation: showSuccess 180ms ease-in-out;\n transform: scale(1);\n}\n  .success-icon__tip[_ngcontent-%COMP%], .success-icon__long[_ngcontent-%COMP%] {\n display: block;\n position: absolute;\n height: 4px;\n background-color: #3CB371;\n border-radius: 10px;\n}\n  .success-icon__tip[_ngcontent-%COMP%] {\n width: 2.4em;\n top: 4.3em;\n left: 1.4em;\n transform: rotate(45deg);\n animation: tipInPlace 300ms ease-in-out;\n animation-fill-mode: forwards;\n animation-delay: 180ms;\n visibility: hidden;\n}\n  .success-icon__long[_ngcontent-%COMP%] {\n width: 4em;\n transform: rotate(-45deg);\n top: 3.7em;\n left: 2.75em;\n animation: longInPlace 140ms ease-in-out;\n animation-fill-mode: forwards;\n visibility: hidden;\n animation-delay: 440ms;\n}\n  @keyframes showSuccess {\n from {\n   transform: scale(0);\n }\n to {\n   transform: scale(1);\n }\n}\n  @keyframes tipInPlace {\n from {\n   width: 0em;\n   top: 0em;\n   left: -1.6em;\n }\n to {\n   width: 2.4em;\n   top: 4.3em;\n   left: 1.4em;\n   visibility: visible;\n }\n}\n  @keyframes longInPlace {\n from {\n   width: 0em;\n   top: 5.1em;\n   left: 3.2em;\n }\n to {\n   width: 4em;\n   top: 3.7em;\n   left: 2.75em;\n   visibility: visible;\n }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCOztFQUVsQjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUztFQUNYO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7RUFDZDtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseURBQXlEO0lBQ3pELHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCO0VBWUY7O0VBRUUsWUFBWTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7RUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsV0FBVztDQUNYLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUVoQix3Q0FBd0M7Q0FDaEQsbUJBQW1CO0FBQ3BCO0VBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCO0VBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLFdBQVc7Q0FDWCx3QkFBd0I7Q0FFaEIsdUNBQXVDO0NBRXZDLDZCQUE2QjtDQUU3QixzQkFBc0I7Q0FDOUIsa0JBQWtCO0FBQ25CO0VBQ0E7Q0FDQyxVQUFVO0NBQ1YseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixZQUFZO0NBRUosd0NBQXdDO0NBRXhDLDZCQUE2QjtDQUNyQyxrQkFBa0I7Q0FFVixzQkFBc0I7QUFDL0I7RUFXQTtDQUNDO0dBQ0UsbUJBQW1CO0NBQ3JCO0NBQ0E7R0FDRSxtQkFBbUI7Q0FDckI7QUFDRDtFQWNBO0NBQ0M7R0FDRSxVQUFVO0dBQ1YsUUFBUTtHQUNSLFlBQVk7Q0FDZDtDQUNBO0dBQ0UsWUFBWTtHQUNaLFVBQVU7R0FDVixXQUFXO0dBQ1gsbUJBQW1CO0NBQ3JCO0FBQ0Q7RUFjQTtDQUNDO0dBQ0UsVUFBVTtHQUNWLFVBQVU7R0FDVixXQUFXO0NBQ2I7Q0FDQTtHQUNFLFVBQVU7R0FDVixVQUFVO0dBQ1YsWUFBWTtHQUNaLG1CQUFtQjtDQUNyQjtBQUNEIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybV9fZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgXG4gIH1cbiAgaW5wdXR7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmZvcm1fX2ZpZWxkIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIH1cbiAgLmZvcm1fX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5mb3JtX19maWVsZDpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIHRvcDogMjBweDtcbiAgfVxuICBcbiAgLmZvcm1fX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYsICNmZmZmZmYpO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxuICAuZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC8qIHJlc2V0IGlucHV0ICovXG4gIC5mb3JtX19maWVsZDpyZXF1aXJlZCwgLmZvcm1fX2ZpZWxkOmludmFsaWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgYXtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5cblxuXG5cblxuXG5cbiAgXG4gIFxuXG4uZHVtbXktcG9zaXRpb25pbmcge1xuXG4gIG1hcmdpbjogMTVweDtcbiBhbGlnbi1pdGVtczogY2VudGVyO1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VjY2Vzcy1pY29uIHtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gd2lkdGg6IDhlbTtcbiBoZWlnaHQ6IDhlbTtcbiBmb250LXNpemU6IDE1cHg7XG4gYm9yZGVyLXJhZGl1czogNTAlO1xuIGJvcmRlcjogNHB4IHNvbGlkICMzQ0IzNzE7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gb3ZlcmZsb3c6IGhpZGRlbjtcbiB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gLXdlYmtpdC1hbmltYXRpb246IHNob3dTdWNjZXNzIDE4MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgYW5pbWF0aW9uOiBzaG93U3VjY2VzcyAxODBtcyBlYXNlLWluLW91dDtcbiB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3VjY2Vzcy1pY29uX190aXAsIC5zdWNjZXNzLWljb25fX2xvbmcge1xuIGRpc3BsYXk6IGJsb2NrO1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiBoZWlnaHQ6IDRweDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NCMzcxO1xuIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3VjY2Vzcy1pY29uX190aXAge1xuIHdpZHRoOiAyLjRlbTtcbiB0b3A6IDQuM2VtO1xuIGxlZnQ6IDEuNGVtO1xuIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAtd2Via2l0LWFuaW1hdGlvbjogdGlwSW5QbGFjZSAzMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgIGFuaW1hdGlvbjogdGlwSW5QbGFjZSAzMDBtcyBlYXNlLWluLW91dDtcbiAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE4MG1zO1xuICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxODBtcztcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3VjY2Vzcy1pY29uX19sb25nIHtcbiB3aWR0aDogNGVtO1xuIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gdG9wOiAzLjdlbTtcbiBsZWZ0OiAyLjc1ZW07XG4gLXdlYmtpdC1hbmltYXRpb246IGxvbmdJblBsYWNlIDE0MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgYW5pbWF0aW9uOiBsb25nSW5QbGFjZSAxNDBtcyBlYXNlLWluLW91dDtcbiAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NDBtcztcbiAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNDQwbXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzaG93U3VjY2VzcyB7XG4gZnJvbSB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuIH1cbiB0byB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuIH1cbn1cblxuQGtleWZyYW1lcyBzaG93U3VjY2VzcyB7XG4gZnJvbSB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuIH1cbiB0byB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyB0aXBJblBsYWNlIHtcbiBmcm9tIHtcbiAgIHdpZHRoOiAwZW07XG4gICB0b3A6IDBlbTtcbiAgIGxlZnQ6IC0xLjZlbTtcbiB9XG4gdG8ge1xuICAgd2lkdGg6IDIuNGVtO1xuICAgdG9wOiA0LjNlbTtcbiAgIGxlZnQ6IDEuNGVtO1xuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiB9XG59XG5Aa2V5ZnJhbWVzIHRpcEluUGxhY2Uge1xuIGZyb20ge1xuICAgd2lkdGg6IDBlbTtcbiAgIHRvcDogMGVtO1xuICAgbGVmdDogLTEuNmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogMi40ZW07XG4gICB0b3A6IDQuM2VtO1xuICAgbGVmdDogMS40ZW07XG4gICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb25nSW5QbGFjZSB7XG4gZnJvbSB7XG4gICB3aWR0aDogMGVtO1xuICAgdG9wOiA1LjFlbTtcbiAgIGxlZnQ6IDMuMmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogNGVtO1xuICAgdG9wOiAzLjdlbTtcbiAgIGxlZnQ6IDIuNzVlbTtcbiAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gfVxufVxuQGtleWZyYW1lcyBsb25nSW5QbGFjZSB7XG4gZnJvbSB7XG4gICB3aWR0aDogMGVtO1xuICAgdG9wOiA1LjFlbTtcbiAgIGxlZnQ6IDMuMmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogNGVtO1xuICAgdG9wOiAzLjdlbTtcbiAgIGxlZnQ6IDIuNzVlbTtcbiAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "V/CD":
/*!**************************************************!*\
  !*** ./src/app/how-works/how-works.component.ts ***!
  \**************************************************/
/*! exports provided: HowWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowWorksComponent", function() { return HowWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HowWorksComponent {
    constructor() { }
    ngOnInit() {
    }
}
HowWorksComponent.ɵfac = function HowWorksComponent_Factory(t) { return new (t || HowWorksComponent)(); };
HowWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowWorksComponent, selectors: [["app-how-works"]], decls: 47, vars: 0, consts: [[1, "container", 2, "margin-top", "5em"], [1, "row"], [1, "col"], [1, "display-6", "mt-5", "text-primary"], [1, "display-6", "mt-5"], [1, "display-6"], [1, "row", 2, "text-align", "center"], [1, "col-12"], ["src", "../../assets/img/Prize guid line.png", "width", "70%"], [1, "col-12", "mt-5"], [1, "badge", "rounded-pill", "bg-primary", "m-5", "fs-1"], [1, "fs-2"], ["src", "../../assets/img/prize  pic.png", "width", "40%"], ["src", "../../assets/img/2.svg", "width", "40%"], ["src", "../../assets/img/3.svg", "width", "40%"], [1, "col-12", 2, "margin-top", "10em"], ["src", "../../assets/img/DE logos.png", "width", "40%"], ["routerLink", "/", "type", "button", 1, "btn", "btn-primary", "btn-lg", "mt-5", 2, "width", "250px"]], template: function HowWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us & How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Luck Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We at Luck Buy are proceeding towards innovating and revolutionizing the raffles industry. Managed under the aegis of Fire Phoenix Trading LLC, we are offering raffles at a flat ticket price of AED 1. All our draws are regulated and approved by Dubai Economy. If you wish to participate in a draw and win the prize of your dreams, here\u2019s how you can do it:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "How Luck Buy Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This step-by-step guide will help you out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Browse Prizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Explore the available prizes and choose the prize of your dreams.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Buy More to Win More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Participate in the draw by adding tickets to your cart. Buy more tickets to increase your chances of winning. You can also participate in multiple draws simultaneously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Buy More to Win More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Participate in the draw by adding tickets to your cart. Buy more tickets to increase your chances of winning. You can also participate in multiple draws simultaneously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "All Luck Buy draws are approved and regulated by Dubai Economy Department (DED):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Start Shopping Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctd29ya3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/carousel/carousel.component */ "oz1u");
/* harmony import */ var _home_new_arrival_new_arrival_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/new-arrival/new-arrival.component */ "Gwd2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _home_sold_out_sold_out_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/sold-out/sold-out.component */ "hCiE");
/* harmony import */ var _home_winner_winner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/winner/winner.component */ "Ak6X");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/best-seller/best-seller.component */ "4vIn");
/* harmony import */ var _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-auth/user-auth.component */ "KDPQ");
/* harmony import */ var ng_otp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-otp */ "YJH1");
/* harmony import */ var _cart_content_cart_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart-content/cart-content.component */ "/sNo");
/* harmony import */ var _top_up_payment_top_up_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./top-up-payment/top-up-payment.component */ "oI4J");
/* harmony import */ var _user_auth_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-auth/log-in/log-in.component */ "LJdX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-auth/register/register.component */ "lGFB");
/* harmony import */ var _user_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-auth/forget-password/forget-password.component */ "T5FD");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./term-condition/term-condition.component */ "NH8U");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-confirmation-popover */ "psqO");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _home_check_login_check_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/check-login/check-login.component */ "tWfm");
/* harmony import */ var _home_check_phone_verify_check_phone_verify_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/check-phone-verify/check-phone-verify.component */ "HbLN");
/* harmony import */ var _top_up_payment_messege_top_up_payment_messege_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./top-up-payment-messege/top-up-payment-messege.component */ "KbLF");
/* harmony import */ var _draw_details_draw_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./draw-details/draw-details.component */ "jb40");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _how_works_how_works_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./how-works/how-works.component */ "V/CD");
/* harmony import */ var _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./checkout-list/checkout-list.component */ "pQTq");
/* harmony import */ var _display_checkout_list_display_checkout_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./display-checkout-list/display-checkout-list.component */ "QgJj");
/* harmony import */ var _winners_winners_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./winners/winners.component */ "JeBd");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "fXoL");









































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({ providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["GoogleLoginProvider"]('148381744204-po3s46v0qs5ga99fag6skjptpa49p786.apps.googleusercontent.com'),
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["FacebookLoginProvider"]('972099066892477')
                    }
                ],
            },
        },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_10__["IvyCarouselModule"],
            ng_otp__WEBPACK_IMPORTED_MODULE_16__["NgOtpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["SocialLoginModule"],
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_25__["ConfirmationPopoverModule"].forRoot({
                confirmButtonType: 'danger',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
        _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
        _home_new_arrival_new_arrival_component__WEBPACK_IMPORTED_MODULE_5__["NewArrivalComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _home_sold_out_sold_out_component__WEBPACK_IMPORTED_MODULE_11__["SoldOutComponent"],
        _home_winner_winner_component__WEBPACK_IMPORTED_MODULE_12__["WinnerComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _home_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_14__["BestSellerComponent"],
        _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_15__["UserAuthComponent"],
        _cart_content_cart_content_component__WEBPACK_IMPORTED_MODULE_17__["CartContentComponent"],
        _top_up_payment_top_up_payment_component__WEBPACK_IMPORTED_MODULE_18__["TopUpPaymentComponent"],
        _user_auth_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_19__["LogInComponent"],
        _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
        _user_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgetPasswordComponent"],
        _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__["PrivacyPolicyComponent"],
        _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_24__["TermConditionComponent"],
        _home_check_login_check_login_component__WEBPACK_IMPORTED_MODULE_27__["CheckLoginComponent"],
        _home_check_phone_verify_check_phone_verify_component__WEBPACK_IMPORTED_MODULE_28__["CheckPhoneVerifyComponent"],
        _top_up_payment_messege_top_up_payment_messege_component__WEBPACK_IMPORTED_MODULE_29__["TopUpPaymentMessegeComponent"],
        _draw_details_draw_details_component__WEBPACK_IMPORTED_MODULE_30__["DrawDetailsComponent"],
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_32__["FAQComponent"],
        _how_works_how_works_component__WEBPACK_IMPORTED_MODULE_33__["HowWorksComponent"],
        _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_34__["CheckoutListComponent"],
        _display_checkout_list_display_checkout_list_component__WEBPACK_IMPORTED_MODULE_35__["DisplayCheckoutListComponent"],
        _winners_winners_component__WEBPACK_IMPORTED_MODULE_36__["WinnersComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_37__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_10__["IvyCarouselModule"],
        ng_otp__WEBPACK_IMPORTED_MODULE_16__["NgOtpModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_26__["SocialLoginModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_25__["ConfirmationPopoverModule"]] }); })();


/***/ }),

/***/ "dEEo":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 27, vars: 0, consts: [[1, "container"], [1, "row", "m-4", "pt-5"], [1, "col"], [1, "h3"], [1, "h6", "mt-4"], [1, "h6", "mt-5"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The type of information we collect from you is either \u2018Personal\u2019 to you, or is \u2018General\u2019 in nature: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Personal Information: When you register on the Luck Buyplatform as a member and update your information to purchase any goods or services ortake part in promotions or send communications to us, you provide us with information that we store and process. Such information may include your name, address, phone number, email address, purchase and transaction history, interests, a nd other such 'Personal Information'.General Information: We also receive more general information from you as a result of your visits to, and use of, the Platform. This general in formation does not identify you personally, and can include information such as your IP address, the date and time you access the Platform, amount of time you spend on the Platfo rm, your browsing history (recorded by the text and graphics files that compose that page), the Internet address of the website from which you linked directly to our Platform, and other such 'General Information'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Collecting and Using Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " All credit/debit cards details and personally identifiable information will N OT be stored, sold, shared, rented or leased to any third parties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Most of the Platform can be used without providingus with any information. However, certain services may in volve collection of information from you. We use this information to provide you with a better service, and in particular to keep internal records; improve our products, services and the Platform; communicate with you if you have ordered, purchased or participated in anything on the Platform; contact you for market research purposes; and provide you with informat ion about new opportunities, promotions, special offers and other information that we may feel is relevant to you. If you contact us via the Platform, or via email mentioned on the Pla tform, We may keep a record of that correspondence. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We use General Information to help Us make the Platform more useful to visitors (including assessment of content that is of i nterest to visitors), and for other purposes such as determining the Platform\u2019s technical design specifications and identifying system performance or problem areas, for tracking activity on t he Platform, preparing reports, assessing trends, and otherwise monitoring the way in which the Platform is being used, none of which would be in a way that personally identifies any user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Some of the advertisements you see on the Platform are selected and delivered by third parties, such as ad networks , advertising agencies, advertisers, and audience segment providers. These third parties may collect information about you and your online activities, either on the Platform or on other websites, through cookies, web beacons, and other technologies in an effort to understand your interests and deliver to you advertisements that a re tailored to your interests. Please remember that we do not have access to, or control over, the information these third parties may collect. The information practices of these third p arties are not covered by this privacy policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Non-Disclosure of Personal InformationYou agree that we may share your Personal Information within our company. We will not share, sell or rent your Personal Information in any manner to any third parties outside our company except when we have your permission; or if required to do so by law or any governing authority; or to protect our o wn legitimate interests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Keeping your Personal Information secure and preventing unauthorized access our utmost priority, and we take all steps reasonably n ecessary to protect your Personal Information against any unauthorized access, use, alteration, disclosure or destruction. Whilst we have put in place physical, electronic and managerial procedures to secure and safeguard your Personal Information, We shall not be held responsible for any unauthorized access by third parties and we cannot guarantee that the Personal Information provided by you or that is transmitted via the Platform or by e-mail is totally secure and safe.Use of CookiesLike many websi tes and apps, ourplatform uses cookies, which are files that store information on your hard drive. Cookies allow the platform to identify account holders/members, track new user s, record session information, and generally to optimise and enhance your experience. Most browsers accept cookies automatically but if you choose you can disable the cookies from yourbrow ser. For online advertising campaigns, cookies are automatically deleted after one (1) month.We recommend that you leave cookies \u201Cturned on\u201D so that you can enjoy a better experience on the Platform . You may occasionally get cookies from companies advertising on our behalf or on behalf of our subsidiaries. We do not control these cookies, and these cookies are not subject to this Privacy Policy. Use of Google Analytics and Google Tracking PixelsThis Website uses Google Analytics, a web analytics service of Google Inc. (\u201CGoogle\u201D). Google Analytics uses cookies and/ or text files to analyze website traffic. Information generated by cookies with your details (including your IP address) is transferred to a Google server in the United States of America. Google processes this information to evaluate your use of the platform, compile reports about the platform\u2019s activity on our behalf, and deliver other related services regarding website and internet use. Google may also share this information with third parties insofar as this is necessary or if these third parties process the information on behalf of Google. Under no circumstances will Google use your IP address in c onnection with other data supplied by Google.You may disable the cookies from your browser by adjusting your browser settings. However, in this scenario, you may not be able to make full use of allthe f unctions available on the platform. By using the platform, you agree to Google\u2019s processing of the type of information discussed in this section in the manner contemplated in this policy. Us, and our respec tive suppliers, and anyof our shareholders, subsidiaries, parent companies, and any of Our and their officers, directors, managers, members, agents, and employees, are not liablefor any direct, indirect, punit ive, incidental, special, or consequential damages or loss (including, without limitation, incidental and consequential damages, lost profits, or damages resulting from lost data or business interruption) arising out of, or in way connected with, the use of the type of information discussed in this section.Tracking PixelsFacebook and Google tracking pixels are used on the Platform. This means that third parties may use cooki es, web beacons, and similar technologies to collect or receive information from the platform and elsewhere on the internet and use that information to provide measurement services and targeted adverts. If y ou wish to opt out of the use of these tracking pixels please adjust your browser settings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 55, vars: 0, consts: [[1, "container-fluid", 2, "margin-top", "8rem", "bottom", "0"], [1, "row", "bg-dark", "p-5"], [1, "col-3", "d-flex", "justify-content-center"], [1, "nav"], [1, "nav-item"], ["routerLink", "/"], ["src", "../../assets/img/app_logo_footer.png", 2, "width", "110px"], [1, "col-6", "d-flex", "justify-content-center"], ["routerLink", "terms_conditions", 1, "nav-link", "text-secondary"], ["routerLink", "/privacy_policy", "href", "#", 1, "nav-link", "text-secondary"], ["routerLink", "/faq", "href", "#", 1, "nav-link", "text-secondary"], ["href", "#", 1, "nav-link", "text-secondary"], ["href", "#", 1, "nav-link"], ["src", "../../assets/img/social-twitter-circular-button@2x.png", 1, "footer_logo"], ["src", "../../assets/img/social-facebook-circular-button@2x.png", 1, "footer_logo"], ["src", "../../assets/img/social-YOUTUBE@2x.png", 1, "footer_logo"], ["src", "../../assets/img/inst_logo.png", 1, "footer_logo"], ["src", "../../assets/img/pinterest@2x.png", 1, "footer_logo"], [1, "row", "p-5"], [1, "nav", "mt-1"], [1, "nav-link", "text-secondary"], [1, "text-decoration-underline"], ["src", "../../assets/img/google_footer.jpg", 2, "width", "130px"], ["src", "../../assets/img/apple_footer.jpg", 2, "width", "130px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Term and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2021 LUCK BUY LLC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer_logo[_ngcontent-%COMP%]{\n    width: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlcl9sb2dve1xuICAgIHdpZHRoOiAxNHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "gN+M":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FAQComponent {
    constructor() { }
    ngOnInit() {
    }
}
FAQComponent.ɵfac = function FAQComponent_Factory(t) { return new (t || FAQComponent)(); };
FAQComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQComponent, selectors: [["app-faq"]], decls: 163, vars: 0, consts: [[1, "container", 2, "margin-top", "5em"], [1, "row"], [1, "col"], [1, "display-6", "mt-5", "text-primary"], [1, "display-6", "mt-5"], [1, "fs-5"], [1, "display-6"], [1, "disply-6"]], template: function FAQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Luck Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What is Luck Buy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Luck Buy is a platform that gives you a chance to participate in raffle(s) that costs AED 1 only. You get this chance complementary to your purchase of cloud storage. There are numerous prizes ranging from electronics to super luxury cars that could be won. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Is Luck Buy available on IOS and Android?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Yes, the Luck Buy application is available on the App store and Play Store both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Which countries does Luck Buy operate in?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Currently, Luck Buy is only operational in the UAE. We will be expanding to other countries in near future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Why should I register with Luck Buy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Only the registered Luck Buy users will be able to participate in prize draws. However, the prizes could be explored by guest users as well. But, in order to top up your Luck Buy wallet and participate in a draw, registration with a valid mobile number is mandatory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "How do I create an account or Sign Up?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " It is very easy to sign up on Luck Buy application. All you need is a valid mobile number. Just open the application, click on Sign Up and register with your mobile number. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Can I edit my Luck Buy account details?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Yes, in case you wish to change or update your account details, you can do that by visiting the Profile section and making the changes there directly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Can I use someone else\u2019s credit card to pay at Luck Buy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Yes, you can use any card to pay at Luck Buy and the details of that card could also be saved for future reference. However, you should have the card holder\u2019s permission to use it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "How do I Log Out of my Luck Buy account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Visit the profile section and scroll down. You\u2019ll see the tab that says Log Out. Clicking on that tab will log you out of your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "What if I forget my account\u2019s password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " There\u2019s nothing to worry if you forget your password. On the Log In/Sign Up page itself, you\u2019ll see an option that says \u2018Forgot Password\u2019. Clicking on this option will help you reset your password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Where can I change my account\u2019s password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " In the app\u2019s Profile section, you\u2019ll find the option called \u2018Change Password\u2019. Clicking on this option will guide to further steps in order to successfully change your password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Which credit cards does Luck Buy accept?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Luck Buy accepts all the credit cards licensed by the UAE such as Visa, Master Card etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Making a Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "How do I participate in a draw?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In just 3 simple steps, you can participate in a draw of your choice: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Download the Luck Buy application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sign up by creating your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select a draw and pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "And that\u2019s it. You\u2019ll be notified, if you win.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "How much do I have to pay for participating in a draw?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Most of the draws are priced at AED 1 flat! So, all you need to pay is AED 1 for each ticket and this is inclusive of VAT. The price would increase based on the number of tickets you wish to purchase and the number of draws you wish to participate in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Are there any hidden charges that I need to be aware of?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " No, there are no hidden charges when you make a purchase from Luck Buy. In case you see any extra charges post billing, please contact your bank. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Do I have to pay VAT additionally on my purchases?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " No, all the prices on Luck Buy are inclusive of VAT. Therefore, you will not be charged with VAT separately. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Can I get a refund for my order on Luck Buy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " As clearly mentioned in our Terms and Conditions, there is no provision for refund. So, all the purchases are final and no refund shall be processed under any circumstances. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "How can I win in Luck Buy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Winner of a draw in Luck Buy is randomly decided by the system that works on a complex algorithm. All the draws are regulated and supervised by Dubai Economy, a government authority. So, all the participants stand a fair chance of winning. However, you can increase your chances of winning and, that has been discussed in the next question. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "How can I increase my chances of winning?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Your chances of winning are directly proportional to the number of tickets you purchase. So, the more number of tickets you have, more will be your chances of winning the draw. You can either buy more number of tickets for a single draw, or you could participate in multiple draws, or both in order to increase your chances of winning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Is there a limit to participating in the draws?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " There is no limit to participation as such. Just that, there are a limited number of tickets for each draw. You can buy as many tickets as you want and also, you can participate in as many number of draws as you wish to. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cloud Storage Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "How can I avail the cloud storage service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "__________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Free Participation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Can I get a free chance to participate in a draw?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes, you can participate for free, but only if you are a first time user. The free chance is valid only once per user and for a single draw.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "How will I come to know if I win?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " How will I come to know if I win?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "You will be notified on the application itself if you win. You will receive a message in your app\u2019s \u2018Notifications\u2019 section. Also, you will be notified by SMS on your registered mobile number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "How can I collect my prize?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "If you win, you will be asked to specify your address in the application. Based on the location you select, your address would be confirmed, and your prize will be delivered accordingly. There are certain terms and conditions regarding the claiming of prize that need to be fulfilled by you. Please read these Terms and Conditions carefully.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Can someone else collect the prize on my behalf?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " No, you yourself have to do the needful. Also, the prize needs to be claimed within 60 calendar days failing which the prize would be handed over to a government authority (DED) and they would then donate it for charity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Luck Buy Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "What are Luck Buy Points? Do these points have any benefits?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "___________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "How can I earn more Luck Buy Points?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "HWhere can I check my Luck Buy Points?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "VIP User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "How can I become a VIP User?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "What are the benefits of being a VIP User?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Referral Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "How can I refer a friend using Luck Buy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Luck Buy app gives you the chance of referring a friend and getting rewarded. You can do it by clicking on the \u2018Referring\u2019 tab located in the Profile section. By clicking on this tab, you will be able to share your QR code with your friend. To check the details of how the referral works, you may also refer to the Rules (hyperlinked to the Rules section).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "How can I scan my friend\u2019s QR code?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "________________");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Inquiry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "How can I raise my query with customer support?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Just in case you do not find an answer to your query in these FAQs, go to the Profile section of the app and, you will be able to contact us through chat. There you will find options to call us and mail us as well. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LmNzcyJ9 */", ".fs-5[_ngcontent-%COMP%]{\n    color: blue;\n  }"] });


/***/ }),

/***/ "hCiE":
/*!*****************************************************!*\
  !*** ./src/app/home/sold-out/sold-out.component.ts ***!
  \*****************************************************/
/*! exports provided: SoldOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoldOutComponent", function() { return SoldOutComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _helper_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/header */ "QE4s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");









function SoldOutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sold Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ROUND ", preview_r3.drawRoundNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", preview_r3.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" | ", preview_r3.productDTO.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", preview_r3.productDTO.productDescription, ". ");
} }
const _c0 = function (a0) { return { "width": a0 }; };
function SoldOutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Sold Out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Get a chance to win");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "AED 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SoldOutComponent_div_5_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.addtoCart(ctx_r4._nextRound); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ROUND ", ctx_r1._nextRound.drawRoundNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1._nextRound.currentDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1._nextRound.totalDrawEntrants, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r1._nextRound.percentage + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1._nextRound.percentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1._nextRound.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1._nextRound.productDTO.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1._nextRound.productDTO.productDescription, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faShoppingCart);
} }
function SoldOutComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SoldOutComponent_div_15_div_2_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const draw_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.productPreview(draw_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "SOLD OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SoldOutComponent_div_15_div_2_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const draw_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.productPreview(draw_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sold Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draw_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](draw_r7.closeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", draw_r7.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](draw_r7.productDTO.productName);
} }
function SoldOutComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "carousel", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SoldOutComponent_div_15_div_2_Template, 13, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 450)("cellWidth", 300)("autoplay", true)("margin", 15)("minSwipeDistance", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.souldOut);
} }
class SoldOutComponent {
    constructor(dataservice, http, ApiService) {
        this.dataservice = dataservice;
        this.http = http;
        this.ApiService = ApiService;
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
        this.filter = "SOLD_OUT";
    }
    ngOnInit() {
        this.ApiService.getDraw(this.filter).subscribe((drawData) => {
            this.souldOut = drawData.body;
        });
        this.dataservice.count.subscribe(c => {
            this.count = c;
        });
    }
    nextRound(_id) {
        this.http
            .put(`https://luck-buy.herokuapp.com/api/draw/nextRound/${_id}`, _helper_header__WEBPACK_IMPORTED_MODULE_1__["headers"])
            .subscribe((res) => {
            console.log(res);
            this._nextRound = res.body;
        }, (error) => {
            console.log(error);
        });
    }
    productPreview(_id) {
        this.previews = this.souldOut.filter((draw) => draw.id == _id);
        //console.log(this.preview)
    }
    addtoCart(product) {
        this.dataservice.addtoCart(product);
    }
}
SoldOutComponent.ɵfac = function SoldOutComponent_Factory(t) { return new (t || SoldOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
SoldOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SoldOutComponent, selectors: [["app-sold-out"]], decls: 16, vars: 3, consts: [["id", "staticBackdrop3", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngFor", "ngForOf"], ["id", "staticBackdrop4", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], ["class", "modal-content", 4, "ngIf"], [1, "container-fluid", "p-3", "mt-4", "mb-5", 2, "background-color", "#cd6155", "color", "white"], [1, "container", "p-3"], [1, "row"], [1, "col-8"], ["id", "sold_out", 1, "display-6"], [4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "text-primary"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "card-body"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "text-secondary"], [1, "h4", 2, "color", "brown"], [1, "lead", "text-secondary"], [1, "text-success"], [1, "text-danger"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-warning", "w-10", 3, "ngStyle"], [1, "h6", "text-primary"], [1, "h4"], [1, "row", "mb-5"], [1, "col-12"], [1, "d-flex", "justify-content-evenly"], [1, "mt-2"], [1, "h4", "text-primary"], [1, ""], ["type", "button", 1, "btn", "btn-outline-primary", 2, "width", "150px", 3, "click"], [3, "icon"], [3, "height", "cellWidth", "autoplay", "margin", "minSwipeDistance"], ["class", "carousel-cell m-2", 4, "ngFor", "ngForOf"], [1, "carousel-cell", "m-2"], [1, "card", "p-2", 2, "color", "brown", "text-align", "center"], [1, "fs-4"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop3", 1, "stamp", "is-nope", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop3", 1, "card-img-top", 2, "height", "200px", 3, "src", "click"], [1, "h5"]], template: function SoldOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SoldOutComponent_div_2_Template, 15, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SoldOutComponent_div_5_Template, 34, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sold Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "All our sold out campaigns are listed here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SoldOutComponent_div_15_Template, 3, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.previews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._nextRound);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.souldOut !== undefined && ctx.souldOut.length >= 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"]], styles: [".stamp[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 120px;\n  margin-left: 15%;\n  z-index: 99999;\n  position: absolute;\n  transform: rotate(12deg);\n  color: #555;\n  font-size: 3rem;\n  font-weight: 700;\n  border: 0.25rem solid #555;\n  display: inline-block;\n  padding: 0.25rem 1rem;\n  text-transform: uppercase;\n  border-radius: 1rem;\n  font-family: \"Courier\";\n  -webkit-mask-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png\");\n  -webkit-mask-size: 944px 604px;\n  mix-blend-mode: multiply;\n}\n\n.is-nope[_ngcontent-%COMP%] {\n  color: #d23;\n  border: 0.5rem double #d23;\n  transform: rotate(-30deg);\n  -webkit-mask-position: 2rem 3rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGQtb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1RkFBdUY7RUFDdkYsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCIiwiZmlsZSI6InNvbGQtb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhbXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkICM1NTU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyXCI7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vODM5OS9ncnVuZ2UucG5nXCIpO1xuICAtd2Via2l0LW1hc2stc2l6ZTogOTQ0cHggNjA0cHg7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuLmlzLW5vcGUge1xuICBjb2xvcjogI2QyMztcbiAgYm9yZGVyOiAwLjVyZW0gZG91YmxlICNkMjM7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMnJlbSAzcmVtO1xuICBmb250LXNpemU6IDJyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "iwus":
/*!************************************!*\
  !*** ./src/app/helper/base_url.ts ***!
  \************************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
const baseUrl = "https://luck-buy.herokuapp.com/api/";


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-auth/user-auth.component */ "KDPQ");








function NavComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faSignInAlt);
} }
function NavComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.userName, " ");
} }
class NavComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUser"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"];
        this.faGlobe = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGlobe"];
        this.cartItem = [];
    }
    ngOnInit() {
        this.dataservice.cart.subscribe((cart) => {
            this.cartItem = cart;
        });
        this.dataservice.count.subscribe((count) => {
            this.count = count;
        });
        this.cartItem = JSON.parse(localStorage.getItem('items') || '[]');
        this.count = JSON.parse(localStorage.getItem('count') || '[]');
        this.userName = sessionStorage.getItem('userName');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 29, vars: 4, consts: [[2, "overflow", "hidden", "background-color", "#333", "position", "fixed", "top", "0", "width", "100%", "z-index", "99999", "background-color", "white"], ["id", "nav", 1, ""], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../assets/img/site-logo.png", "alt", "", "width", "130", "height", "40"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link", "text-dark"], ["routerLink", "/shop_all", 1, "nav-link", "text-dark"], ["routerLink", "/how_works", 1, "nav-link", "text-dark"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "mb-2"], ["routerLink", "/cart_content", "href", "#", 1, "nav-link", "mt-2", "text-dark"], [3, "icon"], [1, "badge", "rounded-pill", "bg-warning", "text-dark"], ["class", "nav-item mb-2", 4, "ngIf"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#sign_in", 1, "nav-link", "mt-2", "text-dark"], ["routerLink", "/user_profile", "href", "#", 1, "nav-link", "mt-2", "text-dark"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Shop All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "How it Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavComponent_li_20_Template, 4, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NavComponent_li_27_Template, 4, 2, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-user-auth");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShoppingCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userName);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_7__["UserAuthComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "jb40":
/*!********************************************************!*\
  !*** ./src/app/draw-details/draw-details.component.ts ***!
  \********************************************************/
/*! exports provided: DrawDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawDetailsComponent", function() { return DrawDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DrawDetailsComponent_article_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", x_r1.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.productDTO.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1.productDTO.productDescription, " ");
} }
class DrawDetailsComponent {
    constructor(deviceService, title, meta, metaService, _Activatedroute, ApiService) {
        this.deviceService = deviceService;
        this.title = title;
        this.meta = meta;
        this.metaService = metaService;
        this._Activatedroute = _Activatedroute;
        this.ApiService = ApiService;
        this.filter = 'BEST_SELLER';
        this.epicFunction();
    }
    ngOnInit() {
        this.draw_id = this._Activatedroute.snapshot.paramMap.get('draw_id');
        this.ApiService.getDraw(this.filter).subscribe((drawData) => {
            this.draws = drawData.body;
            //  console.log(this.draws)
            this.previews = this.draws.filter((draw) => draw.id == 5);
            // console.log(this.previews[0].productDTO.productName)
            // this.title.setTitle(this.previews[0].productDTO.productName);
            // this.meta.updateTag({ property  : 'og:image', content: this.previews[0].productDTO.thumbnailUrl });
            // this.meta.updateTag({ property: 'og:title', content: this.previews[0].productDTO.productName });
            // this.meta.updateTag({ property: 'og:description', content: this.previews[0].productDTO.productDescription});
            this.meta.addTags([
                {
                    property: 'og:image',
                    itemprop: 'image',
                    content: 'https://gallant-goldwasser-67c193.netlify.app/assets/img/lap.jpg',
                },
                {
                    property: 'og:title',
                    content: this.previews[0].productDTO.productName,
                },
                {
                    property: 'og:description',
                    content: this.previews[0].productDTO.productDescription,
                },
                {
                    property: 'og:url',
                    content: 'https://naughty-morse-  11221a.netlify.app',
                },
            ]);
        });
    }
    epicFunction() {
        console.log('hello `Home` component');
        this.deviceInfo = this.deviceService.getDeviceInfo();
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        const isDesktopDevice = this.deviceService.isDesktop();
        console.log(this.deviceInfo);
        console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
        console.log(isTablet); // returns if the device us a tablet (iPad etc)
        console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    }
}
DrawDetailsComponent.ɵfac = function DrawDetailsComponent_Factory(t) { return new (t || DrawDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
DrawDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawDetailsComponent, selectors: [["app-draw-details"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col"], [4, "ngFor", "ngForOf"], [3, "src"]], template: function DrawDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DrawDetailsComponent_article_3_Template, 6, 3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.previews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmF3LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kmoc":
/*!**************************************!*\
  !*** ./src/app/model/UserProfile.ts ***!
  \**************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
class UserProfile {
    constructor(username, address, email, mobile, otp) {
        this.username = username;
        this.address = address;
        this.email = email;
        this.mobile = mobile;
        this.otp = otp;
    }
}


/***/ }),

/***/ "lGFB":
/*!**********************************************************!*\
  !*** ./src/app/user-auth/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _helper_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/header */ "QE4s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.signUpSuccessMessage, " ");
} }
function RegisterComponent_form_17_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Send verification code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_17_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.registerPhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_form_17_button_7_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.phoneForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.phoneMessegeError, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1._enterYourPhoneNumber);
} }
function RegisterComponent_form_18_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verifiy code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_18_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.verifiyOTP(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_form_18_button_7_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.otpMessegeError, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._enterOTP);
} }
function RegisterComponent_form_19_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_19_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enter Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Confirm Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_form_19_button_11_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.signUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.passwordMessegeError, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3._enterPassword);
} }
class RegisterComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this._enterPassword = false;
        this._enterYourPhoneNumber = true;
        this._enterOTP = false;
        this.success = false;
        this.phoneForm = this.formBuilder.group({
            mobile: '',
            deviceId: 'aesae',
            os: window.navigator.platform,
            deviceName: 'aesae',
            role: ['ROLE_USER'],
        });
        this.otpForm = this.formBuilder.group({
            mobile: '',
            otp: '',
        });
        this.signUpForm = this.formBuilder.group({
            mobile: '',
            password: '',
            confirmPassword: '',
            otp: ''
        });
    }
    ngOnInit() { }
    registerPhone() {
        const raw = JSON.stringify({
            mobile: this.phoneForm.value.mobile,
            deviceId: this.phoneForm.value.deviceId,
            os: this.phoneForm.value.os,
            deviceName: this.phoneForm.value.deviceName,
            role: ['ROLE_USER'],
        });
        this.http
            .post('https://luck-buy.herokuapp.com/api/auth/signup', raw, _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            console.log(res);
            this._enterPassword = false;
            this._enterYourPhoneNumber = false;
            this._enterOTP = true;
            ;
        }, (error) => {
            console.log(error);
            this.phoneMessegeError = error.error.message;
        });
    }
    verifiyOTP() {
        const raw = JSON.stringify({
            mobile: this.phoneForm.value.mobile,
            otp: this.otpForm.value.otp,
        });
        this.http
            .post('https://luck-buy.herokuapp.com/api/auth/validate_signup_otp', raw, _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            console.log(res);
            this._enterPassword = true;
            this._enterYourPhoneNumber = false;
            this._enterOTP = false;
        }, (error) => {
            console.log(error);
            this.otpMessegeError = error.error.message;
        });
    }
    signUp() {
        const raw = JSON.stringify({
            mobile: this.phoneForm.value.mobile,
            password: this.signUpForm.value.password,
            confirmPassword: this.signUpForm.value.confirmPassword,
            otp: this.otpForm.value.otp,
        });
        this.http
            .post('https://luck-buy.herokuapp.com/api/auth/validate_signup_password', raw, _helper_header__WEBPACK_IMPORTED_MODULE_0__["headers"])
            .subscribe((res) => {
            console.log(res);
            sessionStorage.setItem('token', res.body.token);
            sessionStorage.setItem('userName', res.body.username);
            this.signUpSuccessMessage = res.message;
            this.success = true;
        }, (error) => {
            console.log(error);
            this.passwordMessegeError = error.error.message;
        });
    }
    onCloselogInModal() {
        //window.location.href = '';
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 4, consts: [["id", "sign_up", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "99999"], [1, "modal-dialog", "modal-lg"], [1, "modal-content", "rounded-0", "border-0"], [1, "row"], [1, "col-md-6", 2, "color", "#2066b0"], [1, "m-3"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, ""], ["src", "../../../assets/img/undraw_Create_re_57a3.svg", 1, "mb-4", 2, "width", "97%", "margin-top", "7rem"], ["class", "dummy-positioning d-flex mb-5", 4, "ngIf"], [1, "col-md-6", "p-5", 2, "background-color", "#2066b0", "color", "white", "text-align", "center"], [1, "display-6"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["href", "#", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#sign_in"], ["href", "#", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#forget_password"], [1, "dummy-positioning", "d-flex", "mb-5"], [1, "success-icon"], [1, "success-icon__tip"], [1, "success-icon__long"], [3, "formGroup", "ngSubmit"], [1, "form__group", "field"], ["formControlName", "mobile", "type", "input", "placeholder", "Enter phone number", 1, "form__field"], ["for", "name", 1, "form__label"], ["type", "submit", "class", "btn btn-light btn-lg btn-block", "style", "color: #2066b0; width: 100%", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-light", "btn-lg", "btn-block", 2, "color", "#2066b0", "width", "100%"], ["formControlName", "otp", "type", "input", "placeholder", "Enter Code", 1, "form__field"], ["formControlName", "password", "type", "input", "placeholder", "Password", 1, "form__field"], ["formControlName", "confirmPassword", "type", "input", "placeholder", "Confirm Password", 1, "form__field"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Luck Buy account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_form_17_Template, 8, 3, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_form_18_Template, 8, 3, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_form_19_Template, 12, 3, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Forget password ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._enterYourPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._enterOTP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._enterPassword);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".form__group[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 20px 0 0;\n    margin-top: 10px;\n   \n  }\n  input[_ngcontent-%COMP%]{\n      color: white;\n  }\n  .form__field[_ngcontent-%COMP%] {\n    font-family: inherit;\n    width: 100%;\n    border: 0;\n    border-bottom: 2px solid white;\n    outline: 0;\n    font-size: 1.3rem;\n    color:white;\n    padding: 7px 0;\n    background: transparent;\n    transition: border-color 0.2s;\n  }\n  .form__field[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n  }\n  .form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    cursor: text;\n    top: 20px;\n  }\n  .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: white;\n  }\n  .form__field[_ngcontent-%COMP%]:focus {\n    padding-bottom: 6px;\n    font-weight: 700;\n    border-width: 3px;\n    border-image: linear-gradient(to right, #ffffff, #ffffff);\n    border-image-slice: 1;\n  }\n  .form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    display: block;\n    transition: 0.2s;\n    font-size: 1rem;\n    color: white;\n    font-weight: 700;\n  }\n  \n  .form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n  }\n  a[_ngcontent-%COMP%]{\n      color: white;\n  }\n  \n  .dummy-positioning[_ngcontent-%COMP%] {\n\n  margin: 15px;\n align-items: center;\n justify-content: center;\n}\n  .success-icon[_ngcontent-%COMP%] {\n display: inline-block;\n width: 8em;\n height: 8em;\n font-size: 15px;\n border-radius: 50%;\n border: 4px solid #3CB371;\n background-color: #fff;\n position: relative;\n overflow: hidden;\n transform-origin: center;\n animation: showSuccess 180ms ease-in-out;\n transform: scale(1);\n}\n  .success-icon__tip[_ngcontent-%COMP%], .success-icon__long[_ngcontent-%COMP%] {\n display: block;\n position: absolute;\n height: 4px;\n background-color: #3CB371;\n border-radius: 10px;\n}\n  .success-icon__tip[_ngcontent-%COMP%] {\n width: 2.4em;\n top: 4.3em;\n left: 1.4em;\n transform: rotate(45deg);\n animation: tipInPlace 300ms ease-in-out;\n animation-fill-mode: forwards;\n animation-delay: 180ms;\n visibility: hidden;\n}\n  .success-icon__long[_ngcontent-%COMP%] {\n width: 4em;\n transform: rotate(-45deg);\n top: 3.7em;\n left: 2.75em;\n animation: longInPlace 140ms ease-in-out;\n animation-fill-mode: forwards;\n visibility: hidden;\n animation-delay: 440ms;\n}\n  @keyframes showSuccess {\n from {\n   transform: scale(0);\n }\n to {\n   transform: scale(1);\n }\n}\n  @keyframes tipInPlace {\n from {\n   width: 0em;\n   top: 0em;\n   left: -1.6em;\n }\n to {\n   width: 2.4em;\n   top: 4.3em;\n   left: 1.4em;\n   visibility: visible;\n }\n}\n  @keyframes longInPlace {\n from {\n   width: 0em;\n   top: 5.1em;\n   left: 3.2em;\n }\n to {\n   width: 4em;\n   top: 3.7em;\n   left: 2.75em;\n   visibility: visible;\n }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0VBRWxCO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0VBQ1g7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5REFBeUQ7SUFDekQscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFFQSxnQkFBZ0I7RUFDaEI7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLFlBQVk7RUFDaEI7RUFXQSxZQUFZO0VBQ2Q7O0VBRUUsWUFBWTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7RUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsV0FBVztDQUNYLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUVoQix3Q0FBd0M7Q0FDaEQsbUJBQW1CO0FBQ3BCO0VBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCO0VBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLFdBQVc7Q0FDWCx3QkFBd0I7Q0FFaEIsdUNBQXVDO0NBRXZDLDZCQUE2QjtDQUU3QixzQkFBc0I7Q0FDOUIsa0JBQWtCO0FBQ25CO0VBQ0E7Q0FDQyxVQUFVO0NBQ1YseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixZQUFZO0NBRUosd0NBQXdDO0NBRXhDLDZCQUE2QjtDQUNyQyxrQkFBa0I7Q0FFVixzQkFBc0I7QUFDL0I7RUFXQTtDQUNDO0dBQ0UsbUJBQW1CO0NBQ3JCO0NBQ0E7R0FDRSxtQkFBbUI7Q0FDckI7QUFDRDtFQWNBO0NBQ0M7R0FDRSxVQUFVO0dBQ1YsUUFBUTtHQUNSLFlBQVk7Q0FDZDtDQUNBO0dBQ0UsWUFBWTtHQUNaLFVBQVU7R0FDVixXQUFXO0dBQ1gsbUJBQW1CO0NBQ3JCO0FBQ0Q7RUFjQTtDQUNDO0dBQ0UsVUFBVTtHQUNWLFVBQVU7R0FDVixXQUFXO0NBQ2I7Q0FDQTtHQUNFLFVBQVU7R0FDVixVQUFVO0dBQ1YsWUFBWTtHQUNaLG1CQUFtQjtDQUNyQjtBQUNEIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtX19ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBcbiAgfVxuICBpbnB1dHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZm9ybV9fZmllbGQge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgfVxuICAuZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmZvcm1fX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuZm9ybV9fbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgI2ZmZmZmZik7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICB9XG4gIC5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLyogcmVzZXQgaW5wdXQgKi9cbiAgLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBhe1xuICAgICAgY29sb3I6IHdoaXRlO1xuICB9XG5cblxuXG5cblxuXG5cblxuICBcblxuICAvKiBzdWNjZXNzICovXG4uZHVtbXktcG9zaXRpb25pbmcge1xuXG4gIG1hcmdpbjogMTVweDtcbiBhbGlnbi1pdGVtczogY2VudGVyO1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VjY2Vzcy1pY29uIHtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gd2lkdGg6IDhlbTtcbiBoZWlnaHQ6IDhlbTtcbiBmb250LXNpemU6IDE1cHg7XG4gYm9yZGVyLXJhZGl1czogNTAlO1xuIGJvcmRlcjogNHB4IHNvbGlkICMzQ0IzNzE7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gb3ZlcmZsb3c6IGhpZGRlbjtcbiB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gLXdlYmtpdC1hbmltYXRpb246IHNob3dTdWNjZXNzIDE4MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgYW5pbWF0aW9uOiBzaG93U3VjY2VzcyAxODBtcyBlYXNlLWluLW91dDtcbiB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3VjY2Vzcy1pY29uX190aXAsIC5zdWNjZXNzLWljb25fX2xvbmcge1xuIGRpc3BsYXk6IGJsb2NrO1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiBoZWlnaHQ6IDRweDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NCMzcxO1xuIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3VjY2Vzcy1pY29uX190aXAge1xuIHdpZHRoOiAyLjRlbTtcbiB0b3A6IDQuM2VtO1xuIGxlZnQ6IDEuNGVtO1xuIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAtd2Via2l0LWFuaW1hdGlvbjogdGlwSW5QbGFjZSAzMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgIGFuaW1hdGlvbjogdGlwSW5QbGFjZSAzMDBtcyBlYXNlLWluLW91dDtcbiAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE4MG1zO1xuICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxODBtcztcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3VjY2Vzcy1pY29uX19sb25nIHtcbiB3aWR0aDogNGVtO1xuIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gdG9wOiAzLjdlbTtcbiBsZWZ0OiAyLjc1ZW07XG4gLXdlYmtpdC1hbmltYXRpb246IGxvbmdJblBsYWNlIDE0MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgYW5pbWF0aW9uOiBsb25nSW5QbGFjZSAxNDBtcyBlYXNlLWluLW91dDtcbiAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NDBtcztcbiAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNDQwbXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzaG93U3VjY2VzcyB7XG4gZnJvbSB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuIH1cbiB0byB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuIH1cbn1cblxuQGtleWZyYW1lcyBzaG93U3VjY2VzcyB7XG4gZnJvbSB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuIH1cbiB0byB7XG4gICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyB0aXBJblBsYWNlIHtcbiBmcm9tIHtcbiAgIHdpZHRoOiAwZW07XG4gICB0b3A6IDBlbTtcbiAgIGxlZnQ6IC0xLjZlbTtcbiB9XG4gdG8ge1xuICAgd2lkdGg6IDIuNGVtO1xuICAgdG9wOiA0LjNlbTtcbiAgIGxlZnQ6IDEuNGVtO1xuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiB9XG59XG5Aa2V5ZnJhbWVzIHRpcEluUGxhY2Uge1xuIGZyb20ge1xuICAgd2lkdGg6IDBlbTtcbiAgIHRvcDogMGVtO1xuICAgbGVmdDogLTEuNmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogMi40ZW07XG4gICB0b3A6IDQuM2VtO1xuICAgbGVmdDogMS40ZW07XG4gICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb25nSW5QbGFjZSB7XG4gZnJvbSB7XG4gICB3aWR0aDogMGVtO1xuICAgdG9wOiA1LjFlbTtcbiAgIGxlZnQ6IDMuMmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogNGVtO1xuICAgdG9wOiAzLjdlbTtcbiAgIGxlZnQ6IDIuNzVlbTtcbiAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gfVxufVxuQGtleWZyYW1lcyBsb25nSW5QbGFjZSB7XG4gZnJvbSB7XG4gICB3aWR0aDogMGVtO1xuICAgdG9wOiA1LjFlbTtcbiAgIGxlZnQ6IDMuMmVtO1xuIH1cbiB0byB7XG4gICB3aWR0aDogNGVtO1xuICAgdG9wOiAzLjdlbTtcbiAgIGxlZnQ6IDIuNzVlbTtcbiAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gfVxufSJdfQ== */"] });


/***/ }),

/***/ "oI4J":
/*!************************************************************!*\
  !*** ./src/app/top-up-payment/top-up-payment.component.ts ***!
  \************************************************************/
/*! exports provided: TopUpPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpPaymentComponent", function() { return TopUpPaymentComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/api.service */ "H+bZ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function TopUpPaymentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please accept the term and conditions to continue !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TopUpPaymentComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" AED ", ctx_r1._selectedAmount, "");
} }
function TopUpPaymentComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Must be number and not less than AED 501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TopUpPaymentComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" AED ", ctx_r3._selectedAmount, "");
} }
class TopUpPaymentComponent {
    constructor(http, router, apiService, dataservice, formBuilder) {
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.dataservice = dataservice;
        this.formBuilder = formBuilder;
        this.myVar2 = false;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignInAlt"];
        this.termErrorMessage = false;
        this.lessNumber = false;
        this.notNumber = false;
        this.approvedNumber = false;
        this.touchedinput = false;
        this.payNowForm = this.formBuilder.group({
            cardNumber: '',
            cardName: '',
            passworcardNamed: '',
            expiry: '',
            billingAddress: '',
            city: '',
            defaultCard: '',
            amountToRecharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(501)]),
            saveCard: 'false',
        });
    }
    ngOnInit() {
        this.token = sessionStorage.getItem('token');
        this.apiService.getUserBalance(this.token).subscribe((response) => {
            this.balance = response.body.availableBalance;
        }, (error) => {
            console.log(error);
        });
        this.dataservice.user.subscribe((user) => {
            this.userName = user;
            console.log(this.userName);
        });
    }
    get amountToRecharge() {
        return this.payNowForm.get('amountToRecharge');
    }
    valuechange(newValue) {
        console.log(this._selectedAmount);
        console.log(this._typedAmount);
        this._selectedAmount = '';
        this._typedAmount = newValue;
        if (newValue >= 501) {
            this.approvedNumber = true;
        }
    }
    selectedAmount(amount) {
        console.log(amount);
        console.log(this._typedAmount);
        this._selectedAmount = amount;
    }
    onSubmit() {
        if (this.payNowForm.valid) {
            if (this.approvedNumber == true) {
                this.amountTosend = this._typedAmount;
                //    .setValue(this._typeedAmount)
            }
            else if (this._selectedAmount !== '') {
                this.amountTosend = this._selectedAmount;
            }
            if (this.myVar2 == true) {
                this.dataservice.token.subscribe((token) => {
                    this.token = token;
                });
                const pay = { amountToRecharge: this.amountTosend,
                    billingAddress: this.payNowForm.value.billingAddress,
                    cardName: this.payNowForm.value.cardName,
                    cardNumber: this.payNowForm.value.cardNumber,
                    city: this.payNowForm.value.city,
                    defaultCard: this.payNowForm.value.defaultCard,
                    expiry: this.payNowForm.value.expiry,
                    passworcardNamed: this.payNowForm.value.passworcardNamed,
                    saveCard: "false"
                };
                console.log(pay);
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Authorization', `Bearer ${this.token}`)
                    .set('content-type', 'application/json')
                    .set('Access-Control-Allow-Origin', '*');
                this.http
                    .post('https://luck-buy.herokuapp.com/api/payment', pay, { headers: headers })
                    .subscribe((res) => {
                    this.payNowForm.reset();
                    // console.log(res);
                    this.deducttion();
                }, (error) => {
                    this.errorMessage = error.error.message;
                });
            }
            else {
                this.termErrorMessage = true;
            }
        }
    }
    deducttion() {
        this.router.navigate(['/top_up_payment_messege/1']);
    }
}
TopUpPaymentComponent.ɵfac = function TopUpPaymentComponent_Factory(t) { return new (t || TopUpPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TopUpPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TopUpPaymentComponent, selectors: [["top-up-app-payment"]], decls: 80, vars: 8, consts: [[1, "container"], [1, "row", 2, "margin-top", "7em"], [1, "col"], [1, "display-6", "text-primary"], ["class", "alert alert-warning alert-dismissible fade show", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-6"], [1, "card"], [1, "card-header"], [1, "card-body"], ["class", "text-primary", 4, "ngIf"], ["role", "group", 1, "btn-group", "btn-group-default"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "form-label", "mt-4"], [1, "input-group", "mb-3", 2, "width", "200px"], ["id", "small-input", 1, "input-group-text"], ["type", "text", "formControlName", "amountToRecharge", 1, "form-control", 3, "ngModelChange"], ["style", "color: red;", 4, "ngIf"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckChecked", 1, "form-check-input", 3, "checked", "change"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["routerLink", "/terms_conditions"], [1, "text-secondary", "fs-6"], ["src", "../../assets//img/visa.svg", "width", "60"], [1, "row", "mt-1"], [1, "col-12"], ["for", "inputEmail4"], ["type", "text", "formControlName", "cardNumber", 1, "form-control"], ["type", "text", "formControlName", "cardName", 1, "form-control"], ["type", "text", "formControlName", "expiry", 1, "form-control"], ["type", "text", "formControlName", "billingAddress", 1, "form-control"], ["type", "text", "formControlName", "city", 1, "form-control"], [1, "text-danger"], [1, "fs-5"], [1, "text-secondary"], [1, "col", 2, "text-align", "center", "margin", "20px"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-lg"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "text-primary"], [2, "color", "red"]], template: function TopUpPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Card top up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TopUpPaymentComponent_div_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TopUpPaymentComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select top up ammount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TopUpPaymentComponent_span_15_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopUpPaymentComponent_Template_button_click_17_listener() { return ctx.selectedAmount(50); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "AED 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopUpPaymentComponent_Template_button_click_19_listener() { return ctx.selectedAmount(100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "AED 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopUpPaymentComponent_Template_button_click_21_listener() { return ctx.selectedAmount(200); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "AED 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopUpPaymentComponent_Template_button_click_23_listener() { return ctx.selectedAmount(500); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "AED 500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Or enter top up amount (501 minimum)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "AED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TopUpPaymentComponent_Template_input_ngModelChange_31_listener($event) { return ctx.valuechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, TopUpPaymentComponent_span_32_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TopUpPaymentComponent_Template_input_change_34_listener() { return ctx.myVar2 = !ctx.myVar2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "I agree with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "We accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Card Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Expiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Grand Total Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, TopUpPaymentComponent_span_74_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Inclusive of VAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Pay Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.termErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.payNowForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Your crrunt balance is AED ", ctx.balance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._selectedAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.amountToRecharge == null ? null : ctx.amountToRecharge.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.myVar2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._selectedAmount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".my_class[_ngcontent-%COMP%]{\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC11cC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoidG9wLXVwLXBheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teV9jbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */"] });


/***/ }),

/***/ "oz1u":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import {} from '../'
class CarouselComponent {
    constructor() {
        this.images = [944, 1011, 323, 984].map((n) => `https://picsum.photos/id/${n}/1500/600`);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 18, vars: 0, consts: [["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner", "mt-5"], [1, "carousel-item", "active", "mt-5"], ["src", "../../../assets/img/banner 1 (1).svg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/img/banner 2 (1).svg", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "pQTq":
/*!**********************************************************!*\
  !*** ./src/app/checkout-list/checkout-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutListComponent", function() { return CheckoutListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CheckoutListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cart is Empty ... !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Shop Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.productDTO.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.productDTO.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.qty * 1, " AED ");
} }
function CheckoutListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutListComponent_div_2_div_1_Template, 12, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "Div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutListComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.payNow(ctx_r4.cartItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Purchase amount ", ctx_r1.count, " AED");
} }
class CheckoutListComponent {
    constructor(apiService, dataservice, router) {
        this.apiService = apiService;
        this.dataservice = dataservice;
        this.router = router;
    }
    ngOnInit() {
        this.dataservice.cart.subscribe((cart) => {
            this.cartItem = cart;
        });
        this.dataservice.count.subscribe((count) => {
            this.count = count;
        });
    }
    payNow(cardItem) {
        console.log(sessionStorage.getItem('userVerified'));
        this.userVerified = sessionStorage.getItem('userVerified');
        this.token = sessionStorage.getItem('token');
        if (this.userVerified == null) {
            this.router.navigate(['/login_to_pay']);
        }
        else if (this.userVerified === 'false') {
            this.router.navigate(['/phone_verification_to_pay']);
        }
        else if (this.userVerified === 'true') {
            this.apiService.getUserBalance(this.token).subscribe((response) => {
                this.balance = response.body.availableBalance;
                if (this.balance >= this.count) {
                    this.router.navigate(['/top_up_payment_messege/3']);
                    alert('deduct');
                }
                else if (this.balance < this.count) {
                    this.router.navigate(['/top_up_payment_messege/3']);
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
}
CheckoutListComponent.ɵfac = function CheckoutListComponent_Factory(t) { return new (t || CheckoutListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckoutListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutListComponent, selectors: [["app-checkout-list"]], decls: 3, vars: 2, consts: [[1, "container", 2, "margin-top", "5em"], ["class", "row", "style", "margin-top: 150px; margin-bottom: 300px; text-align: center", 4, "ngIf"], ["class", "container mt-5", 4, "ngIf"], [1, "row", 2, "margin-top", "150px", "margin-bottom", "300px", "text-align", "center"], [1, "col-12"], [2, "margin", "auto", "text-align", "center", "margin-bottom", "5em"], [1, "display-6", "text-primary"], ["src", "../../assets/img/empty_cart.svg", 1, "mt-5"], ["routerLink", "", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg"], [1, "container", "mt-5"], ["class", "row mt-5", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], [1, "col-12", 2, "text-align", "center"], [1, "m-3", "fs-6"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-lg", 2, "width", "250px", 3, "click"], [1, "row", "mt-5"], [1, "card"], [1, "col-md-4"], [1, "cart_item_img", 3, "src"], [1, "col-md-4", 2, "margin-top", "5%"], [1, "card-text"], [1, "card-text", "text-primary"]], template: function CheckoutListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutListComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutListComponent_div_2_Template, 9, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".cart_item_img[_ngcontent-%COMP%]{\n    padding: 5%;\n    margin: 5%;\n    max-width: 150px;\n    max-height: 150px;\n\n}\ntd[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 10rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2QiLCJmaWxlIjoiY2hlY2tvdXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnRfaXRlbV9pbWd7XG4gICAgcGFkZGluZzogNSU7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuXG59XG50ZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwcmVtO1xuICB9Il19 */"] });


/***/ }),

/***/ "tWfm":
/*!***********************************************************!*\
  !*** ./src/app/home/check-login/check-login.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLoginComponent", function() { return CheckLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CheckLoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Log in to continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckLoginComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
    }
    ngOnInit() {
        this.dataservice.user.subscribe((user) => {
            this.userName = user;
            // console.log(this.userName)
        });
    }
}
CheckLoginComponent.ɵfac = function CheckLoginComponent_Factory(t) { return new (t || CheckLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
CheckLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckLoginComponent, selectors: [["app-check-login"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "row", "style", "margin-top: 7em; margin-bottom: 15em", 4, "ngIf"], [1, "row", 2, "margin-top", "7em", "margin-bottom", "15em"], [1, "col", 2, "text-align", "center", "margin-top", "3em"], ["src", "../../assets/img/undraw_Login_re_4vu2.svg"], ["data-bs-toggle", "modal", "data-bs-target", "#sign_in", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "btn-block", 2, "margin-top", "3em"]], template: function CheckLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckLoginComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName == undefined && ctx.userName == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _top_up_payment_top_up_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-up-payment/top-up-payment.component */ "oI4J");
/* harmony import */ var _cart_content_cart_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-content/cart-content.component */ "/sNo");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./term-condition/term-condition.component */ "NH8U");
/* harmony import */ var _home_check_phone_verify_check_phone_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/check-phone-verify/check-phone-verify.component */ "HbLN");
/* harmony import */ var _home_check_login_check_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/check-login/check-login.component */ "tWfm");
/* harmony import */ var _top_up_payment_messege_top_up_payment_messege_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-up-payment-messege/top-up-payment-messege.component */ "KbLF");
/* harmony import */ var _draw_details_draw_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-details/draw-details.component */ "jb40");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _how_works_how_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./how-works/how-works.component */ "V/CD");
/* harmony import */ var _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout-list/checkout-list.component */ "pQTq");
/* harmony import */ var _display_checkout_list_display_checkout_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./display-checkout-list/display-checkout-list.component */ "QgJj");
/* harmony import */ var _winners_winners_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./winners/winners.component */ "JeBd");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'cart_content', component: _cart_content_cart_content_component__WEBPACK_IMPORTED_MODULE_3__["CartContentComponent"] },
    { path: 'payment', component: _top_up_payment_top_up_payment_component__WEBPACK_IMPORTED_MODULE_2__["TopUpPaymentComponent"] },
    { path: 'privacy_policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FAQComponent"] },
    { path: 'how_works', component: _how_works_how_works_component__WEBPACK_IMPORTED_MODULE_11__["HowWorksComponent"] },
    { path: 'terms_conditions', component: _term_condition_term_condition_component__WEBPACK_IMPORTED_MODULE_5__["TermConditionComponent"] },
    { path: 'phone_verification_to_pay', component: _home_check_phone_verify_check_phone_verify_component__WEBPACK_IMPORTED_MODULE_6__["CheckPhoneVerifyComponent"] },
    { path: 'login_to_pay', component: _home_check_login_check_login_component__WEBPACK_IMPORTED_MODULE_7__["CheckLoginComponent"] },
    { path: 'top_up_payment_messege/:messege_id', component: _top_up_payment_messege_top_up_payment_messege_component__WEBPACK_IMPORTED_MODULE_8__["TopUpPaymentMessegeComponent"] },
    { path: 'draw_details/:draw_id', component: _draw_details_draw_details_component__WEBPACK_IMPORTED_MODULE_9__["DrawDetailsComponent"] },
    { path: 'checkout_list', component: _checkout_list_checkout_list_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutListComponent"] },
    { path: 'display_checkout_list', component: _display_checkout_list_display_checkout_list_component__WEBPACK_IMPORTED_MODULE_13__["DisplayCheckoutListComponent"] },
    { path: 'winners', component: _winners_winners_component__WEBPACK_IMPORTED_MODULE_14__["WinnersComponent"] },
    { path: 'user_profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"] },
];
// https://laughing-lovelace-454626.netlify.app/draw_details/5
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map