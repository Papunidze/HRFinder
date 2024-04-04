const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const startYear = currentYear - 70;

interface YearOption {
  label: string;
  value: string;
}

const years: YearOption[] = [];

for (let year = startYear; year <= currentYear; year++) {
  years.push({ label: year.toString(), value: year.toString() });
}

export default years;

export const educationOptions = [
  { label: "ბაკალავრის ხარისხი", value: "bachelor" },
  { label: "მაგისტრის ხარისხი", value: "master" },
  { label: "დოქტორანტურა", value: "phd" },
];

export const availabilityOptions = [
  { label: "სრული განაკვეთი", value: "fullTime" },
  { label: "ნახევარ განაკვეთზე", value: "partTime" },
  { label: "დისტანციური", value: "remote" },
  { label: "ადგილზე", value: "onSite" },
];

export const experience = [
  { label: "1 წლიანი", value: "1" },
  { label: "2 წლიანი", value: "2" },
  { label: "3 წლიანი", value: "3" },
  { label: "4 წლიანი", value: "4" },
  { label: "5 წლიანი", value: "5" },
  { label: "6 წლიანი", value: "6" },
  { label: "7 წლიანი", value: "7" },
  { label: "8 წლიანი", value: "8" },
  { label: "9 წლიანი", value: "9" },
  { label: "10+ წლიანი", value: "10" },
];

export const cities = [
  { label: "თბილისი", value: "Tbilisi" },
  { label: "ქუთაისი", value: "Kutaisi" },
  { label: "ბათუმი", value: "Batumi" },
  { label: "ფოთი", value: "Poti" },
  { label: "რუსთავი", value: "Rustavi" },
  { label: "რუსთავის ავტობაზრობა", value: "Rustavi Public Transport" },
  { label: "კავკასიის ავტომარკეტი", value: "Caucasus Automobile Market" },
  { label: "დუშეთი", value: "Dusheti" },
  { label: "ჩხოროწყუ", value: "Chkhorotsku" },
  { label: "ჭიათურა", value: "Chiatura" },
  { label: "მარტვილი", value: "Martvili" },
  { label: "გურჯაანი", value: "Gurjaani" },
  { label: "ქობულეთი", value: "Kobuleti" },
  { label: "საგარეჯო", value: "Sagarejo" },
  { label: "კასპი", value: "Kaspi" },
  { label: "ბორჯომი", value: "Borjomi" },
  { label: "ახმეტა", value: "Akhmeta" },
  { label: "ზესტაფონი", value: "Zestafoni" },
  { label: "ახალციხე", value: "Akhalkalaki" },
  { label: "ლაგოდეხი", value: "Lagodekhi" },
  { label: "სოხუმი", value: "Sokhumi" },
  { label: "ოზურგეთი", value: "Ozurgeti" },
  { label: "ზუგდიდი", value: "Zugdidi" },
  { label: "თელავი", value: "Telavi" },
  { label: "ამბროლაური", value: "Ambrolauri" },
  { label: "ცხინვალი", value: "Ts'khinvali" },
  { label: "ხაშური", value: "Khachuri" },
  { label: "გორი", value: "Gori" },
  { label: "ახალქალაქი", value: "Akhaltsikhe" },
  { label: "მცხეთა", value: "Mtskheta" },
  { label: "სენაკი", value: "Senaki" },
  { label: "სიღნაღი", value: "Sighnaghi" },
  { label: "ქარელი", value: "Kareli" },
  { label: "მარნეული", value: "Marneuli" },
  { label: "გარდაბანი", value: "Gardabani" },
  { label: "სამტრედია", value: "Samtredia" },
  { label: "მესტია", value: "Mestia" },
  { label: "საჩხერე", value: "Sachkhere" },
  { label: "ხობი", value: "Khobi" },
  { label: "თიანეთი", value: "Tianeti" },
  { label: "ფოთის 'გეზ'-ი", value: "Poti Gas" },
  { label: "ბათუმის 'გეზ'-ი", value: "Batumi Gas" },
  { label: "ყვარელი", value: "Kvareli" },
  { label: "ტყიბული", value: "Tsqaltubo" },
  { label: "დედოფლისწყარო", value: "Dedoplistskaro" },
  { label: "ონი", value: "Oni" },
  { label: "ბოლნისი", value: "Bolnisi" },
  { label: "წყალტუბო", value: "Tsalka" },
  { label: "თეთრიწყარო", value: "Tetritsqaro" },
  { label: "ხარაგაული", value: "Kharagauli" },
  { label: "წალკა", value: "Tskaltubo" },
  { label: "წალენჯიხა", value: "Tsalenjikha" },
  { label: "წეროვანი", value: "Tserovani" },
  { label: "ლანჩხუთი", value: "Lanchkhuti" },
  { label: "სართიჭალა", value: "Sartichala" },
  { label: "ხონი", value: "Khoni" },
  { label: "ნინოწმინდა", value: "Ninotsminda" },
  { label: "ასპინძა", value: "Aspindza" },
  { label: "აბაშა", value: "Abasha" },
  { label: "ცაგერი", value: "Tsageri" },
  { label: "ჩაქვი", value: "Chakvi" },
  { label: "ჩოხატაური", value: "Chokhatauri" },
  { label: "თერჯოლა", value: "Terjola" },
  { label: "ლეჩხუმი", value: "Lechkhumi" },
  { label: "დმანისი", value: "Dmanisi" },
];

