import { Company } from '../interfaces/company.interface';
import { Project } from '../interfaces/project.interface';

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'Cebrace',
    location: 'Jacareí, Brazil',
    imageUrl: '../../../assets/logos/cebrace.png'
  },
  {
    id: 2,
    name: 'Poliedro',
    location: 'São José dos Campos, Brazil',
    imageUrl: '../../../assets/logos/poliedro.png'
  },
  {
    id: 3,
    name: 'Multilaser',
    location: 'São Paulo, Brazil',
    imageUrl: '../../../assets/logos/multilaser.png'
  },
  {
    id: 4,
    name: 'Viasat',
    location: 'Carlsbad, USA',
    imageUrl: '../../../assets/logos/viasat.png'
  },
  {
    id: 5,
    name: 'Amor Saude',
    location: 'São Paulo, Brazil',
    imageUrl: '../../../assets/logos/amor-saude.png'
  },
  {
    id: 6,
    name: 'Xenial',
    location: 'Charlotte, USA',
    imageUrl: '../../../assets/logos/xenial.png'
  },
  {
    id: 7,
    name: 'ShuffleUp',
    location: 'Talin, Estonia',
    imageUrl: '../../../assets/logos/shuffle-up.png'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SISDOC',
    description: 'SISDOC streamlines document management by automating storage, retrieval, and sharing. It improves efficiency with features like version control, approval workflows, and integration with other systems.',
    companyId: 1
  },
  {
    id: 2,
    title: 'Descontos',
    description: 'Descontos is a competitive pricing strategy that helps Cebrace attract customers by offering discounts based on competitor pricing, enhancing customer trust and increasing sales.',
    companyId: 1
  },
  {
    id: 3,
    title: 'Ecommerce',
    description: 'Cebrace\'s Ecommerce platform provides a seamless shopping experience for glass products, featuring a detailed product catalog, secure checkout, and personalized customer support.',
    companyId: 1
  },
  {
    id: 4,
    title: 'SRO',
    description: 'SRO manages customer complaints effectively by providing a structured process for registration, investigation, and resolution, enhancing customer satisfaction and service quality.',
    companyId: 1
  },
  {
    id: 5,
    title: 'SISCOM',
    description: 'SISCOM supports business operations with features for sales management, inventory control, and supplier management, aiding informed decision-making and resource efficiency.',
    companyId: 1
  },
  {
    id: 6,
    title: 'Tarefas e Recados',
    description: 'This platform facilitates communication between students and teachers, allowing task management, feedback, and parental involvement, enhancing educational organization and efficiency.',
    companyId: 2
  },
  {
    id: 7,
    title: 'HD Virtual',
    description: 'HD Virtual offers online educational resources for students, including digital textbooks and assessments, promoting remote access, personalized learning, and cost savings.',
    companyId: 2
  },
  {
    id: 8,
    title: 'Banco de Questões',
    description: 'A question bank providing diverse practice materials for students and teachers, offering customization, automatic feedback, and performance tracking to improve learning outcomes.',
    companyId: 2
  },
  {
    id: 9,
    title: 'Itinerários Informativos',
    description: 'Guides for parents, teachers, and students that offer comprehensive information about academic success, enhancing communication, planning, and student engagement in the educational process.',
    companyId: 2
  },
  {
    id: 10,
    title: 'Multi+',
    description: 'Multilaser\'s streaming platform delivers diverse content, personalized viewing experiences, and multi-platform access, catering to varied entertainment preferences and increasing user engagement.',
    companyId: 3
  },
  {
    id: 11,
    title: 'Viasat On Tech',
    description: 'An app for Viasat technicians that optimizes service visits with features like efficient scheduling, real-time communication, and access to customer information, enhancing service quality.',
    companyId: 4
  },
  { id: 12, title: 'Project 12', description: 'Description for Project 12', companyId: 5 },
  { id: 13, title: 'Project 13', description: 'Description for Project 13', companyId: 6 },
  { id: 14, title: 'Project 14', description: 'Description for Project 14', companyId: 7 }
];
