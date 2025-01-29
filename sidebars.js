module.exports = {
  mySidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'install/quickstart',
        'install/requirements',
        'install/configuration',
        'install/methods',
        'install/private_registry',
	'install/registry_mirror',
        'install/airgap',
        'install/ha',
        'install/windows_airgap',
        'install/server_roles',
        'install/packaged_components',
        'install/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Upgrades',
      items:[
        'upgrades/upgrade',
        'upgrades/manual_upgrade',
        'upgrades/automated_upgrade',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items:[
        'security/about_hardened_images',
        'security/hardening_guide',
        'security/cis_self_assessment18',
        'security/cis_self_assessment17',
        'security/cis_self_assessment124',
        'security/fips_support',
        'security/pod_security_policies',
        'security/pod_security_standards',
        'security/selinux',
        'security/secrets_encryption',
        'security/certificates',
        'security/token',
      ],
    },
    {
      type: 'category',
      label: 'Datastore',
      items: [
        'datastore/embedded',
        'datastore/external',
        'datastore/backup_restore',
      ],
    },
    'architecture',
    'cluster_access',
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/basic_network_options',
        'networking/multus_sriov',
        'networking/networking_services',
      ],
    },
    'helm',
    'advanced',
    {
      type: 'category',
      label: 'Reference',
      items:[
        {
          type: 'autogenerated',
          dirName: 'reference', // Generate sidebar slice from docs/architecture
        },
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        {
          type: 'autogenerated',
          dirName: 'release-notes',
        },
      ],
    },
    'known_issues',
  ],
};
