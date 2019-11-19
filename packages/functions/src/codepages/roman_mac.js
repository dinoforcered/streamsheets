/**
#=======================================================================
#   File name:  ROMAN.TXT
#
#   Contents:   Map (external version) from Mac OS Roman
#               character set to Unicode 2.1 and later.
#
#   Copyright:  (c) 1994-2002, 2005 by Apple Computer, Inc., all rights
#               reserved.
#
#   Contact:    charsets@apple.com
#
#   Changes:
#
#       c02  2005-Apr-05    Update header comments. Matches internal xml
#                           <c1.1> and Text Encoding Converter 2.0.
#      b4,c1 2002-Dec-19    Update URLs, notes. Matches internal
#                           utom<b5>.
#       b03  1999-Sep-22    Update contact e-mail address. Matches
#                           internal utom<b4>, ufrm<b3>, and Text
#                           Encoding Converter version 1.5.
#       b02  1998-Aug-18    Encoding changed for Mac OS 8.5; change
#                           mapping of 0xDB from CURRENCY SIGN to
#                           EURO SIGN. Matches internal utom<b3>,
#                           ufrm<b3>.
#       n08  1998-Feb-05    Minor update to header comments
#       n06  1997-Dec-14    Add warning about future changes to 0xDB
#                           from CURRENCY SIGN to EURO SIGN. Clarify
#                           some header information
#       n04  1997-Dec-01    Update to match internal utom<n3>, ufrm<n22>:
#                           Change standard mapping for 0xBD from U+2126
#                           to its canonical decomposition, U+03A9.
#       n03  1995-Apr-15    First version (after fixing some typos).
#                           Matches internal ufrm<n9>.
#
# Standard header:
# ----------------
#
#   Apple, the Apple logo, and Macintosh are trademarks of Apple
#   Computer, Inc., registered in the United States and other countries.
#   Unicode is a trademark of Unicode Inc. For the sake of brevity,
#   throughout this document, "Macintosh" can be used to refer to
#   Macintosh computers and "Unicode" can be used to refer to the
#   Unicode standard.
#
#   Apple Computer, Inc. ("Apple") makes no warranty or representation,
#   either express or implied, with respect to this document and the
#   included data, its quality, accuracy, or fitness for a particular
#   purpose. In no event will Apple be liable for direct, indirect,
#   special, incidental, or consequential damages resulting from any
#   defect or inaccuracy in this document or the included data.
#
#   These mapping tables and character lists are subject to change.
#   The latest tables should be available from the following:
#
#   <http://www.unicode.org/Public/MAPPINGS/VENDORS/APPLE/>
#
#   For general information about Mac OS encodings and these mapping
#   tables, see the file "README.TXT".
#
# Format:
# -------
#
#   Three tab-separated columns;
#   '#' begins a comment which continues to the end of the line.
#     Column #1 is the Mac OS Roman code (in hex as 0xNN)
#     Column #2 is the corresponding Unicode (in hex as 0xNNNN)
#     Column #3 is a comment containing the Unicode name
#
#   The entries are in Mac OS Roman code order.
#
#   One of these mappings requires the use of a corporate character.
#   See the file "CORPCHAR.TXT" and notes below.
#
#   Control character mappings are not shown in this table, following
#   the conventions of the standard UTC mapping tables. However, the
#   Mac OS Roman character set uses the standard control characters at
#   0x00-0x1F and 0x7F.
#
# Notes on Mac OS Roman:
# ----------------------
#
#   This is a legacy Mac OS encoding; in the Mac OS X Carbon and Cocoa
#   environments, it is only supported directly in programming
#   interfaces for QuickDraw Text, the Script Manager, and related
#   Text Utilities. For other purposes it is supported via transcoding
#   to and from Unicode.
#
#   This character set is used for at least the following Mac OS
#   localizations: U.S., British, Canadian French, French, Swiss
#   French, German, Swiss German, Italian, Swiss Italian, Dutch,
#   Swedish, Norwegian, Danish, Finnish, Spanish, Catalan,
#   Portuguese, Brazilian, and the default International system.
#
#   Variants of Mac OS Roman are used for Croatian, Icelandic,
#   Turkish, Romanian, and other encodings. Separate mapping tables
#   are available for these encodings.
#
#   Before Mac OS 8.5, code point 0xDB was CURRENCY SIGN, and was
#   mapped to U+00A4. In Mac OS 8.5 and later versions, code point
#   0xDB is changed to EURO SIGN and maps to U+20AC; the standard
#   Apple fonts are updated for Mac OS 8.5 to reflect this. There is
#   a "currency sign" variant of the Mac OS Roman encoding that still
#   maps 0xDB to U+00A4; this can be used for older fonts.
#
#   Before Mac OS 8.5, the ROM bitmap versions of the fonts Chicago,
#   New York, Geneva, and Monaco did not implement the full Mac OS
#   Roman character set; they only supported character codes up to
#   0xD8. The TrueType versions of these fonts have always implemented
#   the full character set, as with the bitmap and TrueType versions
#   of the other standard Roman fonts.
#
#   In all Mac OS encodings, fonts such as Chicago which are used
#   as "system" fonts (for menus, dialogs, etc.) have four glyphs
#   at code points 0x11-0x14 for transient use by the Menu Manager.
#   These glyphs are not intended as characters for use in normal
#   text, and the associated code points are not generally
#   interpreted as associated with these glyphs; they are usually
#   interpreted (if at all) as the control codes DC1-DC4.
#
# Unicode mapping issues and notes:
# ---------------------------------
#
#   The following corporate zone Unicode character is used in this
#   mapping:
#
#     0xF8FF  Apple logo
#
#   NOTE: The graphic image associated with the Apple logo character
#   is not authorized for use without permission of Apple, and
#   unauthorized use might constitute trademark infringement.
#
# Details of mapping changes in each version:
# -------------------------------------------
#
#   Changes from version n08 to version b02:
#
#   - Encoding changed for Mac OS 8.5; change mapping of 0xDB from
#   CURRENCY SIGN (U+00A4) to EURO SIGN (U+20AC).
#
#   Changes from version n03 to version n04:
#
#   - Change mapping of 0xBD from U+2126 to its canonical
#     decomposition, U+03A9.
#
##################
*/
module.exports = {
	0x00: 0x0000, // NULL
	0x01: 0x0001, // START OF HEADING
	0x02: 0x0002, // START OF TEXT
	0x03: 0x0003, // END OF TEXT
	0x04: 0x0004, // END OF TRANSMISSION
	0x05: 0x0005, // ENQUIRY
	0x06: 0x0006, // ACKNOWLEDGE
	0x07: 0x0007, // BELL
	0x08: 0x0008, // BACKSPACE
	0x09: 0x0009, // HORIZONTAL TABULATION
	0x0a: 0x000a, // LINE FEED
	0x0b: 0x000b, // VERTICAL TABULATION
	0x0c: 0x000c, // FORM FEED
	0x0d: 0x000d, // CARRIAGE RETURN
	0x0e: 0x000e, // SHIFT OUT
	0x0f: 0x000f, // SHIFT IN
	0x10: 0x0010, // DATA LINK ESCAPE
	0x11: 0x0011, // DEVICE CONTROL ONE
	0x12: 0x0012, // DEVICE CONTROL TWO
	0x13: 0x0013, // DEVICE CONTROL THREE
	0x14: 0x0014, // DEVICE CONTROL FOUR
	0x15: 0x0015, // NEGATIVE ACKNOWLEDGE
	0x16: 0x0016, // SYNCHRONOUS IDLE
	0x17: 0x0017, // END OF TRANSMISSION BLOCK
	0x18: 0x0018, // CANCEL
	0x19: 0x0019, // END OF MEDIUM
	0x1a: 0x001a, // SUBSTITUTE
	0x1b: 0x001b, // ESCAPE
	0x1c: 0x001c, // FILE SEPARATOR
	0x1d: 0x001d, // GROUP SEPARATOR
	0x1e: 0x001e, // RECORD SEPARATOR
	0x1f: 0x001f, // UNIT SEPARATOR
	0x20: 0x0020, // SPACE
	0x21: 0x0021, // EXCLAMATION MARK
	0x22: 0x0022, // QUOTATION MARK
	0x23: 0x0023, // NUMBER SIGN
	0x24: 0x0024, // DOLLAR SIGN
	0x25: 0x0025, // PERCENT SIGN
	0x26: 0x0026, // AMPERSAND
	0x27: 0x0027, // APOSTROPHE
	0x28: 0x0028, // LEFT PARENTHESIS
	0x29: 0x0029, // RIGHT PARENTHESIS
	0x2a: 0x002a, // ASTERISK
	0x2b: 0x002b, // PLUS SIGN
	0x2c: 0x002c, // COMMA
	0x2d: 0x002d, // HYPHEN-MINUS
	0x2e: 0x002e, // FULL STOP
	0x2f: 0x002f, // SOLIDUS
	0x30: 0x0030, // DIGIT ZERO
	0x31: 0x0031, // DIGIT ONE
	0x32: 0x0032, // DIGIT TWO
	0x33: 0x0033, // DIGIT THREE
	0x34: 0x0034, // DIGIT FOUR
	0x35: 0x0035, // DIGIT FIVE
	0x36: 0x0036, // DIGIT SIX
	0x37: 0x0037, // DIGIT SEVEN
	0x38: 0x0038, // DIGIT EIGHT
	0x39: 0x0039, // DIGIT NINE
	0x3a: 0x003a, // COLON
	0x3b: 0x003b, // SEMICOLON
	0x3c: 0x003c, // LESS-THAN SIGN
	0x3d: 0x003d, // EQUALS SIGN
	0x3e: 0x003e, // GREATER-THAN SIGN
	0x3f: 0x003f, // QUESTION MARK
	0x40: 0x0040, // COMMERCIAL AT
	0x41: 0x0041, // LATIN CAPITAL LETTER A
	0x42: 0x0042, // LATIN CAPITAL LETTER B
	0x43: 0x0043, // LATIN CAPITAL LETTER C
	0x44: 0x0044, // LATIN CAPITAL LETTER D
	0x45: 0x0045, // LATIN CAPITAL LETTER E
	0x46: 0x0046, // LATIN CAPITAL LETTER F
	0x47: 0x0047, // LATIN CAPITAL LETTER G
	0x48: 0x0048, // LATIN CAPITAL LETTER H
	0x49: 0x0049, // LATIN CAPITAL LETTER I
	0x4a: 0x004a, // LATIN CAPITAL LETTER J
	0x4b: 0x004b, // LATIN CAPITAL LETTER K
	0x4c: 0x004c, // LATIN CAPITAL LETTER L
	0x4d: 0x004d, // LATIN CAPITAL LETTER M
	0x4e: 0x004e, // LATIN CAPITAL LETTER N
	0x4f: 0x004f, // LATIN CAPITAL LETTER O
	0x50: 0x0050, // LATIN CAPITAL LETTER P
	0x51: 0x0051, // LATIN CAPITAL LETTER Q
	0x52: 0x0052, // LATIN CAPITAL LETTER R
	0x53: 0x0053, // LATIN CAPITAL LETTER S
	0x54: 0x0054, // LATIN CAPITAL LETTER T
	0x55: 0x0055, // LATIN CAPITAL LETTER U
	0x56: 0x0056, // LATIN CAPITAL LETTER V
	0x57: 0x0057, // LATIN CAPITAL LETTER W
	0x58: 0x0058, // LATIN CAPITAL LETTER X
	0x59: 0x0059, // LATIN CAPITAL LETTER Y
	0x5a: 0x005a, // LATIN CAPITAL LETTER Z
	0x5b: 0x005b, // LEFT SQUARE BRACKET
	0x5c: 0x005c, // REVERSE SOLIDUS
	0x5d: 0x005d, // RIGHT SQUARE BRACKET
	0x5e: 0x005e, // CIRCUMFLEX ACCENT
	0x5f: 0x005f, // LOW LINE
	0x60: 0x0060, // GRAVE ACCENT
	0x61: 0x0061, // LATIN SMALL LETTER A
	0x62: 0x0062, // LATIN SMALL LETTER B
	0x63: 0x0063, // LATIN SMALL LETTER C
	0x64: 0x0064, // LATIN SMALL LETTER D
	0x65: 0x0065, // LATIN SMALL LETTER E
	0x66: 0x0066, // LATIN SMALL LETTER F
	0x67: 0x0067, // LATIN SMALL LETTER G
	0x68: 0x0068, // LATIN SMALL LETTER H
	0x69: 0x0069, // LATIN SMALL LETTER I
	0x6a: 0x006a, // LATIN SMALL LETTER J
	0x6b: 0x006b, // LATIN SMALL LETTER K
	0x6c: 0x006c, // LATIN SMALL LETTER L
	0x6d: 0x006d, // LATIN SMALL LETTER M
	0x6e: 0x006e, // LATIN SMALL LETTER N
	0x6f: 0x006f, // LATIN SMALL LETTER O
	0x70: 0x0070, // LATIN SMALL LETTER P
	0x71: 0x0071, // LATIN SMALL LETTER Q
	0x72: 0x0072, // LATIN SMALL LETTER R
	0x73: 0x0073, // LATIN SMALL LETTER S
	0x74: 0x0074, // LATIN SMALL LETTER T
	0x75: 0x0075, // LATIN SMALL LETTER U
	0x76: 0x0076, // LATIN SMALL LETTER V
	0x77: 0x0077, // LATIN SMALL LETTER W
	0x78: 0x0078, // LATIN SMALL LETTER X
	0x79: 0x0079, // LATIN SMALL LETTER Y
	0x7a: 0x007a, // LATIN SMALL LETTER Z
	0x7b: 0x007b, // LEFT CURLY BRACKET
	0x7c: 0x007c, // VERTICAL LINE
	0x7d: 0x007d, // RIGHT CURLY BRACKET
	0x7e: 0x007e, // TILDE
	0x80: 0x00c4, // LATIN CAPITAL LETTER A WITH DIAERESIS
	0x81: 0x00c5, // LATIN CAPITAL LETTER A WITH RING ABOVE
	0x82: 0x00c7, // LATIN CAPITAL LETTER C WITH CEDILLA
	0x83: 0x00c9, // LATIN CAPITAL LETTER E WITH ACUTE
	0x84: 0x00d1, // LATIN CAPITAL LETTER N WITH TILDE
	0x85: 0x00d6, // LATIN CAPITAL LETTER O WITH DIAERESIS
	0x86: 0x00dc, // LATIN CAPITAL LETTER U WITH DIAERESIS
	0x87: 0x00e1, // LATIN SMALL LETTER A WITH ACUTE
	0x88: 0x00e0, // LATIN SMALL LETTER A WITH GRAVE
	0x89: 0x00e2, // LATIN SMALL LETTER A WITH CIRCUMFLEX
	0x8a: 0x00e4, // LATIN SMALL LETTER A WITH DIAERESIS
	0x8b: 0x00e3, // LATIN SMALL LETTER A WITH TILDE
	0x8c: 0x00e5, // LATIN SMALL LETTER A WITH RING ABOVE
	0x8d: 0x00e7, // LATIN SMALL LETTER C WITH CEDILLA
	0x8e: 0x00e9, // LATIN SMALL LETTER E WITH ACUTE
	0x8f: 0x00e8, // LATIN SMALL LETTER E WITH GRAVE
	0x90: 0x00ea, // LATIN SMALL LETTER E WITH CIRCUMFLEX
	0x91: 0x00eb, // LATIN SMALL LETTER E WITH DIAERESIS
	0x92: 0x00ed, // LATIN SMALL LETTER I WITH ACUTE
	0x93: 0x00ec, // LATIN SMALL LETTER I WITH GRAVE
	0x94: 0x00ee, // LATIN SMALL LETTER I WITH CIRCUMFLEX
	0x95: 0x00ef, // LATIN SMALL LETTER I WITH DIAERESIS
	0x96: 0x00f1, // LATIN SMALL LETTER N WITH TILDE
	0x97: 0x00f3, // LATIN SMALL LETTER O WITH ACUTE
	0x98: 0x00f2, // LATIN SMALL LETTER O WITH GRAVE
	0x99: 0x00f4, // LATIN SMALL LETTER O WITH CIRCUMFLEX
	0x9a: 0x00f6, // LATIN SMALL LETTER O WITH DIAERESIS
	0x9b: 0x00f5, // LATIN SMALL LETTER O WITH TILDE
	0x9c: 0x00fa, // LATIN SMALL LETTER U WITH ACUTE
	0x9d: 0x00f9, // LATIN SMALL LETTER U WITH GRAVE
	0x9e: 0x00fb, // LATIN SMALL LETTER U WITH CIRCUMFLEX
	0x9f: 0x00fc, // LATIN SMALL LETTER U WITH DIAERESIS
	0xa0: 0x2020, // DAGGER
	0xa1: 0x00b0, // DEGREE SIGN
	0xa2: 0x00a2, // CENT SIGN
	0xa3: 0x00a3, // POUND SIGN
	0xa4: 0x00a7, // SECTION SIGN
	0xa5: 0x2022, // BULLET
	0xa6: 0x00b6, // PILCROW SIGN
	0xa7: 0x00df, // LATIN SMALL LETTER SHARP S
	0xa8: 0x00ae, // REGISTERED SIGN
	0xa9: 0x00a9, // COPYRIGHT SIGN
	0xaa: 0x2122, // TRADE MARK SIGN
	0xab: 0x00b4, // ACUTE ACCENT
	0xac: 0x00a8, // DIAERESIS
	0xad: 0x2260, // NOT EQUAL TO
	0xae: 0x00c6, // LATIN CAPITAL LETTER AE
	0xaf: 0x00d8, // LATIN CAPITAL LETTER O WITH STROKE
	0xb0: 0x221e, // INFINITY
	0xb1: 0x00b1, // PLUS-MINUS SIGN
	0xb2: 0x2264, // LESS-THAN OR EQUAL TO
	0xb3: 0x2265, // GREATER-THAN OR EQUAL TO
	0xb4: 0x00a5, // YEN SIGN
	0xb5: 0x00b5, // MICRO SIGN
	0xb6: 0x2202, // PARTIAL DIFFERENTIAL
	0xb7: 0x2211, // N-ARY SUMMATION
	0xb8: 0x220f, // N-ARY PRODUCT
	0xb9: 0x03c0, // GREEK SMALL LETTER PI
	0xba: 0x222b, // INTEGRAL
	0xbb: 0x00aa, // FEMININE ORDINAL INDICATOR
	0xbc: 0x00ba, // MASCULINE ORDINAL INDICATOR
	0xbd: 0x03a9, // GREEK CAPITAL LETTER OMEGA
	0xbe: 0x00e6, // LATIN SMALL LETTER AE
	0xbf: 0x00f8, // LATIN SMALL LETTER O WITH STROKE
	0xc0: 0x00bf, // INVERTED QUESTION MARK
	0xc1: 0x00a1, // INVERTED EXCLAMATION MARK
	0xc2: 0x00ac, // NOT SIGN
	0xc3: 0x221a, // SQUARE ROOT
	0xc4: 0x0192, // LATIN SMALL LETTER F WITH HOOK
	0xc5: 0x2248, // ALMOST EQUAL TO
	0xc6: 0x2206, // INCREMENT
	0xc7: 0x00ab, // LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
	0xc8: 0x00bb, // RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
	0xc9: 0x2026, // HORIZONTAL ELLIPSIS
	0xca: 0x00a0, // NO-BREAK SPACE
	0xcb: 0x00c0, // LATIN CAPITAL LETTER A WITH GRAVE
	0xcc: 0x00c3, // LATIN CAPITAL LETTER A WITH TILDE
	0xcd: 0x00d5, // LATIN CAPITAL LETTER O WITH TILDE
	0xce: 0x0152, // LATIN CAPITAL LIGATURE OE
	0xcf: 0x0153, // LATIN SMALL LIGATURE OE
	0xd0: 0x2013, // EN DASH
	0xd1: 0x2014, // EM DASH
	0xd2: 0x201c, // LEFT DOUBLE QUOTATION MARK
	0xd3: 0x201d, // RIGHT DOUBLE QUOTATION MARK
	0xd4: 0x2018, // LEFT SINGLE QUOTATION MARK
	0xd5: 0x2019, // RIGHT SINGLE QUOTATION MARK
	0xd6: 0x00f7, // DIVISION SIGN
	0xd7: 0x25ca, // LOZENGE
	0xd8: 0x00ff, // LATIN SMALL LETTER Y WITH DIAERESIS
	0xd9: 0x0178, // LATIN CAPITAL LETTER Y WITH DIAERESIS
	0xda: 0x2044, // FRACTION SLASH
	0xdb: 0x20ac, // EURO SIGN
	0xdc: 0x2039, // SINGLE LEFT-POINTING ANGLE QUOTATION MARK
	0xdd: 0x203a, // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
	0xde: 0xfb01, // LATIN SMALL LIGATURE FI
	0xdf: 0xfb02, // LATIN SMALL LIGATURE FL
	0xe0: 0x2021, // DOUBLE DAGGER
	0xe1: 0x00b7, // MIDDLE DOT
	0xe2: 0x201a, // SINGLE LOW-9 QUOTATION MARK
	0xe3: 0x201e, // DOUBLE LOW-9 QUOTATION MARK
	0xe4: 0x2030, // PER MILLE SIGN
	0xe5: 0x00c2, // LATIN CAPITAL LETTER A WITH CIRCUMFLEX
	0xe6: 0x00ca, // LATIN CAPITAL LETTER E WITH CIRCUMFLEX
	0xe7: 0x00c1, // LATIN CAPITAL LETTER A WITH ACUTE
	0xe8: 0x00cb, // LATIN CAPITAL LETTER E WITH DIAERESIS
	0xe9: 0x00c8, // LATIN CAPITAL LETTER E WITH GRAVE
	0xea: 0x00cd, // LATIN CAPITAL LETTER I WITH ACUTE
	0xeb: 0x00ce, // LATIN CAPITAL LETTER I WITH CIRCUMFLEX
	0xec: 0x00cf, // LATIN CAPITAL LETTER I WITH DIAERESIS
	0xed: 0x00cc, // LATIN CAPITAL LETTER I WITH GRAVE
	0xee: 0x00d3, // LATIN CAPITAL LETTER O WITH ACUTE
	0xef: 0x00d4, // LATIN CAPITAL LETTER O WITH CIRCUMFLEX
	0xf0: 0xf8ff, // Apple logo
	0xf1: 0x00d2, // LATIN CAPITAL LETTER O WITH GRAVE
	0xf2: 0x00da, // LATIN CAPITAL LETTER U WITH ACUTE
	0xf3: 0x00db, // LATIN CAPITAL LETTER U WITH CIRCUMFLEX
	0xf4: 0x00d9, // LATIN CAPITAL LETTER U WITH GRAVE
	0xf5: 0x0131, // LATIN SMALL LETTER DOTLESS I
	0xf6: 0x02c6, // MODIFIER LETTER CIRCUMFLEX ACCENT
	0xf7: 0x02dc, // SMALL TILDE
	0xf8: 0x00af, // MACRON
	0xf9: 0x02d8, // BREVE
	0xfa: 0x02d9, // DOT ABOVE
	0xfb: 0x02da, // RING ABOVE
	0xfc: 0x00b8, // CEDILLA
	0xfd: 0x02dd, // DOUBLE ACUTE ACCENT
	0xfe: 0x02db, // OGONEK
	0xff: 0x02c7 // CARON
};