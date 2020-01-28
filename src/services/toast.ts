import React, { Component } from 'react';

import { Toast } from 'native-base';

export const show = (text: string, buttonText: string, duration = 1500) => {
    Toast.show({ text, buttonText, duration });
};
