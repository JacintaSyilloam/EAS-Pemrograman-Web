import payload from "payload";

/** @type {import('payload/types').CollectionConfig} */

const Accounts = {
  slug: 'accounts',
  admin: {
    useAsTitle: 'Account Name',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Username',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
      label: 'Institution',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        {
          label: 'Waiting',
          value: 'Waiting',
        },
        {
          label: 'Rejected',
          value: 'Rejected',
        },
        {
          label: 'Accepted',
          value: 'Accepted',
        },
      ],
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM dd, yyyy',
        },
      },
      label: 'Registration Date',
      required: true,
    },
  ],
};

export default Accounts;
