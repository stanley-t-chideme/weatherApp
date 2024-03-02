/* eslint-disable prettier/prettier */
import React from 'react';
export interface ICardInfo {
  label: string;
  value: number | string;
  metric: string;
  icon?: React.FC | any;
}
