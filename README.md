## Deprecated repository

**This repository has been moved to a monorepo you can find in [verdaccio/monorepo](https://github.com/verdaccio/monorepo). This package is located in [`core/types` folder](https://github.com/verdaccio/monorepo/tree/master/core/types)**

---

# Typescript types for Verdaccio

Typescript definitions for verdaccio plugins and internal code

# Typescript
For usage with the library, the `tsconfig.json` should looks like this.

```
//tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "declaration": true,
    "noImplicitAny": false,
    "strict": true,
    "outDir": "lib",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "typeRoots": [
      "./node_modules/@verdaccio/types/lib/verdaccio",
      "./node_modules/@types"
    ]
  },
  "include": [
    "src/*.ts",
    "types/*.d.ts"
  ]
}
```

### Imports

```
import type {ILocalData, LocalStorage, Logger, Config} from '@verdaccio/types';

 class LocalData implements ILocalData {

  path: string;
  logger: Logger;
  data: LocalStorage;
  config: Config;
  locked: boolean;
  ...
}
```


