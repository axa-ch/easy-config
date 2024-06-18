import { FC } from 'react';
import { execSync } from 'child_process';

type Test = any;

type ReactFC = FC;

[].forEach((test) => {});

type Test2 = void | undefined;

[].reduce((acc, cur) => ({ ...acc, cur }), {});
