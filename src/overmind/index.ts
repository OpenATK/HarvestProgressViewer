import { createHook } from 'overmind-react';
import { state } from './state';
//import * as actions from './actions';
//import * as effects from './effects';
import { IConfig } from 'overmind';

export const config = {
  state,
//  actions,
//  effects,
};

export const useOvermind = createHook<typeof config>();

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
