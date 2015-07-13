# typo3-tmpl_fidmath

Include the complete TypoScript settings with

```<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl_fidmath/Configuration/TypoScript/Static/setup.txt">```

in setup, and also add the basic constants with

```<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl_fidmath/Configuration/TypoScript/Static/constants.txt">```

## For developers

Compiling Scss to CSS needs either a call to ```gulp``` in the root directory of this extension or ```./gradlew gulp_build```.