export const skills = [
  { label: "პროგრამირება", value: "programming" },
  { label: "ვებ განვითარება", value: "web_development" },
  { label: "მობილური აპლიკაციების დაწესება", value: "mobile_app_development" },
  { label: "მონაცემთა ანალიზი", value: "data_analysis" },
  { label: "მანქანური სწავლება", value: "machine_learning" },
  { label: "გრაფიკული დიზაინი", value: "graphic_design" },
  { label: "UI/UX დიზაინი", value: "ui_ux_design" },
  { label: "პროექტული მენეჯმენტი", value: "project_management" },
  { label: "გუნდის წარმოება", value: "team_leadership" },
  { label: "არსებითი პრობლემების გადაწყვეტა", value: "problem_solving" },
  { label: "კომუნიკაცია", value: "communication" },
  { label: "დროის მენეჯმენტი", value: "time_management" },
  { label: "მომსახურების დამცველი", value: "customer_service" },
  { label: "მარკეტინგი", value: "marketing" },
  { label: "გაყიდვა", value: "sales" },
  { label: "კონტენტის წერა", value: "content_writing" },
  { label: "SEO", value: "seo" },
  { label: "კოპირაითინგი", value: "copywriting" },
  { label: "საჯარო ლექციების მებრძენეობა", value: "public_speaking" },
  { label: "კვლევა", value: "research" },
  { label: "უფლებების მენეჯმენტი", value: "leadership" },
  { label: "ფინანსური მენეჯმენტი", value: "financial_management" },
  { label: "ბიზნესის განვითარება", value: "business_development" },
  { label: "ხელშეკრულება", value: "creative_thinking" },
  { label: "კრიტიკული ფიქრობა", value: "critical_thinking" },
  { label: "პრობლემის იდენტიფიკაცია", value: "problem_identification" },
  { label: "ნეგოცია", value: "negotiation" },
  { label: "ემპათია", value: "empathy" },
  { label: "კონფლიქტის გადაწყვეტა", value: "conflict_resolution" },
  { label: "მორგება", value: "adaptability" },
  { label: "სტრესის მენეჯმენტი", value: "stress_management" },
  { label: "უცხო ენები", value: "foreign_languages" },
  { label: "მონაცემთა ვიზუალიზაცია", value: "data_visualization" },
  { label: "მონაცემთა მართვა", value: "database_management" },
  { label: "ხარჯვების შეფასება", value: "cost_evaluation" },
  { label: "ხარჯების გამოთვლა", value: "cost_accounting" },
  {
    label: "კვალიფიკაციის უფასო შეფასება",
    value: "free_qualification_evaluation",
  },
  {
    label: "მართვის სტრატეგიების შეფასება",
    value: "evaluation_of_management_strategies",
  },
  { label: "საშუალო შეფასება", value: "average_evaluation" },
  { label: "მენეჯმენტი", value: "management" },
];
