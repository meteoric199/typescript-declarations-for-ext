This takes JSDuck output (https://github.com/senchalabs/jsduck) and turns it into type declarations for Typescript (version 1.4+).

This is designed to be used in conjunction with fabioparra's patched Typescript compiler that emits ExtJS style classes (https://github.com/fabioparra/TypeScript). ExtJS versions 4 and 5 are supported.


Pre-generated declaration files
===============================

There is a selection of pre-generated declarations files (for ExtJS 4 and 5) in the declarations folder. Make an issue if you would like to see another one, or generate it yourself (see below).


Generating your own declaration file
====================================

The easiest way to do this is probably to modify `generate-defaults.ts` and add another entry to the `EXT_VERSIONS` array. You can then run `npm install` to run the script.


Generate Extjs 3.x declaration file
====================================

1. delete some js

    some js file have error,delete them.
    
    ```
    ext-3.0\src\adapter\core\ext-base-begin.js  
    ext-3.0\src\adapter\core\ext-base-end.js  
    ext-3.0\src\locale  
    ```

2. generate docs
    ``` cmd
        jsduck ext-3.0/src --export=full --output ext-3.0-docs
    ```
3. generate Extjs-3.x.d.ts
    
    ``` cmd
     tsc --module commonjs generator.ts && node generator.js ext/ext-3.0-docs declarations/ExtJs-3.0.d.ts
   ```