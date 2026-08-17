import PackagePage from './PackagePage';

const DoDham = () => <PackagePage packageId="do-dham-yatra" relatedPackages={[
  { link: '/packages/char-dham-yatra', label: 'Char Dham Yatra Package' },
  { link: '/packages/kedarnath', label: 'Kedarnath Tour Package' },
  { link: '/packages/badrinath', label: 'Badrinath Tour Package' },
]} relatedGuide={{ link: '/guides/char-dham-yatra-complete-guide', label: 'Char Dham Yatra Complete Guide' }} />;

export default DoDham;
