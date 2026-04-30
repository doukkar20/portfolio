import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact'
          },
          hero: {
            architecting: 'ArchitectING',
            endToEnd: 'END-TO-END',
            solutions: 'SOLUTIONS',
            description: 'Cloud Solutions Architect, Full-Stack Web & Mobile Developer. Bridging the gap between robust infrastructure and exceptional user experiences across all platforms.'
          },
          about: {
            title: 'The Architect',
            p1: "I'm Mohamed Doukkar, a Cloud Solutions Architect, Full-Stack Web, and Mobile Developer committed to empowering organizations with scalable digital excellence. My versatility allows me to build complex solutions from the deep infrastructure layers to high-performance mobile and web interfaces.",
            p2: "Whether it's hardening a Kubernetes cluster, designing an AI-driven backend, or crafting a high-performance web application, I approach every project with a \"Solution-First\" mindset.",
            formation: 'Formation',
            alx: 'Engineering degree, Computer programming/developer',
            alxDesc: 'Intensive software engineering program focused on low-level programming, system design, and modern full-stack development.',
            cit: 'Brevet Supérieur Technologique (BTS)',
            citDesc: 'Program information and specific applications. Foundation in algorithmic thinking and database management systems.',
            viewCert: 'VIEW CERTIFICATE'
          },
          languages: {
            title: 'Spoken Languages',
            english: 'English',
            arabic: 'Arabic',
            french: 'French',
            native: 'Native / Bilingual',
            professional: 'Professional Working Proficiency'
          },
          tech: {
            title: 'Technical Stack'
          },
          projects: {
            title: 'Featured Works',
            description: 'A selection of my recent technical achievements in cloud architecture, security, and full-stack development.',
            more: 'More on GitHub',
            cathedis: {
              title: 'Cathedis Delivery Solution',
              desc: 'Contributed to the development of a high-performance logistics platform, optimizing routing and real-time tracking systems.'
            },
            abac: {
              title: 'ABAC & Security Systems',
              desc: 'Specialized in Attribute Based Access Control and Cryptographic modules (FIPS 140-2), ensuring Zero-Trust infrastructure.'
            },
            avito: {
              title: 'Avito Marketplace',
              desc: 'Performance optimization and scalable frontend architecture for Morocco\'s leading marketplace.'
            },
            godaddy: {
              title: 'GoDaddy Infrastructure',
              desc: 'Cloud infrastructure management and automation for global domain and hosting services.'
            },
            airbnb: {
              title: 'Airbnb Experiences',
              desc: 'Strategic contributions to the experiences platform, focusing on high-availability backend systems.'
            }
          },
          contact: {
            title: 'Get In Touch',
            description: "Ready to scale your next project? Let's discuss how my expertise in Cloud & Full-Stack can drive your vision forward.",
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message'
          }
        }
      },
      fr: {
        translation: {
          nav: {
            about: 'À propos',
            projects: 'Projets',
            blog: 'Blog',
            contact: 'Contact'
          },
          hero: {
            architecting: 'ARCHITECTE',
            endToEnd: 'SOLUTIONS',
            solutions: 'COMPLÈTES',
            description: 'Architecte Solutions Cloud, Développeur Web Full-Stack et Mobile. Combler le fossé entre une infrastructure robuste et des expériences utilisateur exceptionnelles sur toutes les plateformes.'
          },
          about: {
            title: "L'Architecte",
            p1: "Je suis Mohamed Doukkar, Architecte Solutions Cloud, Développeur Web Full-Stack et Mobile engagé à donner aux organisations une excellence numérique évolutive. Ma polyvalence me permet de construire des solutions complexes, des couches d'infrastructure profondes aux interfaces mobiles et web haute performance.",
            p2: "Qu'il s'agisse de sécuriser un cluster Kubernetes, de concevoir un backend piloté par l'IA ou de créer une application web performante, j'aborde chaque projet avec une mentalité \"Solution d'abord\".",
            formation: 'Formation',
            alx: 'Diplôme d\'ingénieur, Programmation/développeur informatique',
            alxDesc: 'Programme intensif de génie logiciel axé sur la programmation bas niveau, la conception de systèmes et le développement full-stack moderne.',
            cit: 'Brevet Supérieur Technologique (BTS)',
            citDesc: 'Informatique de gestion et applications spécifiques. Fondations en pensée algorithmique et systèmes de gestion de bases de données.',
            viewCert: 'VOIR LE CERTIFICAT'
          },
          languages: {
            title: 'Langues',
            english: 'Anglais',
            arabic: 'Arabe',
            french: 'Français',
            native: 'Bilingue ou langue maternelle',
            professional: 'Capacité professionnelle complète'
          },
          tech: {
            title: 'Pile Technique'
          },
          projects: {
            title: 'Travaux Marquants',
            description: 'Une sélection de mes réalisations techniques récentes en architecture cloud, sécurité et développement full-stack.',
            more: 'Plus sur GitHub',
            cathedis: {
              title: 'Solution Cathedis Loginistique',
              desc: 'Contribution au développement d\'une plateforme logistique haute performance, optimisant le routage et le suivi en temps réel.'
            },
            abac: {
              title: 'ABAC et Systèmes de Sécurité',
              desc: 'Spécialisé dans le contrôle d\'accès basé sur les attributs et les modules cryptographiques (FIPS 140-2).'
            },
            avito: {
              title: 'Marketplace Avito',
              desc: 'Optimisation des performances et architecture frontend évolutive pour le premier marketplace du Maroc.'
            },
            godaddy: {
              title: 'Infrastructure GoDaddy',
              desc: 'Gestion et automatisation de l\'infrastructure cloud pour les services mondiaux de domaines et d\'hébergement.'
            },
            airbnb: {
              title: 'Expériences Airbnb',
              desc: 'Contributions stratégiques à la plateforme d\'expériences, axées sur les systèmes backend à haute disponibilité.'
            }
          },
          contact: {
            title: 'Contactez-moi',
            description: "Prêt à faire évoluer votre prochain projet ? Discutons de la manière dont mon expertise Cloud & Full-Stack peut faire avancer votre vision.",
            name: 'Nom',
            email: 'E-mail',
            message: 'Message',
            send: 'Envoyer'
          }
        }
      },
      ar: {
        translation: {
          nav: {
            about: 'حول',
            projects: 'المشاريع',
            blog: 'المدونة',
            contact: 'اتصل'
          },
          hero: {
            architecting: 'تصميم',
            endToEnd: 'حلول',
            solutions: 'متكاملة',
            description: 'مهندس حلول سحابية، مطور ويب وتطبيقات هاتف. سد الفجوة بين البنية التحتية القوية وتجارب المستخدم الاستثنائية عبر جميع المنصات.'
          },
          about: {
            title: 'المهندس',
            p1: "أنا محمد دوكار، مهندس حلول سحابية ومطور ويب وتطبيقات هاتف، ملتزم بتمكين المؤسسات من خلال التميز الرقمي القابل للتوسع. تتيح لي مرونتي بناء حلول معقدة من طبقات البنية التحتية العميقة إلى واجهات الهاتف والويب عالية الأداء.",
            p2: "سواء كان ذلك تأمين عنقود Kubernetes، أو تصميم واجهة خلفية مدفوعة بالذكاء الاصطناعي، أو صياغة تطبيق ويب عالي الأداء، فإنني أتعامل مع كل مشروع بعقلية \"الحل أولاً\".",
            formation: 'التكوين',
            alx: 'درجة الهندسة، برمجة وتطوير الكمبيوتر',
            alxDesc: 'برنامج هندسة برمجيات مكثف يركز على البرمجة منخفضة المستوى وتصميم الأنظمة والتطوير الحديث.',
            cit: 'شهادة التقني العالي (BTS)',
            citDesc: 'برمجة المعلومات والتطبيقات المحددة. أساسيات التفكير الخوارزمي وأنظمة إدارة قواعد البيانات.',
            viewCert: 'عرض الشهادة'
          },
          languages: {
            title: 'اللغات',
            english: 'الإنجليزية',
            arabic: 'العربية',
            french: 'الفرنسية',
            native: 'اللغة الأم / ثنائي اللغة',
            professional: 'كفاءة مهنية كاملة'
          },
          tech: {
            title: 'المهارات التقنية'
          },
          projects: {
            title: 'أبرز الأعمال',
            description: 'مجموعة مختارة من إنجازاتي التقنية الأخيرة في هندسة السحاب والأمن والتطوير المتكامل.',
            more: 'المزيد على GitHub',
            cathedis: {
              title: 'حلول كاتيديس (Cathedis)',
              desc: 'المساهمة في تطوير منصة لوجستية عالية الأداء، وتحسين أنظمة التتبع والمسار في الوقت الفعلي.'
            },
            abac: {
              title: 'أنظمة الأمان و ABAC',
              desc: 'متخصص في التحكم في الوصول القائم على السمات والوحدات التشفيرية (FIPS 140-2).'
            },
            avito: {
              title: 'سوق أفيتو (Avito)',
              desc: 'تحسين الأداء وهندسة الواجهة الأمامية القابلة للتوسع لأكبر سوق في المغرب.'
            },
            godaddy: {
              title: 'بنية GoDaddy التحتية',
              desc: 'إدارة وأتمتة البنية التحتية السحابية لخدمات النطاقات والاستضافة العالمية.'
            },
            airbnb: {
              title: 'تجارب Airbnb',
              desc: 'مساهمات استراتيجية في منصة التجارب، مع التركيز على أنظمة الواجهة الخلفية عالية التوفر.'
            }
          },
          contact: {
            title: 'تواصل معي',
            description: "هل أنت مستعد لتوسيع مشروعك القادم؟ فلنناقش كيف يمكن لخبرتي في السحاب والتطوير المتكامل دفع رؤيتك للأمام.",
            name: 'الاسم',
            email: 'البريد الإلكتروني',
            message: 'الرسالة',
            send: 'إرسال الرسالة'
          }
        }
      },
      es: {
        translation: {
          nav: {
            about: 'Acerca de',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto'
          },
          hero: {
            architecting: 'ARQUITECTURA',
            endToEnd: 'DE SOLUCIONES',
            solutions: 'COMPLETAS',
            description: 'Arquitecto de Soluciones Cloud, Desarrollador Web Full-Stack y Móvil. Cerrando la brecha entre una infraestructura robusta y experiencias de usuario excepcionales en todas las plataformas.'
          },
          about: {
            title: 'El Arquitecto',
            p1: "Soy Mohamed Doukkar, Arquitecto de Soluciones Cloud, Desarrollador Web Full-Stack y Móvil comprometido con empoderar a las organizaciones con excelencia digital escalable. Mi versatilidad me permite construir soluciones complejas desde las capas profundas de infraestructura hasta interfaces móviles y web de alto rendimiento.",
            p2: "Ya sea fortaleciendo un clúster de Kubernetes, diseñando un backend impulsado por IA o creando una aplicación web de alto rendimiento, abordo cada proyecto con una mentalidad de \"Solución Primero\".",
            formation: 'Formación',
            alx: 'Grado en ingeniería, programación/desarrollador de software',
            alxDesc: 'Programa intensivo de ingeniería de software centrado en programación de bajo nivel, diseño de sistemas y desarrollo full-stack moderno.',
            cit: 'Título Superior Tecnológico (BTS)',
            citDesc: 'Información de programas y aplicaciones específicas. Fundamentos en pensamiento algorítmico y sistemas de gestión de bases de datos.',
            viewCert: 'VER CERTIFICADO'
          },
          languages: {
            title: 'Idiomas',
            english: 'Inglés',
            arabic: 'Árabe',
            french: 'Francés',
            native: 'Nativo / Bilingüe',
            professional: 'Competencia profesional completa'
          },
          tech: {
            title: 'Stack Tecnológico'
          },
          projects: {
            title: 'Trabajos Destacados',
            description: 'Una selección de mis logros técnicos recientes en arquitectura cloud, seguridad y desarrollo full-stack.',
            more: 'Más en GitHub',
            cathedis: {
              title: 'Solución Logística Cathedis',
              desc: 'Contribución al desarrollo de una plataforma logística de alto rendimiento, optimizando el seguimiento en tiempo real.'
            },
            abac: {
              title: 'Sistemas de Seguridad ABAC',
              desc: 'Especializado en Control de Acceso Basado en Atributos y módulos criptográficos (FIPS 140-2).'
            },
            avito: {
              title: 'Marketplace Avito',
              desc: 'Optimización del rendimiento y arquitectura frontend escalable para el mercado líder de Marruecos.'
            },
            godaddy: {
              title: 'Infraestructura GoDaddy',
              desc: 'Gestión y automatización de infraestructura en la nube para servicios globales de dominios y hosting.'
            },
            airbnb: {
              title: 'Experiencias Airbnb',
              desc: 'Contribuciones estratégicas a la plataforma de experiencias, enfocándose en sistemas backend de alta disponibilidad.'
            }
          },
          contact: {
            title: 'Contacto',
            description: "¿Listo para escalar tu próximo proyecto? Discutamos cómo mi experiencia en Cloud & Full-Stack puede impulsar tu visión.",
            name: 'Nombre',
            email: 'Correo',
            message: 'Mensaje',
            send: 'Enviar Mensaje'
          }
        }
      },
      zh: {
        translation: {
          nav: {
            about: '关于',
            projects: '项目',
            blog: '博客',
            contact: '联系我们'
          },
          hero: {
            architecting: '构建',
            endToEnd: '端到端',
            solutions: '解决方案',
            description: '云解决方案架构师、全栈 Web 和移动开发人员。弥合稳健基础设施与跨平台卓越用户体验之间的鸿沟。'
          },
          about: {
            title: '架构师',
            p1: "我是 Mohamed Doukkar，一名云解决方案架构师、全栈 Web 和移动开发人员，致力于为组织提供可扩展的数字化卓越体验。我的多功能性使我能够构建复杂解决方案，从深层基础设施层到高性能移动和 Web 界面。",
            p2: "无论是加固 Kubernetes 集群、设计人工智能驱动的后端，还是打造高性能 Web 应用程序，我都以“解决方案优先”的心态对待每个项目。",
            formation: '教育经历',
            alx: '工程学位，计算机编程/开发人员',
            alxDesc: '密集的软件工程课程，专注于低级编程、系统设计和现代全栈开发。',
            cit: '高等技术证书 (BTS)',
            citDesc: '程序信息和特定应用。算法思维和数据库管理系统基础。',
            viewCert: '查看证书'
          },
          languages: {
            title: '语言能力',
            english: '英语',
            arabic: '阿拉伯语',
            french: '法语',
            native: '母语 / 双语',
            professional: '专业工作能力'
          },
          tech: {
            title: '技术栈'
          },
          projects: {
            title: '精选作品',
            description: '我在云架构、安全和全栈开发方面的近期技术成就选集。',
            more: '更多在 GitHub',
            cathedis: {
              title: 'Cathedis 物流解决方案',
              desc: '参与高性能物流平台的开发，优化实时路线和跟踪系统。'
            },
            abac: {
              title: 'ABAC 与安全系统',
              desc: '专注于基于属性的访问控制（ABAC）和加密模块（FIPS 140-2）。'
            },
            avito: {
              title: 'Avito 市场平台',
              desc: '为摩洛哥领先的市场平台优化性能和可扩展的前端架构。'
            },
            godaddy: {
              title: 'GoDaddy 基础设施',
              desc: '为全球域名和托管服务提供云基础设施管理和自动化。'
            },
            airbnb: {
              title: 'Airbnb 体验',
              desc: '对体验平台的战略贡献，专注于高可用性后端系统。'
            }
          },
          contact: {
            title: '取得联系',
            description: "准备好扩展您的下一个项目了吗？让我们讨论一下我的云和全栈专业知识如何推动您的愿景。",
            name: '姓名',
            email: '电子邮件',
            message: '信息',
            send: '发送信息'
          }
        }
      }
    }
  });

export default i18n;
