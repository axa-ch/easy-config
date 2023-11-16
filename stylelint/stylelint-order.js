export default {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [['dollar-variables', 'declarations', 'rules'], { severity: 'warning' }],
    'order/properties-order': [
      [
        // Strong properties (for easy debugging)
        {
          order: 'strict',
          properties: ['content', 'pointer-events', 'z-index', 'order'],
        },
        // Position
        'position',
        // Position properties
        {
          order: 'flexible',
          properties: ['top', 'right', 'bottom', 'left'],
        },
        // Display
        'display',
        // Flexible layout properties
        {
          order: 'flexible',
          properties: ['align-content', 'align-items', 'align-self', 'flex', 'justify-content'],
        },
        // Basic box model properties
        {
          order: 'flexible',
          properties: ['width', 'max-width', 'min-width', 'height', 'max-height', 'min-height', 'margin', 'padding'],
        },
      ],
      {
        severity: 'warning',
      },
    ],
  },
};
