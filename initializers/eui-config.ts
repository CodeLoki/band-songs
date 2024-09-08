import type EuiConfigService from '@ember-eui/core/services/eui-config';
import type ApplicationInstance from '@ember/application/instance';

export function initialize(appInstance: ApplicationInstance) {
    const euiConfig = appInstance.lookup('service:eui-config') as EuiConfigService;

    euiConfig.setConfig({
        'euiButtonIcon.size': 's',
        'euiIcon.useSvg': true,
        euiComboBoxOptionsHeight: 33
    });
}

export default {
    initialize
};
