!function (e) {
  var t = {};

  function r(a) {
    if (t[a]) return t[a].exports;
    var i = t[a] = {i: a, l: !1, exports: {}};
    return e[a].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }

  r.m = e, r.c = t, r.d = function (e, t, a) {
    r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) r.d(a, i, function (t) {
      return e[t]
    }.bind(null, i));
    return a
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "", r(r.s = 360)
}({
  283: function (e, t) {
    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    M.get("cardController") || M.define("cardController", ["$", "U", "dlRPC", "kDeepL"], function (e, t, a, i) {
      var o, n, s = null, c = null, d = null;
      return {
        initializeCreditCard: function (e, t, r) {
          console.log("initialized credit card with key ", e), null == s && (s = Stripe(e)), o = r;
          var a = s.elements();
          (c = a.create("card", {
            style: {
              base: {
                color: "#32325d",
                lineHeight: "18px",
                fontFamily: '"Roboto", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {color: "#aab7c4"}
              }, invalid: {color: "#fa755a", iconColor: "#fa755a"}
            }
          })).mount(t), c.addEventListener("change", function (e) {
            e.error ? o && o(e.error.message) : o && o(!1)
          })
        }, initializeDirectDebit: function (e, t, r, a) {
          console.log("initialized debit with key ", e), null == s && (s = Stripe(e)), n = r;
          var i = a, o = s.elements();
          (d = o.create("iban", {
            style: {
              base: {
                color: "#32325d",
                lineHeight: "18px",
                fontFamily: '"Roboto", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {color: "#aab7c4"}
              }, invalid: {color: "#fa755a", iconColor: "#fa755a"}
            }, supportedCountries: ["SEPA"]
          })).mount(t), d.addEventListener("change", function (e) {
            e.error ? n && n(e.error.message) : n && n(""), e.bankName ? i && i(e.bankName) : i && i("")
          })
        }, handleCardSetup: function () {
          return new Promise(function (e, t) {
            var i, o = a.getBackend("/PHP/backend/stripe/sca.php").getFunction("CreateSetupIntent"),
              n = a.getBackend("/PHP/backend/stripe/sca.php").getFunction("handleSetupIntentResult");
            o().then(function (e) {
              return s.handleCardSetup(e.secret, c)
            }).then(function (e) {
              if (e.error) throw e.error;
              return i = e.setupIntent.payment_method, n({result: e})
            }).then(function (t) {
              return e(function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {}, i = Object.keys(a);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                  }))), i.forEach(function (t) {
                    r(e, t, a[t])
                  })
                }
                return e
              }({}, t, {payment_method: i}))
            }).catch(function (e) {
              return t(e)
            })
          })
        }, reAuthorizeCard: function (e, t) {
          return Stripe(e).handleCardPayment(t)
        }, requestTokenCreditCard: function (e) {
          return function (e, t, r) {
            var a = {
              currency: "eur",
              name: r ? r.givenName() + " " + r.lastName() : void 0,
              address_line1: r ? r.street() : void 0,
              address_line2: r ? r.streetExtension() : void 0,
              address_city: r ? r.city() : void 0,
              address_zip: r ? r.zip() : void 0,
              address_country: r ? r.countryName() : void 0
            };
            return t && t(!1), new Promise(function (r, i) {
              s.createToken(e, a).then(function (e) {
                e.error ? (t && t(e.error.message), i(e.error)) : (console.log("TOKEN", e.token), t && t(!1), r(e.token))
              }, function (e) {
                console.error("Error while requesting payment details", e), t && t(window.dl_texts["messages/error.paymentError"] || "An error occured processing your payment data by Stripe. Please try again later."), i(e)
              })
            })
          }(c, o, e)
        }, resetCreditCard: function () {
          c.clear()
        }, requestTokenDirectDebit: function (e) {
          return function (e, t, r) {
            return r && r(!1), new Promise(function (a, i) {
              s.createSource(e, {type: "sepa_debit", currency: "eur", owner: {name: t}}).then(function (e) {
                e.error ? (r && r(e.error.message), i(e.error)) : (console.log("createSource returned", e), r && r(!1), a(e.source))
              }, function (e) {
                console.error("Error while requesting payment details", e), r && r(window.dl_texts["messages/error.paymentError"] || "An error occured processing your payment data by Stripe. Please try again later."), i(e)
              })
            })
          }(d, e, n)
        }, resetDirectDebit: function () {
          d.clear()
        }
      }
    })
  }, 313: function (e, t) {
    M.define("addressValidationController", ["RPC", "dlTexts"], function (e, t) {
      var r = {
        AT: {regex: /^\d{4}$/, example: "0000"},
        BE: {regex: /^\d{4}$/, example: "0000"},
        BG: {regex: /^\d{4}$/, example: "0000"},
        CH: {regex: /^\d{4}$/, example: "0000"},
        CY: {regex: /^\d{4}$/, example: "0000"},
        CZ: {regex: /^\d{3} ?\d{2}$/, example: "000 00"},
        DK: {regex: /^\d{4}$/, example: "0000"},
        DE: {regex: /^\d{5}$/, example: "00000"},
        EE: {regex: /^\d{5}$/, example: "00000"},
        GR: {regex: /^\d{3} ?\d{2}$/, example: "000 00"},
        ES: {regex: /^\d{5}$/, example: "00000"},
        FR: {regex: /^\d{5}$/, example: "00000"},
        HR: {regex: /^HR-\d{5}$/, example: "HR-00000"},
        IT: {regex: /^\d{5}$/, example: "00000"},
        LI: {regex: /^\d{4}$/, example: "0000"},
        LV: {regex: /^LV-\d{4}$/, example: "LV-0000"},
        LT: {regex: /^LT-\d{5}$/, example: "LT-00000"},
        LU: {regex: /^L-\d{4}$/, example: "L-0000"},
        HU: {regex: /^\d{4}$/, example: "0000"},
        IE: {regex: /^([AC-FHKNPRTV-Y]\d{2}|D6W) [0-9AC-FHKNPRTV-Y]{4}$/, example: "A00 0000"},
        MT: {regex: /^[A-Z]{3} ?\d{4}$/, example: "AAA 0000"},
        NL: {regex: /^\d{4} ?[A-Z]{2}$/, example: "0000 AA"},
        PL: {regex: /^\d{2}-\d{3}$/, example: "00-000"},
        PT: {regex: /^\d{4}-\d{3}$/, example: "0000-000"},
        RO: {regex: /^\d{6}$/, example: "000000"},
        SI: {regex: /^SI-\d{4}$/, example: "SI-0000"},
        SK: {regex: /^\d{3} ?\d{2}$/, example: "000 00"},
        FI: {regex: /^(FI|AX)-\d{5}$/, example: "FI-00000"},
        SE: {regex: /^SE-\d{3} ?\d{2}$/, example: "SE-000 00"},
        GB: {
          regex: /^((GIR ?0AA)|((([A-PR-UWYZ][A-HK-Y]?[0-9][0-9]?)|(([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]))) ?[0-9][ABD-HJLNP-UW-Z]{2}))$/,
          example: "A00 0AA"
        }
      };
      return {
        IsCountyVisible: function (e) {
          return "GB" === e
        }, IsStateVisible: function (e) {
          return !1
        }, IsProvinceVisible: function (e) {
          return "ES" === e
        }, createFieldError: function (e) {
          var r = new Object(null);
          return e.forEach(function (e) {
            r[e[0]] = [t[e[1]] || e[1]]
          }), {type: "fieldErrors", errors: r}
        }, isCountryAllowed: function (e) {
          return void 0 !== r[e]
        }, validateZipCode: function (e, t) {
          var a = r[e];
          return void 0 !== a ? a.regex.test(t) ? null : a.example : (console.log("Missing validation regex"), null)
        }, getVatPrefixForCountry: function (e) {
          var t = (e || "").substr(0, 2).toUpperCase();
          return "GR" === t && (t = "EL"), t
        }, cleanupVatString: function (e) {
          return e.trim().replace(/[^A-Za-z0-9+*]/g, "")
        }, validateVATNumber: function (e, t) {
          return new Promise(function (t, r) {
            t(!!(e || "").match(/^$|[A-Z][A-Z].+/))
          })
        }, validateEmailForCheckout: function (e) {
          return -1 === e.indexOf("@google.") && -1 === e.indexOf("@amazon.") && -1 === e.indexOf("@facebook.") && -1 === e.indexOf("@microsoft.") && -1 === e.indexOf("@apple.")
        }, rpcError_to_checkoutError: function (t) {
          var r = {_rpcError: t};
          try {
            t.errorType === e.ErrorTypes.REMOTE_ERROR ? (console.log(t), 20 === t.code ? (r.type = "pageError", r.message = JSON.parse(t.data).join("<hr/>") || window.dl_texts["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.") : 21 === t.code ? (console.log("code is 21"), r.type = "fieldErrors", r.errors = JSON.parse(t.data)) : (console.log("code is else"), r.type = "pageError", r.message = window.dl_texts["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.")) : t.errorType === e.ErrorTypes.REQUEST_FAILED && (r.type = "pageError", r.message = window.dl_texts["messages/error.networkError"] || "Connection problems. Please try again later.")
          } catch (e) {
            console.error(e)
          }
          return r.type || (r.type = "pageError", r.message = window.dl_texts["messages/error.internal"] || "An internal error occurred. Please reload the page and try again later.", console.warn(r)), r
        }
      }
    })
  }, 314: function (e, t) {
    M.define("pro-pricingCalculator", ["U", "dlPageState"], function (e, t) {
      var r = "[pro-pricingCalculator]", a = t.devMode && !0;
      return {
        createProductInfo: function (t, i, o, n, s, c) {
          var d = e.createValues(t, !0);

          function u(e, t) {
            return e - 100 * e / (100 + t)
          }

          return ["adjustedNumberOfUsers", "adjustedMinNumber", "adjustedNextBulk", "adjustedMaxNumber", "isInvoiceAllowed", "priceMonthly", "priceMonthlyVAT", "priceMonthlyVATRate", "priceMonthlyPerUser", "priceYearly", "priceYearlyVAT", "priceYearlyVATRate", "priceYearlyPerUser", "totalPriceYearly", "totalPriceYearlyVAT", "totalPriceYearlyVATRate"].forEach(function (t) {
            d[t] || (d[t] = e.value(void 0))
          }), e.withValue([n, o, s, i], function (e, t, i, o) {
            if (d && t && void 0 !== i && o) {
              a && console.log(r, "country is ", t, " number of users", e, "yearly", i);
              var n = o[t];
              if (d.isTeam()) {
                var s = e, l = !1, p = !1, m = !1;
                s < d.minUsers() && (l = !0, s = d.minUsers()), s > d.maxUsers() && (void 0 === c || !c()) && (m = !0, s = d.maxUsers()), a && console.log(r, "max users is ", d.maxUsers(), " adjusted now ", s);
                var y = -1;
                for (var _ in d.prices) _ = parseInt(_), d.prices.hasOwnProperty(_) && _ <= s && _ > y && (y = _);
                var f = 9999999;
                for (var _ in d.prices) (_ = parseInt(_)) < f && _ > y && (f = _);
                9999999 != f && i && d.prices[y]().priceYearly * s > d.prices[f]().priceYearly * f && (p = !0, y = f, s = f), a && console.log(r, "adjustedNumberOfUsers is", s, "adjustedMinNumber", l, "adjustedNextBulk", p, "largestMatchingBulk", y), d.adjustedNumberOfUsers(s), d.adjustedMinNumber(l), d.adjustedNextBulk(p), d.adjustedMaxNumber(m), y >= 0 ? (d.priceMonthly(d.prices[y]().priceMonthly * s), d.priceYearly(d.prices[y]().priceYearly * s), d.priceMonthlyPerUser(d.prices[y]().priceMonthly), d.priceYearlyPerUser(d.prices[y]().priceYearly), d.totalPriceYearly(d.prices[y]().priceYearly * s * 12), d.totalPriceYearlyVAT(u(d.totalPriceYearly(), n)), d.totalPriceYearlyVATRate(n), d.isInvoiceAllowed(d.totalPriceYearly() >= d.invoiceMinimumYearly())) : console.warn(r, "no team prices available")
              } else d.totalPriceYearly(12 * d.priceYearly()), d.totalPriceYearlyVAT(u(d.totalPriceYearly(), n)), d.totalPriceYearlyVATRate(n), a && console.log(r, "writing totalPriceYearlyVAT", d, t, o);
              d.priceMonthlyVAT(u(d.priceMonthly(), n)), d.priceMonthlyVATRate(n), d.priceYearlyVAT(u(d.priceYearly(), n)), d.priceYearlyVATRate(n)
            }
          }), d
        }
      }
    })
  }, 315: function (e, t, r) {
    M.define("checkoutController", ["U", "dlPriceCalculator", "addressValidationController", "cardController", "pro-pricingCalculator", "queryVars", "dlRPC", "dlPageState", "pro-AvailablePaymentTypesCalculator", "dlLoginController", "dlTexts"], function (e, t, r, a, i, o, n, s, c, d, u) {
      "use strict";
      var l = "[checkoutController]", p = !1, m = n.getBackend("/PHP/backend/stripe/account.php"),
        y = n.getBackend("/PHP/backend/account.php"), _ = n.getBackend("/backend/registration"),
        f = m.getFunction("checkout_getData"), g = m.getFunction("checkout_saveData"),
        h = m.getFunction("checkout_register"), v = y.getFunction("login"),
        w = m.getFunction("checkout_isCardCountryAllowed"), b = m.getFunction("getProducts"),
        C = _.getFunction("Confirm"), P = _.getFunction("UpdateProduct"), E = _.getFunction("UpdateAccountLimit"),
        A = _.getFunction("UpdateProductFromClassic"), k = y.getFunction("SendPasswordLink"), T = {
          step: e.value(""),
          status_busy: e.value(0),
          status_fieldErrors_register: e.value(),
          status_fieldErrors_login: e.value(),
          status_fieldErrors_address: e.value(),
          status_fieldErrors_confirmation: e.value(),
          status_fieldErrors_payment: e.value(),
          status_fieldErrors_upgrade: e.value(),
          status_pageError_html: e.value(),
          status_checkoutError_html: e.value(""),
          status_justFinished: e.value(!1),
          creditCardErrors: e.value(void 0)
        }, I = e.createValues({
          productId: void 0,
          productInfos: void 0,
          currentProductInfo: void 0,
          vatRates: void 0,
          accountEmail: void 0,
          accountSubscriptionId: !1,
          basePrice: void 0,
          _maxPrice: void 0,
          currency: "eur",
          characterLimit: void 0,
          vatRate: void 0,
          _calculatedVAT_text: "",
          _totalPrice_text: "",
          _costControlEnabled: !1,
          stripePublicKey: void 0,
          paymentDataCollected: !1,
          addressDataCollected: !1,
          yearly: void 0,
          accountLimit: 1,
          isAccountActivated: !1,
          isTrialPeriod: void 0,
          isEligibleForTrial: void 0,
          isUnlimitedUsersAllowed: void 0,
          login: {email: "", password: "", keepLogin: !0},
          register: {
            givenName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepetition: "",
            keepLogin: !0,
            initialReferrer: window.localStorage ? null === localStorage.getItem("initialReferrer") ? "?" : localStorage.getItem("initialReferrer") : ""
          },
          address: {
            company: "",
            vatNumber: "",
            givenName: "",
            lastName: "",
            street: "",
            streetExtension: "",
            zip: "",
            city: "",
            country: "",
            countryName: "",
            state: "",
            _vatHint: "",
            _isCountyVisible: !1,
            _isProvinceVisible: !1,
            _isStateVisible: !1,
            _isVATNumberInvalid: !1,
            _checkoutAsCompany: !1,
            _isCountryInvalid: !1
          },
          confirmation_termsAccepted: !1,
          confirmation_termsAcceptedConsumer: !1,
          confirmation_usageRestrictionAcknowledged: !1,
          confirmation_revocationBeginningAccepted: !1,
          paymentType: "credit_card",
          cc: {
            ccToken: void 0,
            ccBrand: void 0,
            ccSuffix: void 0,
            ccExpirationMonth: void 0,
            ccExpirationYear: void 0,
            ccCountry: void 0,
            ccCardToken: void 0
          },
          dd: {ddToken: void 0, ddSuffix: void 0},
          upgradeType: void 0,
          storedProductId: e.persistentValue("newpro-checkout.productId", void 0, 604800),
          storedYearly: e.persistentValue("newpro-checkout.yearly", void 0, 604800),
          availableCountries: void 0
        }, !0);
      I.availablePaymentTypes = c.create(I.currentProductInfo, I.address.country, I.yearly, I.availableCountries), e.withValue([I.productId, I.productInfos], function (e, t) {
        if (void 0 !== t && void 0 !== e) {
          var r = t[e];
          r ? I.currentProductInfo(i.createProductInfo(r, I.vatRates, I.address.country, I.accountLimit, I.yearly, I.isUnlimitedUsersAllowed)) : (console.error(l, "Invalid Product!", e), I.currentProductInfo(void 0))
        } else I.currentProductInfo(void 0)
      }), e.withValue([I.address.country], function (e) {
        e && (I.address._isCountyVisible(r.IsCountyVisible(e)), I.address._isProvinceVisible(r.IsProvinceVisible(e)), I.address._isStateVisible(r.IsStateVisible(e)), I.address.countryName(""), I.address._vatHint(r.getVatPrefixForCountry(e) + "..."), I.address._isCountryInvalid("_other" == e))
      }), e.withValue([I.address._checkoutAsCompany], function (e) {
        e || (I.address.vatNumber(""), I.address.company(""))
      }), e.withValue([I.address.company], function (e) {
        e && I.address._checkoutAsCompany(!0)
      }), e.withValue([I.address.vatNumber], function (e) {
        (e = r.cleanupVatString(e)) && I.address._checkoutAsCompany(!0), I.address.vatNumber(e)
      }), e.withValue([I.paymentType, I.availablePaymentTypes.isDirectDebitAllowed], function (e, t) {
        "direct_debit" === e && !1 === t && (console.warn(l, "resetting paymentt data"), F(), I.paymentType("credit_card"))
      }), e.withValue([I.paymentType, I.availablePaymentTypes.isInvoiceAllowed], function (e, t) {
        "invoice" === e && !1 === t && (console.warn(l, "resetting paymentt data"), F(), I.paymentType("credit_card"))
      }), e.withValue([I.paymentType, I.availablePaymentTypes.isInvoiceAllowed], function (e, t) {
        "invoice" === e && !1 === t && (console.warn(l, "resetting payment data"), F(), I.paymentType(!1))
      }), e.withValue([I.paymentType], function (e) {
        T.status_fieldErrors_payment(!1)
      }), window._checkoutData = I;
      var x = new t({
        characterLimit: "1000000000000",
        productCharacterLimit: "1000000",
        price: "20.0000",
        currency: "EUR"
      });

      function D(e) {
        return r.rpcError_to_checkoutError(e)
      }

      function V() {
        var e = [];
        if (I.address.givenName().length || e.push(["address.givenName", "messages/fieldError.requiredField"]), I.address.lastName().length || e.push(["address.lastName", "messages/fieldError.requiredField"]), I.address.city().length || e.push(["address.city", "messages/fieldError.requiredField"]), I.address.country().length || e.push(["address.country", "messages/fieldError.requiredField"]), I.address.zip().length) {
          var t = r.validateZipCode(I.address.country(), I.address.zip());
          if (null !== t) {
            var a = u["messages/fieldError.zipInvalid"] || "zipInvalid";
            a = a.replace("%%format%%", "" + t), e.push(["address.zip", a])
          }
        } else e.push(["address.zip", "messages/fieldError.requiredField"]);
        return I.address.street().length || e.push(["address.street", "messages/fieldError.requiredField"]), I.address._checkoutAsCompany() && (I.address.company().length || e.push(["address.company", "messages/fieldError.requiredField"])), r.validateEmailForCheckout(I.accountEmail()) || e.push(["address.country", "messages/fieldError.competitionClause"]), e
      }

      function L(e) {
        return r.createFieldError(e)
      }

      function N() {
        return new Promise(function (e, t) {
          M(), f({sessionToken: d.sessionToken, productId: I.productId(), yearly: I.yearly()}).then(function (r) {
            Y(), p && console.log(l, "inData is ", r), "needsProductData" in r && 1 == r.needsProductData && (location.href = "/pro.html", t()), I._costControlEnabled(r.costControl > 0), I.characterLimit(r.characterLimit), I.accountEmail(r.email), I.accountSubscriptionId(r.subscriptionId), null == r.billingCountry ? I.address.country(r.geoCountryCode) : I.address.country(r.billingCountry || ""), I.address.countryName(r.billingCountryName || ""), I.address.company(r.billingCompany || ""), I.address.vatNumber(r.billingCompanyVATNumber || ""), I.address.givenName(r.billingFirstName || ""), I.address.lastName(r.billingLastName || ""), I.address.street(r.billingStreet || ""), I.address.streetExtension(r.billingStreetExtension || ""), I.address.zip(r.billingZip || ""), I.address.city(r.billingCity || ""), I.address.state(r.billingState || ""), I.isAccountActivated(r.isAccountActivated), I.paymentDataCollected(r.paymentDataCollected), I.addressDataCollected(r.addressDataCollected), I.stripePublicKey(r.stripePublicKey), I.cc.ccBrand(r.ccBrand || ""), I.cc.ccSuffix(r.ccSuffix || ""), I.cc.ccExpirationMonth(r.ccExpirationMonth), I.cc.ccExpirationYear(r.ccExpirationYear), I.cc.ccCountry(r.ccCountry || ""), I.cc.ccToken(void 0), I.dd.ddSuffix(r.ddSuffix || ""), I.dd.ddToken(void 0), I.paymentType(r.paymentType || ""), I.productInfos(r.productInfos), I.vatRates(r.vatRates), void 0 === I.yearly() && I.yearly(r.yearly), I.accountLimit(r.accountLimit), I.isTrialPeriod(r.isTrialPeriod), I.isEligibleForTrial(r.isEligibleForFreeTrial), I.isUnlimitedUsersAllowed(r.allowUnlimitedUsers), I.availablePaymentTypes.isCreditCardAllowedForUser("ALLOWED" === r.userPaymentAvailability_creditCard || "ALLOWED_EXPLICITLY" === r.userPaymentAvailability_creditCard), I.availablePaymentTypes.isCreditCardAllowedForUserExplicitly("ALLOWED_EXPLICITLY" === r.userPaymentAvailability_creditCard), I.availablePaymentTypes.isDirectDebitAllowedForUser("ALLOWED" === r.userPaymentAvailability_directDebit || "ALLOWED_EXPLICITLY" === r.userPaymentAvailability_directDebit), I.availablePaymentTypes.isDirectDebitAllowedForUserExplicitly("ALLOWED_EXPLICITLY" === r.userPaymentAvailability_directDebit), I.availablePaymentTypes.isInvoiceAllowedForUser("ALLOWED" === r.userPaymentAvailability_invoice || "ALLOWED_EXPLICITLY" === r.userPaymentAvailability_invoice), I.availablePaymentTypes.isInvoiceAllowedForUserExplicitly("ALLOWED_EXPLICITLY" === r.userPaymentAvailability_invoice), void 0 === I.productId() && (p && console.log(l, "setting product id from backend", r.productId), I.productId(r.productId)), I.availableCountries(r.availableCountries), e(I)
          }, function (e) {
            Y(), console.warn("Error received in requestDataUpdate:", e), j(D(e)), t(D(e))
          })
        })
      }

      function S(e, t, r) {
        return new Promise(function (a, i) {
          if (!R()) return console.log(l, "requestCanBeStarted", R), void a(!1);
          var n = "registration" === T.step() || !T.step();
          T.step(""), void 0 !== e ? (I.productId(e), I.yearly(t)) : (o.productId && (I.storedProductId(o.productId), I.productId(o.productId)), o.yearly && (I.storedYearly("true" == o.yearly), I.yearly("true" == o.yearly)), I.yearly.onValueChanged.push(function (e) {
            p && console.log(l, "changed yearly to ", e)
          })), p && console.log(l, "product id is ", I.productId(), "yearly is", I.yearly(), "stored yearly ", I.storedYearly()), d.checkLoginStatus().then(function (e) {
            e ? N().then(function () {
              p && console.log(l, "product ID is ", I.productId(), " infos ", I.productInfos(), "country", I.address.country());
              var e = I.currentProductInfo();
              if (!e) return T.status_pageError_html("Product not found"), void a(!1);
              if (e.supportsYearly() || I.yearly(!1), void 0 !== t && e.supportsYearly() && t && I.yearly(!0), e.isTeam() && I.accountLimit() < e.minUsers() && I.accountLimit(e.minUsers()), "" == I.paymentType() && I.paymentType("credit_card"), r) T.step("upgrade"), a(!0); else {
                var i = o.step;
                I.isAccountActivated() && ("details" == i || "confirmation" == i || n) ? (T.step("final"), a(!0)) : "details" == i || "confirmation" == i || n ? (T.step("details"), a(!0)) : (T.step("registration"), a(!0))
              }
            }, function (e) {
              T.status_pageError_html(e.message), a(!1)
            }) : b().then(function (e) {
              I.productId() in e ? (I.productInfos(e), T.step("registration"), a()) : (location.href = "/pro.html#pricing", a())
            }, function () {
              console.warn(l, "Can't fetch product information, not great"), T.step("registration"), a()
            })
          })
        })
      }

      function F() {
        I.paymentDataCollected(!1), I.cc.ccToken("")
      }

      function U(e) {
        return new Promise(function (t, a) {
          e ? r.isCountryAllowed(e) ? t(!0) : w({country: e}).then(t, a) : t(!1)
        })
      }

      function M() {
        T.status_busy(T.status_busy() + 1)
      }

      function Y() {
        T.status_busy(T.status_busy() - 1)
      }

      function R() {
        return !(T.status_busy() > 0) && (T.status_pageError_html(!1), T.status_checkoutError_html(!1), !0)
      }

      function j(e, t) {
        if (e) switch (p && console.log(l, "handleCheckoutError:", e), e.type || "pageError") {
          case"pageError":
            T.status_checkoutError_html(e.message);
            break;
          case"fieldErrors":
            console.warn("--- fieldErrors:", e.errors), t(e.errors);
            break;
          default:
            T.status_checkoutError_html("<p>Error of unexpected type!</p>")
        }
      }

      return x.updateValue = function (e, t) {
        e && (x[e] = t), I.currency(x.currency), I.basePrice(x.productPrice), I._costControlEnabled() ? (I._maxPrice(x.price), I.characterLimit(x.characterLimit)) : (I._maxPrice(!1), I.characterLimit(!1))
      }, e.withValue([I.characterLimit], function (e) {
        x.updateValue("characterLimit", e)
      }), e.withValue([I._maxPrice], function (e) {
        x.updateValue("price", e)
      }), e.withValue([I._costControlEnabled], function (e) {
        p && console.log(l, "costControlEnabled", e, I.characterLimit()), e && !I.characterLimit() && I.characterLimit(5e6), x.updateValue()
      }), {
        nextStep: S, register: function () {
          R() && new Promise(function (e, t) {
            T.status_fieldErrors_register(!1);
            var r = [];
            I.register.email().length || r.push(["register.email", "messages/fieldError.requiredField"]), I.register.password().length || r.push(["register.password", "messages/fieldError.requiredField"]), r.length ? t(L(r)) : (M(), h({
              productId: I.productId(),
              yearly: I.yearly(),
              "register.givenName": I.register.givenName(),
              "register.lastName": I.register.lastName(),
              "register.email": I.register.email(),
              "register.password": I.register.password(),
              "register.keepLogin": I.register.keepLogin(),
              "register.initialReferrer": I.register.initialReferrer()
            }).then(function () {
              Y(), e()
            }, function (e) {
              Y(), t(D(e))
            }))
          }).then(function () {
            S().then(function () {
              p && console.log(l, "step is ", T.step()), "registration" == T.step() && T.step("details"), p && console.log(l, "now step is ", T.step())
            })
          }, function (e) {
            j(e, T.status_fieldErrors_register)
          })
        }, login: function () {
          R() && (M(), v({
            email: I.login.email(),
            password: I.login.password(),
            keepLogin: I.login.keepLogin()
          }).then(function () {
            Y(), S()
          }, function (e) {
            Y(), j(D(e), T.status_fieldErrors_login)
          }))
        }, goToDetails: function () {
          p && console.log(l, "isAccountActivated", I.isAccountActivated()), I.isAccountActivated() ? T.step("final") : T.step("details")
        }, updateAfterSubscribed: function (e) {
          if (R()) return new Promise(function (t, r) {
            var a = [];
            I.confirmation_termsAccepted() || a.push(["confirmation_termsAccepted", u["messages/fieldError.requireConfirmationToProceed"]]), a.length ? (j(L(a), T.status_fieldErrors_confirmation), r(L(a))) : (M(), P({
              id: I.accountSubscriptionId(),
              productCode: I.currentProductInfo().code(),
              billingMonths: I.yearly() ? 12 : 1,
              newAccountLimit: e ? I.accountLimit() : null
            }).then(function (e) {
              Y(), e.result ? t() : (T.status_checkoutError_html(u["pro-checkout/upgrade.checkoutError"] || "zipInvalid"), r())
            }, function (e) {
              Y(), j(D(e), T.status_fieldErrors_confirmation), r(D(e))
            }))
          })
        }, updateProductFromClassic: function () {
          if (R()) return p && console.log(l, "starting updateProductFromClassic"), new Promise(function (e, t) {
            var r = [];
            I.confirmation_termsAccepted() || r.push(["confirmation_termsAccepted", u["messages/fieldError.requireConfirmationToProceed"]]), r.length ? (j(L(r), T.status_fieldErrors_confirmation), t(L(r))) : (M(), p && console.log(l, "sending request"), A({
              id: I.accountSubscriptionId(),
              productCode: I.currentProductInfo().code(),
              billingMonths: I.yearly() ? 12 : 1,
              accountLimit: I.currentProductInfo().isTeam() ? I.currentProductInfo().adjustedNumberOfUsers() : 1,
              confirmation_termsAccepted: I.confirmation_termsAccepted()
            }).then(function (r) {
              p && console.log(l, "finished ok request"), Y(), r.result ? e() : (T.status_checkoutError_html(u["pro-checkout/upgrade.checkoutError"] || "zipInvalid"), t())
            }, function (e) {
              p && console.log(l, "finished error request"), Y(), j(D(e), T.status_fieldErrors_confirmation), t(D(e))
            }))
          });
          console.warn(l, "can't start request")
        }, updateAccountLimit: function () {
          if (R()) return new Promise(function (e, t) {
            if (I.currentProductInfo().adjustedNumberOfUsers() == I.originalAccountLimit) return T.status_checkoutError_html(u["pro-checkout/upgrade.limit_is_the_same"] || ""), void t();
            var r = [];
            I.confirmation_termsAccepted() || r.push(["confirmation_termsAccepted", u["messages/fieldError.requireConfirmation"]]), r.length ? (j(L(r), T.status_fieldErrors_confirmation), t(L(r))) : (M(), E({
              id: I.accountSubscriptionId(),
              newAccountLimit: I.currentProductInfo().adjustedNumberOfUsers()
            }).then(function (r) {
              Y(), r.result ? e() : (T.status_checkoutError_html(u["pro-checkout/upgrade.checkoutError"] || "zipInvalid"), t())
            }, function (e) {
              Y(), j(D(e), T.status_fieldErrors_confirmation), t(D(e))
            }))
          })
        }, submitDetailsDataAndContinue: function () {
          function e() {
            p && console.log(l, "submitNonPaymentDataAndContinue..."), M(), T.status_fieldErrors_address(!1), new Promise(function (e, t) {
              var r = V();
              r.length ? t(L(r)) : new Promise(function (e, t) {
                I.currentProductInfo().isTeam() && (I.accountLimit() < I.currentProductInfo().minUsers() || I.accountLimit() > I.currentProductInfo().maxUsers()) ? t() : (M(), g({
                  characterLimit: I.characterLimit(),
                  billingCountry: I.address.country(),
                  billingCompany: I.address.company(),
                  billingCompanyVATNumber: I.address.vatNumber(),
                  isCompany: I.address._checkoutAsCompany(),
                  billingState: I.address.state(),
                  billingFirstName: I.address.givenName(),
                  billingLastName: I.address.lastName(),
                  billingStreet: I.address.street(),
                  billingStreetExtension: I.address.streetExtension(),
                  billingZip: I.address.zip(),
                  billingCity: I.address.city(),
                  ccToken: I.cc.ccToken(),
                  paymentType: I.paymentType(),
                  ddToken: I.dd.ddToken(),
                  yearly: I.yearly(),
                  accountLimit: I.currentProductInfo().isTeam() ? I.currentProductInfo().adjustedNumberOfUsers() : 1,
                  productId: I.productId(),
                  sessionToken: d.sessionToken
                }).then(function () {
                  Y(), e()
                }, function (e) {
                  Y(), t(D(e))
                }))
              }).then(function (t) {
                e(t)
              }, function (e) {
                t(e)
              })
            }).then(function (e) {
              p && console.log(l, "submitNonPaymentDataAndContinue: data stored."), N().then(function () {
                Y(), T.step("confirmation")
              }, function (e) {
                Y(), j(e, T.status_fieldErrors_address)
              })
            }, function (e) {
              Y(), p && console.log(l, "submitNonPaymentDataAndContinue error:", e), "fieldErrors" == e.type && e.errors.paymentErrors ? T.status_fieldErrors_payment({paymentErrors: e.errors.paymentErrors}) : "fieldErrors" == e.type && e.errors.creditCardErrors ? T.creditCardErrors(e.errors.creditCardErrors[0]) : j(e, T.status_fieldErrors_address)
            })
          }

          function t(e) {
            Y(), console.warn("Error", e), T.status_fieldErrors_payment(L([["creditCardErrors", {
              incorrect_cvc: "messages/error.paymentError.cvc",
              incorrect_number: "messages/error.paymentError.number",
              expired_card: "messages/error.paymentError.expired",
              processing_error: "messages/error.paymentError.processing",
              card_declined: "messages/error.paymentError.declined"
            }[e.code] || "messages/error.paymentError"]]).errors)
          }

          R() && (T.status_fieldErrors_payment(!1), p && console.log(l, "submitDataAndContinue..."), I.paymentDataCollected() ? e() : "credit_card" == I.paymentType() ? (M(), a.handleCardSetup().then(function (r) {
            U(r.country || r.card && r.card.country).then(function (t) {
              Y(), t ? (I.cc.ccToken(r.id), e()) : (p && console.log(l, "card country not allowed:", r.country || r.card && r.card.country), T.status_fieldErrors_payment(L([["creditCardErrors", "messages/error.cardCountryNotAllowed"]]).errors))
            }, t)
          }, t)) : "direct_debit" == I.paymentType() ? (M(), a.requestTokenDirectDebit(I.address.givenName() + " " + I.address.lastName()).then(function (r) {
            p && console.log(l, "token received from stripe", r), U(r.sepa_debit && r.sepa_debit.country).then(function (t) {
              Y(), t ? (I.dd.ddToken(r.id), e()) : (console.warn("country not allowed:", r.sepa_debit && r.sepa_debit.country), T.status_fieldErrors_payment(L([["directDebitErrors", "messages/error.cardCountryNotAllowed"]]).errors))
            }, t)
          }, t)) : "invoice" == I.paymentType() && e())
        }, forgotPassword: function (e) {
          return new Promise(function (t, r) {
            R() ? (M(), k({email: e, forward: location.href}).then(function (e) {
              Y(), t()
            }, function (e) {
              Y(), j(D(e)), r()
            })) : r()
          })
        }, clearPaymentData: F, requestFinalization: function (e, t) {
          if (R()) return T.status_fieldErrors_confirmation(!1), new Promise(function (r, a) {
            var i = [];
            !function (e, t) {
              I.address._checkoutAsCompany() ? (I.confirmation_termsAccepted() || e.push(["confirmation_termsAccepted", u["messages/fieldError.requireConfirmation"]]), I.confirmation_usageRestrictionAcknowledged() || e.push(["confirmation_usageRestrictionAcknowledged", u["messages/fieldError.requireConfirmation"]])) : (I.confirmation_termsAcceptedConsumer() || e.push(["confirmation_termsAcceptedConsumer", u["messages/fieldError.requireConfirmation"]]), I.confirmation_usageRestrictionAcknowledged() || e.push(["confirmation_usageRestrictionAcknowledged", u["messages/fieldError.requireConfirmation"]]), t || I.confirmation_revocationBeginningAccepted() || e.push(["confirmation_revocationBeginningAccepted", u["messages/fieldError.requireConfirmation"]]))
            }(i, I.currentProductInfo().hasFreeTrial()), i.length ? a(L(i)) : (M(), C({
              confirmation_termsAccepted: I.confirmation_termsAccepted(),
              confirmation_termsAcceptedConsumer: I.confirmation_termsAcceptedConsumer(),
              confirmation_usageRestrictionAcknowledged: I.confirmation_usageRestrictionAcknowledged(),
              confirmation_revocationBeginningAccepted: I.confirmation_revocationBeginningAccepted(),
              displayedPrice: e,
              ccSuffix: I.cc.ccSuffix(),
              ddSuffix: I.dd.ddSuffix(),
              paymentType: I.paymentType(),
              yearly: t,
              productId: I.productId(),
              id: I.accountSubscriptionId(),
              isEligibleForFreeTrial: I.isEligibleForTrial(),
              sessionToken: d.sessionToken
            }).then(function () {
              Y(), r()
            }, function (e) {
              Y(), a(D(e))
            }))
          }).then(function () {
            p && console.log(l, "switching to step finished"), T.status_justFinished(!0), T.step("final")
          }, function (e) {
            j(e, T.status_fieldErrors_confirmation)
          })
        }, validateData: V, validateVATNumber: function () {
          return new Promise(function (e, t) {
            I._isVATNumberInvalid(!1), r.validateVATNumber(I.address.vatNumber(), I.address.country()).then(e, t)
          })
        }, getProductByCode: function (e) {
          for (var t in I.productInfos()) {
            var r = I.productInfos()[t];
            if (r.code == e) return p && console.log(l, "for code ", e, "found id", t), r
          }
          p && console.warn(l, "can't find product for ", e)
        }, clearErrors: function () {
          T.status_pageError_html(!1), T.status_checkoutError_html(!1)
        }, data: I, statusData: T
      }
    })
  }, 316: function (e, t) {
    M.define("checkoutViewController", ["U", "checkoutController", "kDeepL", "cardController", "dlLoginController", "dlPageState", "dlTexts", "dlAnalytics"], function (e, t, r, a, i, o, n, s) {
      var c = "[checkoutViewController]", d = o.devMode && !0, u = {
        productChooser: e.value(!1),
        billingAddress: e.value(!1),
        paymentData: e.value(!1),
        confirmation: e.value(!1),
        confirmationButton: e.value(!1),
        content_registration: e.value(!1),
        tips: e.value(!1),
        final: e.value(!1),
        upgradeView: e.value(!1),
        isUsageBased: e.value(!1),
        status_fieldErrors: t.statusData.status_fieldErrors,
        status_busy: t.statusData.status_busy,
        status_pageError_html: t.statusData.status_pageError_html,
        status_checkoutError_html: t.statusData.status_checkoutError_html,
        isRegistrationStep: e.value(!0),
        isDetailsStep: e.value(!0),
        isReviewStep: e.value(!1),
        isFinalStep: e.value(!1)
      };

      function l() {
        var a = t.data.currentProductInfo;
        return {
          freeDays: a().trialPeriodDays(),
          totalYearly: e.computedValue(a().totalPriceYearly, function (e) {
            return void 0 === e ? void 0 : r.formatPriceWithCurrency(e / 100)
          }),
          totalMonthly: "priceMonthly" in a() ? e.computedValue(a().priceMonthly, function (e) {
            return r.formatPriceWithCurrency(e / 100)
          }) : void 0,
          priceYearly: e.computedValue(a().priceYearly, function (e) {
            return r.formatPriceWithCurrency(e / 100)
          }),
          charactersPerCent: "charactersPerCent" in a() ? a().charactersPerCent : 0,
          oneCent: r.formatPriceWithCurrency(.01),
          chargeLimitPrice: r.formatPriceWithCurrency(500),
          invoiceMinimumYearly: r.formatPriceWithCurrency(a().invoiceMinimumYearly() / 100),
          ccBrand: t.data.cc.ccBrand,
          ccSuffix: t.data.cc.ccSuffix,
          ccExpirationMonth: t.data.cc.ccExpirationMonth,
          ccExpirationYear: t.data.cc.ccExpirationYear,
          ddSuffix: t.data.dd.ddSuffix,
          trialCancelUntil: "trialCancelUntil" in a() ? e.computedValue(a().trialCancelUntil, function (e) {
            return r.formatDate(e)
          }) : "",
          firstCharge: "firstCharge" in a() ? e.computedValue(a().firstCharge, function (e) {
            return r.formatDate(e)
          }) : void 0,
          totalPriceYearlyVAT: "totalPriceYearlyVAT" in a() ? e.computedValue(a().totalPriceYearlyVAT, function (e) {
            return d && console.log(c, "totalPriceYearlyVAT is ", r.formatPriceWithCurrency(e / 100), e, a()), r.formatPriceWithCurrency(e / 100)
          }) : void 0,
          totalPriceYearlyVATRate: a().totalPriceYearlyVATRate,
          priceMonthlyVAT: "priceMonthlyVAT" in a() ? e.computedValue(a().priceMonthlyVAT, function (e) {
            return r.formatPriceWithCurrency(e / 100)
          }) : void 0,
          priceMonthly: "priceYearly" in a() ? e.computedValue(a().priceYearly, function (e) {
            return r.formatPriceWithCurrency(e / 100)
          }) : void 0,
          priceMonthlyVATRate: a().priceMonthlyVATRate,
          costControlLimit: r.formatPriceWithCurrency(t.data._maxPrice()),
          numberDocuments: a().documentLimit,
          yearlySavings: a().yearlySavings,
          monthlyPriceFromYearly: "priceYearly" in a() ? e.computedValue(a().priceYearly, function (e) {
            return r.formatPriceWithCurrency(e / 100)
          }) : void 0,
          productName: "pro-checkout/product_name." + a().code() in n ? n["pro-checkout/product_name." + a().code()] : "pro-checkout/product_name." + a().code(),
          numberUsers: a().adjustedNumberOfUsers,
          minUsers: a().minUsers,
          maxUsers: a().maxUsers
        }
      }

      function p() {
        u.productChooser(!1), u.billingAddress(!1), u.paymentData(!1), u.confirmation(!1), u.content_registration(!1), u.confirmationButton(!1), u.tips(!1), u.final(!1)
      }

      function m() {
        var r = {
          type: "dl_checkout__template_register",
          register: {
            givenName: t.data.register.givenName,
            lastName: t.data.register.lastName,
            email: t.data.register.email,
            password: t.data.register.password,
            keepLogin: t.data.register.keepLogin
          },
          initialReferrer: window.localStorage ? null === localStorage.getItem("initialReferrer") ? "?" : localStorage.getItem("initialReferrer") : "",
          doRegister: function () {
            console.log(c, "Register..."), t.register()
          },
          doSwitchToLogin: function () {
            var r;
            return (r = {
              type: "dl_checkout__template_login",
              login: {email: t.data.login.email, password: t.data.login.password, keepLogin: t.data.login.keepLogin},
              doSwitchToRegistration: m,
              doLogin: t.login,
              status_fieldErrors: t.statusData.status_fieldErrors_register,
              status_checkoutError_html: t.statusData.status_checkoutError_html,
              showPasswordForgottenLink: e.value(!1),
              onForgotPassword: function () {
                0 == t.data.login.email().length && t.statusData.status_fieldErrors_register({email: [n["messages/fieldError.requiredField"] || ""]}), t.forgotPassword(t.data.login.email()).then(function () {
                  u.content_registration({type: "dl_checkout__template_password_reset_sent"})
                }, function () {
                })
              }
            }).status_fieldErrors.onValueChanged.push(function (e) {
              r.show_password_forgotten_link(!1), e["register.password"] && r.show_password_forgotten_link(!0)
            }), u.content_registration(r), !1
          },
          status_fieldErrors: t.statusData.status_fieldErrors_register,
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          showPasswordForgottenLink: e.value(!1),
          showPasswordForgottenConfirmation: e.value(!1),
          onForgotPassword: function () {
            0 == t.data.register.email().length && t.statusData.status_fieldErrors_register({email: [n["messages/fieldError.requiredField"] || ""]}), t.forgotPassword(t.data.register.email()).then(function () {
              u.content_registration({type: "dl_checkout__template_password_reset_sent"})
            }, function () {
            })
          }
        };
        r.status_fieldErrors.onValueChanged.push(function (e) {
          r.showPasswordForgottenLink(!1), e["register.password"] && r.showPasswordForgottenLink(!0)
        }), u.content_registration(r)
      }

      function y() {
        if (t.data.currentProductInfo()) if (t.data.paymentDataCollected()) {
          var r = {
            type: "dl_checkout__template_payment_data_collected",
            cc: t.data.cc,
            paymentType: t.data.paymentType,
            dd: t.data.dd,
            isCreditCard: e.value(!1),
            isDirectDebit: e.value(!1),
            isInvoice: e.value(!1),
            status_invalidCountry: t.data.address._isCountryInvalid,
            placeholders: l(),
            doChangePaymentDetails: function () {
              d && console.log(c, "doChangePaymentDetails"), t.clearPaymentData(), y()
            }
          };
          e.withValue([t.data.paymentType], function (e) {
            r.isCreditCard("credit_card" === e), r.isDirectDebit("direct_debit" === e), r.isInvoice("invoice" === e)
          }), u.paymentData(r)
        } else {
          var i = t.data.currentProductInfo(), o = {
            type: "dl_checkout__template_payment_data",
            paymentType: t.data.paymentType,
            availablePaymentTypes: t.data.availablePaymentTypes,
            creditCardSelected: e.computedValue([t.data.paymentType], function (e) {
              return "credit_card" === e
            }),
            creditCardErrors: t.statusData.creditCardErrors,
            directDebitSelected: e.computedValue([t.data.paymentType], function (e) {
              return "direct_debit" === e
            }),
            directDebitBankName: e.value(),
            directDebitErrors: e.value(),
            invoiceSelected: e.computedValue([t.data.paymentType], function (e) {
              return "invoice" === e
            }),
            currentProductInfo: i,
            placeholders: l(),
            status_invalidCountry: t.data.address._isCountryInvalid,
            status_fieldErrors: t.statusData.status_fieldErrors_payment
          };
          e.withValue([t.data.availablePaymentTypes.isCreditCardAllowed], function (e) {
            o.creditCardErrors(void 0), e && setTimeout(function () {
              a.initializeCreditCard(t.data.stripePublicKey(), "#stripe_card_element", o.creditCardErrors)
            })
          }), e.withValue([t.data.availablePaymentTypes.isDirectDebitAllowed], function (e) {
            o.directDebitBankName(void 0), o.directDebitErrors(void 0), e && setTimeout(function () {
              a.initializeDirectDebit(t.data.stripePublicKey(), "#stripe_iban_element", o.directDebitErrors, o.directDebitBankName)
            })
          }), u.paymentData(o)
        } else u.paymentData(!1)
      }

      return e.withValue(t.statusData.step, function (a) {
        var o, _;
        u.isRegistrationStep(!1), u.isDetailsStep(!1), u.isReviewStep(!1), u.isFinalStep(!1), "registration" == a ? (p(), s.send({
          action: "checkout",
          label: "registration"
        }), u.isRegistrationStep(!0), r.isLoggedIn() ? u.content_registration({
          type: "dl_checkout__template_already_logged_in",
          placeholders: {email: t.data.accountEmail},
          doContinue: t.goToDetails,
          doSwitchToRegistration: function () {
            i.logout().then(function () {
              location.reload()
            })
          }
        }) : m(), (_ = []).push({
          type: "dl_checkout__tip__benefits_" + t.data.productId(),
          placeholders: l()
        }), u.tips(_)) : "details" == a ? (p(), s.send({
          action: "checkout",
          label: "details"
        }), window.scrollTo(0, 0), history.replaceState(null, "", "?step=details"), u.isDetailsStep(!0), function () {
          t.data.currentProductInfo().isTeam() && t.data.address._checkoutAsCompany(!0);
          u.billingAddress({
            type: "dl_checkout__template_edit_address",
            address: t.data.address,
            availableCountriesSelectOptions: t.data.availableCountries().map(function (e) {
              return {
                type: "dl_checkout__country_option_entry",
                value: e.countryCode,
                name: e.name,
                selected: t.data.address.country() === e.countryCode && "selected"
              }
            }),
            status_fieldErrors: t.statusData.status_fieldErrors_address,
            status_invalidCountry: t.data.address._isCountryInvalid
          })
        }(), function () {
          if (void 0 === t.data.productId()) return;
          var r = t.data.currentProductInfo, a = {
            productInfo: r(), doSelectYearly: function () {
              t.data.yearly(!0)
            }, doSelectMonthly: function () {
              t.data.yearly(!1)
            }, yearly: t.data.yearly, monthly: e.computedValue(t.data.yearly, function (e) {
              return !e
            }), billingType: e.computedValue(t.data.yearly, function (e) {
              return e ? "yearly" : "monthly"
            }), placeholders: l()
          };
          r().isUsageBased() ? (a.type = "dl_checkout__template_usage_based_product", a.characterLimit = t.data.characterLimit, a._costControlEnabled = t.data._costControlEnabled, a._maxPrice = t.data._maxPrice) : r().isTeam() ? (a.type = "dl_checkout__template_team_product", a.accountLimit = t.data.accountLimit, a.adjustedMinNumber = t.data.currentProductInfo().adjustedMinNumber, a.adjustedMaxNumber = t.data.currentProductInfo().adjustedMaxNumber, a.adjustedNextBulk = t.data.currentProductInfo().adjustedNextBulk) : a.type = "dl_checkout__template_individual_product";
          u.productChooser(a)
        }(), y(), u.confirmationButton({
          type: "dl_checkout__template_continue",
          doSubmitAndContinue: t.submitDetailsDataAndContinue,
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          status_invalidCountry: t.data.address._isCountryInvalid
        }), function () {
          u.isUsageBased(t.data.currentProductInfo().isUsageBased());
          var e = [{
            type: "dl_checkout__tips_container_generic",
            elements: [],
            placeholders: l()
          }, {
            type: "dl_checkout__tips_container_details",
            elements: [],
            placeholders: l()
          }, {type: "dl_checkout__tips_container_payment", elements: [], placeholders: l()}];
          t.data.currentProductInfo().hasFreeTrial() && e[0].elements.push({
            type: "dl_checkout__tip__free",
            placeholders: l()
          });
          t.data.currentProductInfo().supportsYearly() && e[0].elements.push({
            type: "dl_checkout__tip__period",
            placeholders: l()
          });
          e[1].elements.push({
            type: "dl_checkout__tip__change_data",
            placeholders: l()
          }), e[2].elements.push({type: "dl_checkout__tip__credit_card_safe", placeholders: l()}), u.tips(e)
        }()) : "confirmation" == a ? (u.isReviewStep(!0), s.send({
          action: "checkout",
          label: "confirmation"
        }), window.scrollTo(0, 0), history.pushState(null, "", "?step=confirmation"), p(), function () {
          var e = t.data.currentProductInfo(), a = t.data.yearly() ? e.totalPriceYearly() : e.priceMonthly(),
            i = "pro-checkout/product_name." + e.code(), o = "";
          i in n && (o = n[i]);
          t.data.confirmation_termsAcceptedConsumer(!1), t.data.confirmation_termsAccepted(!1), t.data.confirmation_revocationBeginningAccepted(!1), t.data.confirmation_usageRestrictionAcknowledged(!1), t.statusData.status_fieldErrors_confirmation(!1);
          var s = {
            type: "dl_checkout__template_confirmation",
            product_info: e,
            yearly: t.data.yearly() && !e.isUsageBased(),
            monthly: !t.data.yearly() && !e.isUsageBased(),
            usageBased: e.isUsageBased(),
            costControlLimit: r.formatPriceWithCurrency(t.data._maxPrice()),
            checkoutAsCompany: t.data.address._checkoutAsCompany,
            showWithdrawalPeriodImmediately: !e.hasFreeTrial() && !t.data.address._checkoutAsCompany(),
            hasFreeTrial: e.hasFreeTrial() && t.data.isEligibleForTrial(),
            isDirectDebitPayment: "direct_debit" == t.data.paymentType(),
            isCreditCardPayment: "credit_card" == t.data.paymentType(),
            isInvoicePayment: "invoice" == t.data.paymentType(),
            ccSuffix: t.data.cc.ccSuffix,
            ccBrand: t.data.cc.ccBrand,
            ddSuffix: t.data.dd.ddSuffix,
            isSingle: t.data.accountLimit() <= 1,
            accountLimit: t.data.accountLimit,
            costControl: e.isUsageBased() && !1 !== t.data._maxPrice(),
            freeTrialForbidden: e.hasFreeTrial() && !t.data.isEligibleForTrial(),
            placeholders: l(),
            productName: o,
            benefits: {
              type: "dl_checkout__plan_benefits",
              placeholders: l(),
              isSingle: t.data.accountLimit() <= 1,
              yearly: t.data.yearly() && !e.isUsageBased(),
              monthly: !t.data.yearly() && !e.isUsageBased(),
              usageBased: e.isUsageBased(),
              productInfo: e
            },
            confirmation_termsAcceptedConsumer: t.data.confirmation_termsAcceptedConsumer,
            confirmation_termsAccepted: t.data.confirmation_termsAccepted,
            confirmation_revocationBeginningAccepted: t.data.confirmation_revocationBeginningAccepted,
            confirmation_usageRestrictionAcknowledged: t.data.confirmation_usageRestrictionAcknowledged,
            doConfirm: function () {
              d && console.log(c, "confirmation started;"), t.requestFinalization(a, t.data.yearly())
            },
            doGoBack: function () {
              t.clearErrors(), t.statusData.step("details")
            },
            status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
            status_checkoutError_html: t.statusData.status_checkoutError_html
          };
          u.confirmation(s)
        }(), u.tips([])) : "upgrade" == a || "final" == a && (u.isFinalStep(!0), window.scrollTo(0, 0), history.pushState(null, "", "?step=final"), s.send({
          action: "checkout",
          label: "final"
        }), p(), o = {
          type: "dl_checkout__template_final",
          subscriptionId: t.data.accountSubscriptionId,
          justFinished: t.statusData.status_justFinished,
          productInfo: t.data.currentProductInfo()
        }, d && console.log(c, "producInfo is ", t.data.currentProductInfo()), u.final(o))
      }), e.withValue([t.statusData.status_pageError_html], function (e) {
        e && e.length && p()
      }), u.doPrepareUpgradeView = function () {
        function a() {
          "team" == t.data.upgradeType() && (t.data.accountLimit() < t.data.currentProductInfo().minUsers() || t.data.accountLimit() > t.data.currentProductInfo().maxUsers()) || (u.upgradeView().status_submitting(!0), t.updateAfterSubscribed("team" == t.data.upgradeType()).then(function () {
            u.upgradeView().status_submitting(!1), u.upgradeView().specific({type: "dl_checkout__upgrade__successful"}), u.upgradeView().newConditions(!1), u.upgradeView().switchConditions(!1), u.upgradeView().confirmations(!1), u.upgradeView().confirmed(!0), u.upgradeView().doClose = function () {
              location.reload()
            }
          }, function (e) {
            u.upgradeView().status_submitting(!1)
          }))
        }

        t.data.confirmation_termsAcceptedConsumer(!1), t.data.confirmation_termsAccepted(!1), t.data.confirmation_revocationBeginningAccepted(!1), t.data.confirmation_usageRestrictionAcknowledged(!1);
        var i = e.value(!1);
        if ("yearly" == t.data.upgradeType()) u.upgradeView({
          type: "",
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          status_pageError_html: t.statusData.status_pageError_html,
          status_submitting: i,
          status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
          confirmed: e.value(!1),
          specific: e.value({type: "dl_checkout__upgrade__specific_annual"}),
          newConditions: e.value({
            type: "dl_checkout__upgrade__new_conditions",
            placeholders: l(),
            single: 1 == t.data.accountLimit(),
            yearlyNew: !0,
            yearly: !1,
            monthly: !1,
            chargedImmediately: !0
          }),
          switchConditions: e.value({
            type: "dl_checkout__upgrade__switch_conditions",
            currentYearly: !1,
            currentMonthly: !t.data.isTrialPeriod(),
            currentMonthlyClassic: !1,
            yearlyNewPeriod: !1,
            monthlyNewPeriod: !1,
            currentTrial: t.data.isTrialPeriod()
          }),
          confirmations: e.value({
            type: "dl_checkout__upgrade__confirmations_product_update",
            confirmation_termsAccepted: t.data.confirmation_termsAccepted
          }),
          doConfirm: a
        }), t.data.yearly(!0); else if ("more_documents" == t.data.upgradeType()) {
          var o = [], s = t.data.currentProductInfo().upgradesAvailable, p = t.data.yearly();
          d && console.log(c, "upgrades available:", s.map(function (e) {
            return e()
          }));
          var m = e.value(void 0);
          Object.keys(s).forEach(function (e) {
            var a = t.getProductByCode(s[e]());
            o.push({
              type: "dl_checkout__upgrade__new_conditions_more_documents_product",
              status_checkoutError_html: t.statusData.status_checkoutError_html,
              productId: a.id,
              elementId: "newProduct" + a.id,
              single: 1 == t.data.accountLimit(),
              status_submitting: i,
              placeholders: {
                numberDocuments: a.documentLimit,
                priceMonthly: p ? r.formatPriceWithCurrency(a.priceYearly / 100) : r.formatPriceWithCurrency(a.priceMonthly / 100)
              },
              value: t.data.productId
            }), void 0 === m() && m(a.id)
          }), u.upgradeView({
            type: "",
            confirmed: e.value(!1),
            status_submitting: i,
            status_checkoutError_html: t.statusData.status_checkoutError_html,
            status_pageError_html: t.statusData.status_pageError_html,
            status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
            specific: e.value({type: "dl_checkout__upgrade__specific_more_documents", products: o}),
            newConditions: e.value(!1),
            switchConditions: e.value({
              type: "dl_checkout__upgrade__switch_conditions",
              currentYearly: t.data.yearly() && !t.data.isTrialPeriod(),
              currentMonthly: !t.data.yearly() && !t.data.isTrialPeriod(),
              currentMonthlyClassic: !1,
              yearlyNewPeriod: !t.data.isTrialPeriod() && t.data.yearly(),
              monthlyNewPeriod: !t.data.isTrialPeriod() && !t.data.yearly(),
              currentTrial: t.data.isTrialPeriod
            }),
            confirmations: e.value({
              type: "dl_checkout__upgrade__confirmations_product_update",
              confirmation_termsAccepted: t.data.confirmation_termsAccepted
            }),
            doConfirm: a
          }), t.data.productId(m());
          var y = function () {
            d && console.log(c, "accountLimit is ", t.data.accountLimit(), 1 == t.data.accountLimit()), u.upgradeView().newConditions({
              type: "dl_checkout__upgrade__new_conditions",
              placeholders: l(),
              yearlyNew: !1,
              yearly: t.data.yearly(),
              monthly: !t.data.yearly(),
              single: 1 == t.data.accountLimit(),
              chargedImmediately: !0
            })
          };
          t.data.productId.onValueChanged.push(function (e) {
            y(), d && console.log(c, "updating")
          }), y()
        } else if ("team" == t.data.upgradeType()) u.upgradeView({
          type: "",
          confirmed: e.value(!1),
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          status_pageError_html: t.statusData.status_pageError_html,
          status_submitting: i,
          status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
          specific: e.value({
            type: "dl_checkout__upgrade__specific_team",
            accountLimit: t.data.accountLimit,
            adjustedMinNumber: t.data.currentProductInfo().adjustedMinNumber,
            adjustedMaxNumber: t.data.currentProductInfo().adjustedMaxNumber,
            adjustedNextBulk: t.data.currentProductInfo().adjustedNextBulk,
            placeholders: l(),
            status_submitting: i
          }),
          newConditions: e.value({
            type: "dl_checkout__upgrade__new_conditions",
            placeholders: l(),
            yearlyNew: !1,
            yearly: t.data.yearly(),
            monthly: !t.data.yearly(),
            single: !1,
            chargedImmediately: !0
          }),
          switchConditions: e.value({
            type: "dl_checkout__upgrade__switch_conditions",
            currentYearly: t.data.yearly() && !t.data.isTrialPeriod(),
            currentMonthly: !t.data.yearly() && !t.data.isTrialPeriod(),
            currentMonthlyClassic: !1,
            yearlyNewPeriod: !t.data.isTrialPeriod() && t.data.yearly(),
            monthlyNewPeriod: !t.data.isTrialPeriod() && !t.data.yearly(),
            currentTrial: t.data.isTrialPeriod
          }),
          confirmations: e.value({
            type: "dl_checkout__upgrade__confirmations_product_update",
            confirmation_termsAccepted: t.data.confirmation_termsAccepted
          }),
          doConfirm: a
        }); else if ("cat" == t.data.upgradeType()) u.upgradeView({
          type: "",
          confirmed: e.value(!1),
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          status_pageError_html: t.statusData.status_pageError_html,
          status_submitting: i,
          status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
          specific: e.value({
            type: "dl_checkout__upgrade__specific_cat",
            accountLimit: t.data.accountLimit,
            adjustedMinNumber: t.data.currentProductInfo().adjustedMinNumber,
            adjustedMaxNumber: t.data.currentProductInfo().adjustedMaxNumber,
            adjustedNextBulk: t.data.currentProductInfo().adjustedNextBulk,
            placeholders: l()
          }),
          newConditions: e.value({
            type: "dl_checkout__upgrade__new_conditions",
            placeholders: l(),
            yearlyNew: !1,
            yearly: t.data.yearly(),
            monthly: !t.data.yearly(),
            single: 1 == t.data.accountLimit(),
            chargedImmediately: !0
          }),
          switchConditions: e.value({
            type: "dl_checkout__upgrade__switch_conditions",
            currentYearly: t.data.yearly() && !t.data.isTrialPeriod(),
            currentMonthly: !t.data.yearly() && !t.data.isTrialPeriod(),
            currentMonthlyClassic: !1,
            yearlyNewPeriod: !t.data.isTrialPeriod() && t.data.yearly(),
            monthlyNewPeriod: !t.data.isTrialPeriod() && !t.data.yearly(),
            currentTrial: t.data.isTrialPeriod
          }),
          confirmations: e.value({
            type: "dl_checkout__upgrade__confirmations_product_update",
            confirmation_termsAccepted: t.data.confirmation_termsAccepted
          }),
          doConfirm: a
        }); else if ("team_more" == t.data.upgradeType()) {
          var _ = t.data.accountLimit();
          t.data.accountLimit(_ + 3), t.data.originalAccountLimit = _, u.upgradeView({
            type: "",
            confirmed: e.value(!1),
            status_checkoutError_html: t.statusData.status_checkoutError_html,
            status_pageError_html: t.statusData.status_pageError_html,
            status_submitting: i,
            status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
            specific: e.value({
              type: "dl_checkout__upgrade__specific_team_more",
              numberOfUsers: t.data.accountLimit,
              originalNumberOfUsers: _,
              status_submitting: i,
              upgrade: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                return e > _
              }),
              downgrade: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                return e < _
              }),
              adjustedMinNumber: t.data.currentProductInfo().adjustedMinNumber,
              adjustedMaxNumber: t.data.currentProductInfo().adjustedMaxNumber,
              adjustedNextBulk: t.data.currentProductInfo().adjustedNextBulk,
              placeholders: {
                addedUsers: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                  return e - _
                }),
                subtractedUsers: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                  return _ - e
                }),
                minUsers: t.data.currentProductInfo().minUsers,
                maxUsers: t.data.currentProductInfo().maxUsers,
                numberUsers: t.data.currentProductInfo().adjustedNumberOfUsers
              },
              currentNumberOfUsers: _
            }),
            newConditions: e.value({
              type: "dl_checkout__upgrade__new_conditions",
              placeholders: l(),
              yearlyNew: !1,
              yearly: t.data.yearly(),
              monthly: !t.data.yearly(),
              single: !1,
              chargedImmediately: !0
            }),
            switchConditions: e.value({
              type: "dl_checkout__upgrade__switch_conditions_team_more",
              upgrade: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                return e > _ && !t.data.isTrialPeriod()
              }),
              downgrade: e.computedValue(t.data.currentProductInfo().adjustedNumberOfUsers, function (e) {
                return e < _ && !t.data.isTrialPeriod()
              }),
              trial: t.data.isTrialPeriod
            }),
            confirmations: e.value({
              type: "dl_checkout__upgrade__confirmations_product_update",
              confirmation_termsAccepted: t.data.confirmation_termsAccepted
            }),
            doConfirm: function () {
              return t.data.accountLimit() < t.data.currentProductInfo().minUsers() ? (console.log(c, "stop because not enough users"), !1) : t.data.accountLimit() > t.data.currentProductInfo().maxUsers() && !t.data.isUnlimitedUsersAllowed() ? (console.log(c, "stop because too many users"), !1) : void t.updateAccountLimit().then(function () {
                u.upgradeView().specific({type: "dl_checkout__upgrade__successful"}), u.upgradeView().newConditions(!1), u.upgradeView().switchConditions(!1), u.upgradeView().confirmations(!1), u.upgradeView().confirmed(!0), u.upgradeView().doClose = function () {
                  location.reload()
                }
              }, function (e) {
              })
            }
          })
        } else if ("new_plan_from_classic" == t.data.upgradeType()) u.upgradeView({
          type: "",
          confirmed: e.value(!1),
          status_checkoutError_html: t.statusData.status_checkoutError_html,
          status_pageError_html: t.statusData.status_pageError_html,
          status_submitting: i,
          status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
          specific: t.data.currentProductInfo().isTeam() ? e.value({
            type: "dl_checkout__upgrade__specific_new_plan_from_classic",
            single: !t.data.currentProductInfo().isTeam(),
            accountLimit: t.data.accountLimit,
            adjustedMinNumber: t.data.currentProductInfo().adjustedMinNumber,
            adjustedMaxNumber: t.data.currentProductInfo().adjustedMaxNumber,
            adjustedNextBulk: t.data.currentProductInfo().adjustedNextBulk,
            placeholders: l()
          }) : e.value(!1),
          newConditions: e.value({
            type: "dl_checkout__upgrade__new_conditions",
            placeholders: l(),
            yearlyNew: !1,
            yearly: t.data.yearly(),
            monthly: !t.data.yearly(),
            single: !t.data.currentProductInfo().isTeam(),
            chargedImmediately: !0
          }),
          switchConditions: e.value({
            type: "dl_checkout__upgrade__switch_conditions",
            currentYearly: !1,
            currentMonthly: !1,
            currentMonthlyClassic: !0,
            yearlyNewPeriod: !1,
            monthlyNewPeriod: !1,
            currentTrial: !1
          }),
          confirmations: e.value({
            type: "dl_checkout__upgrade__confirmations_new_terms",
            checkoutAsCompany: t.data.address._checkoutAsCompany,
            confirmation_termsAcceptedConsumer: t.data.confirmation_termsAcceptedConsumer,
            confirmation_termsAccepted: t.data.confirmation_termsAccepted,
            confirmation_revocationBeginningAccepted: t.data.confirmation_revocationBeginningAccepted,
            confirmation_usageRestrictionAcknowledged: t.data.confirmation_usageRestrictionAcknowledged
          }),
          doConfirm: function () {
            t.updateProductFromClassic().then(function () {
              u.upgradeView().specific({type: "dl_checkout__upgrade__successful"}), u.upgradeView().newConditions(!1), u.upgradeView().switchConditions(!1), u.upgradeView().confirmations(!1), u.upgradeView().confirmed(!0), u.upgradeView().doClose = function () {
                location.reload()
              }
            }, function (e) {
            })
          }
        }); else if ("downgrade" == t.data.upgradeType()) {
          var f = [], g = t.data.currentProductInfo().downgradesAvailable, h = t.data.yearly();
          console.log(c, "downgrades available", g);
          var v = e.value(void 0);
          Object.keys(g).forEach(function (e) {
            var a = t.getProductByCode(g[e]());
            f.push({
              type: "dl_checkout__upgrade__new_conditions_downgrade_product",
              status_checkoutError_html: t.statusData.status_checkoutError_html,
              productId: a.id,
              elementId: "newProduct" + a.id,
              single: !a.isTeam,
              placeholders: {
                numberDocuments: a.documentLimit,
                productName: n["pro-checkout/product_name." + a.code] || "",
                priceMonthly: h ? r.formatPriceWithCurrency(a.priceYearly / 100) : r.formatPriceWithCurrency(a.priceMonthly / 100)
              },
              value: t.data.productId
            }), void 0 === v() && v(a.id)
          }), u.upgradeView({
            type: "",
            confirmed: e.value(!1),
            status_checkoutError_html: t.statusData.status_checkoutError_html,
            status_pageError_html: t.statusData.status_pageError_html,
            status_fieldErrors: t.statusData.status_fieldErrors_confirmation,
            status_submitting: i,
            specific: e.value({type: "dl_checkout__upgrade__specific_downgrade", products: f}),
            newConditions: e.value(!1),
            switchConditions: e.value({
              type: "dl_checkout__upgrade__switch_conditions_downgrade",
              currentYearly: t.data.yearly() && !t.data.isTrialPeriod(),
              currentMonthly: !t.data.yearly() && !t.data.isTrialPeriod(),
              currentMonthlyClassic: !1,
              yearlyNewPeriod: !t.data.isTrialPeriod() && t.data.yearly(),
              monthlyNewPeriod: !t.data.isTrialPeriod() && !t.data.yearly(),
              currentTrial: t.data.isTrialPeriod
            }),
            confirmations: e.value({
              type: "dl_checkout__upgrade__confirmations_product_update",
              confirmation_termsAccepted: t.data.confirmation_termsAccepted
            }),
            doConfirm: function () {
              u.upgradeView().status_submitting(!0), t.updateAfterSubscribed(!1).then(function () {
                u.upgradeView().status_submitting(!1), u.upgradeView().specific({type: "dl_checkout__downgrade__successful"}), u.upgradeView().newConditions(!1), u.upgradeView().switchConditions(!1), u.upgradeView().confirmations(!1), u.upgradeView().confirmed(!0), u.upgradeView().doClose = function () {
                  location.reload()
                }
              }, function (e) {
                u.upgradeView().status_submitting(!1)
              })
            },
            confirmText: n["pro-checkout/upgrade.popup.downgrade"] || ""
          }), t.data.productId(v());
          var w = function () {
            console.log(c, "accountLimit is ", t.data.accountLimit(), 1 == t.data.accountLimit()), u.upgradeView().newConditions({
              type: "dl_checkout__upgrade__new_conditions",
              placeholders: l(),
              chargedImmediately: !1,
              yearlyNew: !1,
              yearly: t.data.yearly(),
              monthly: !t.data.yearly(),
              single: !t.data.currentProductInfo().isTeam()
            })
          };
          t.data.productId.onValueChanged.push(function (e) {
            w()
          }), w()
        }
      }, e.withValue([t.data.paymentDataCollected], function (e) {
        y()
      }), u
    })
  }, 318: function (e, t) {
    M.define("pro-AvailablePaymentTypesCalculator", ["U", "dlPageState"], function (e, t) {
      var r = "[pro-AvailablePaymentTypesCalculator]", a = t.devMode && !1;
      return {
        create: function (t, i, o, n) {
          var s = e.createValues({
            isCreditCardAllowed: void 0,
            isCreditCardAllowedForProductType: void 0,
            isCreditCardAllowedForUser: void 0,
            isCreditCardAllowedForUserExplicitly: void 0,
            isCreditCardAllowedForCountry: void 0,
            isCreditCardVisibleToUser: void 0,
            isDirectDebitAllowed: void 0,
            isDirectDebitAllowedForProductType: void 0,
            isDirectDebitAllowedForUser: void 0,
            isDirectDebitAllowedForUserExplicitly: void 0,
            isDirectDebitAllowedForCountry: void 0,
            isDirectDebitVisibleToUser: void 0,
            isInvoiceAllowed: void 0,
            isInvoiceAllowedForProductType: void 0,
            isInvoiceAllowedForUser: void 0,
            isInvoiceAllowedForUserExplicitly: void 0,
            isInvoiceAllowedForCountry: void 0,
            isInvoiceVisibleToUser: void 0
          });
          return e.withValue([i, n], function (e, t) {
            var r = t ? t.find(function (t) {
              return t.countryCode === e
            }) : void 0;
            s.isInvoiceAllowedForCountry(r && r.invoicePaymentAvailable), s.isCreditCardAllowedForCountry(r && r.creditCardPaymentAvailable), s.isDirectDebitAllowedForCountry(r && r.directDebitPaymentAvailable)
          }), e.withValue([t], function (e) {
            s.isCreditCardAllowedForProductType(e && e.creditCardPaymentAvailable()), s.isDirectDebitAllowedForProductType(e && e.directDebitPaymentAvailable()), s.isInvoiceAllowedForProductType(e && e.invoicePaymentAvailable())
          }), e.withValue([t], function (i) {
            a && console.log(r, i), i && e.withValue([s.isInvoiceAllowedForUser, s.isInvoiceAllowedForUserExplicitly, s.isInvoiceAllowedForProductType, s.isInvoiceAllowedForCountry, i.totalPriceYearly, i.invoiceMinimumYearly, o], function (e, r, a, o, n, c, d) {
              if (i !== t()) return "REMOVE";
              s.isInvoiceAllowed(d && n && n >= c && a && o && e || r)
            })
          }), e.withValue([s.isDirectDebitAllowedForUser, s.isDirectDebitAllowedForUserExplicitly, s.isDirectDebitAllowedForProductType, s.isDirectDebitAllowedForCountry], function (e, t, r, a) {
            s.isDirectDebitAllowed(e && r && a || t)
          }), e.withValue([s.isCreditCardAllowedForUser, s.isCreditCardAllowedForUserExplicitly, s.isCreditCardAllowedForProductType, s.isCreditCardAllowedForCountry], function (e, t, r, a) {
            s.isCreditCardAllowed(e && r && a || t)
          }), e.withValue([s.isCreditCardAllowedForProductType, s.isCreditCardAllowed], function (e, t) {
            s.isCreditCardVisibleToUser(e || t)
          }), e.withValue([t], function (e) {
            s.isDirectDebitVisibleToUser(!!e)
          }), e.withValue([s.isInvoiceAllowedForProductType, s.isInvoiceAllowed], function (e, t) {
            s.isInvoiceVisibleToUser(e || t)
          }), s
        }
      }
    })
  }, 360: function (e, t, r) {
    r(315), r(316), r(283), r(313), r(314), r(318)
  }
});
