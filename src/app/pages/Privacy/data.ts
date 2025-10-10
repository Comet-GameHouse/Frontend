import type { PrivacySection, DataCollectionItem } from './types';

export const privacySections: PrivacySection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: 'info-circle',
    content: [
      'At Comet GameHouse, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our gaming platform.',
      'We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, please contact us.'
    ]
  },
  {
    id: 'data-collection',
    title: 'Information We Collect',
    icon: 'database',
    content: [
      'We collect information that you provide directly to us, information we collect automatically, and information from third parties.'
    ],
    subsections: [
      {
        title: 'Personal Information',
        content: [
          'Account Information: Username, email address, password, and profile information',
          'Contact Information: Email address for communications and notifications',
          'Profile Data: Avatar, display name, and other profile customization choices'
        ]
      },
      {
        title: 'Gameplay Information',
        content: [
          'Game Statistics: Win/loss records, scores, achievements, and rankings',
          'Session Data: Game duration, features used, and in-game purchases',
          'Performance Data: Device performance metrics and connection quality'
        ]
      },
      {
        title: 'Technical Information',
        content: [
          'Device Information: IP address, browser type, operating system, and device identifiers',
          'Log Data: Access times, pages viewed, and game session information',
          'Cookies and Tracking: We use cookies and similar tracking technologies'
        ]
      }
    ]
  },
  {
    id: 'data-use',
    title: 'How We Use Your Information',
    icon: 'cogs',
    content: [
      'We use the information we collect for various business purposes described below.'
    ],
    subsections: [
      {
        title: 'Service Operation',
        content: [
          'Provide and maintain our gaming services and platform features',
          'Process transactions and send related information including purchase confirmations',
          'Create and manage your account and profile'
        ]
      },
      {
        title: 'Improvement & Personalization',
        content: [
          'Personalize your gaming experience and content recommendations',
          'Develop new games, features, and improve existing services',
          'Conduct research and analysis to enhance user experience'
        ]
      },
      {
        title: 'Communication',
        content: [
          'Send technical notices, updates, security alerts, and support messages',
          'Respond to your comments, questions, and provide customer service',
          'Send promotional communications about new features and events (with your consent)'
        ]
      }
    ]
  },
  {
    id: 'data-sharing',
    title: 'Information Sharing',
    icon: 'share-alt',
    content: [
      'We do not sell your personal information. We may share information in the following circumstances:'
    ],
    subsections: [
      {
        title: 'Service Providers',
        content: [
          'With vendors, consultants, and other service providers who need access to perform work on our behalf',
          'These providers are contractually obligated to protect your information'
        ]
      },
      {
        title: 'Legal Requirements',
        content: [
          'If required to do so by law or in response to valid requests by public authorities',
          'To protect our rights, privacy, safety, or property, and that of our users'
        ]
      },
      {
        title: 'Business Transfers',
        content: [
          'In connection with any merger, sale of company assets, financing, or acquisition',
          'You will be notified via email and/or prominent notice of any change in ownership'
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: 'shield-alt',
    content: [
      'We implement appropriate technical and organizational security measures designed to protect your information.',
      'However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.'
    ],
    subsections: [
      {
        title: 'Security Measures',
        content: [
          'Encryption of sensitive data in transit and at rest',
          'Regular security assessments and vulnerability testing',
          'Access controls and authentication mechanisms',
          'Secure data center facilities with physical protections'
        ]
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    icon: 'user-shield',
    content: [
      'Depending on your location, you may have certain rights regarding your personal information.'
    ],
    subsections: [
      {
        title: 'Access and Control',
        content: [
          'Access and receive a copy of your personal information',
          'Correct or update inaccurate or incomplete information',
          'Delete your personal information in certain circumstances',
          'Object to processing of your personal information'
        ]
      },
      {
        title: 'Communication Preferences',
        content: [
          'Opt-out of marketing and promotional communications',
          'Adjust notification settings in your account preferences',
          'Control cookie preferences through your browser settings'
        ]
      }
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    icon: 'cookie',
    content: [
      'We use cookies and similar tracking technologies to track activity on our service and hold certain information.'
    ],
    subsections: [
      {
        title: 'Types of Cookies',
        content: [
          'Essential Cookies: Required for basic site functionality and security',
          'Performance Cookies: Help us understand how visitors interact with our website',
          'Functionality Cookies: Enable enhanced functionality and personalization',
          'Advertising Cookies: Used to deliver relevant advertisements (with consent)'
        ]
      }
    ]
  },
  {
    id: 'children',
    title: "Children's Privacy",
    icon: 'child',
    content: [
      'Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13.',
      'If you are a parent or guardian and believe your child has provided us with personal information, please contact us.'
    ]
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    icon: 'sync',
    content: [
      'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
      'We will let you know via email and/or a prominent notice on our service prior to changes becoming effective.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact Us',
    icon: 'envelope',
    content: [
      'If you have any questions about this Privacy Policy, please contact us at:',
      'Email: privacy@cometgamehouse.com',
      'Address: Comet GameHouse LLC, 123 Gaming Street, Wilmington, DE 19801',
      'We will respond to your inquiry within 30 days.'
    ]
  }
];

export const dataCollectionItems: DataCollectionItem[] = [
  {
    category: 'Account Information',
    purpose: 'Create and manage your account',
    examples: ['Username', 'Email address', 'Password', 'Profile settings'],
    required: true
  },
  {
    category: 'Gameplay Data',
    purpose: 'Provide gaming services and leaderboards',
    examples: ['Scores', 'Achievements', 'Game statistics', 'Play history'],
    required: true
  },
  {
    category: 'Technical Information',
    purpose: 'Ensure platform security and performance',
    examples: ['IP address', 'Device type', 'Browser information', 'Log data'],
    required: true
  },
  {
    category: 'Communication Data',
    purpose: 'Send updates and respond to inquiries',
    examples: ['Support tickets', 'Feedback', 'Survey responses'],
    required: false
  },
  {
    category: 'Marketing Preferences',
    purpose: 'Send relevant offers and updates',
    examples: ['Newsletter subscriptions', 'Promotional preferences'],
    required: false
  }
];

export const privacyLastUpdated = 'March 15, 2024';
export const privacyEffectiveDate = 'March 15, 2024';