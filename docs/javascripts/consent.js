var consent = __md_get("__consent")

// consent: {custom: true}
console.log('consent:', consent)

if (consent && consent.custom) {
    /* The user accepted the cookie */
    console.log('The user accepted the cookie.')
}