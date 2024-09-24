import {image} from "@/utils/data/baseUrl";
import Contacts from "@/components/contacts/Contacts";


export const header = {
  menuList: {
    customMenuItems: [
      {
        index: "1",
        itemsHref: "#",
        itemsText: "Link 1"
      },
      {
        index: "2",
        itemsHref: "#",
        itemsText: "Link 2"
      }
    ]
  }
};

export const testSwiperContent = {
  images: [
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/swiper/lion.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/swiper/lion.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/swiper/hippopotamus.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/swiper/hippopotamus.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/swiper/hummingbird.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/swiper/hummingbird.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/swiper/giraffe.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/swiper/giraffe.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/swiper/elephant.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/swiper/elephant.jpg")
        }
      }
    }
  ],
  name: "arrow"
};

export const verticalSwiperContent = {
  images: [
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/elk.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/elk.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/wolf.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/wolf.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/lynx.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/lynx.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/leopard.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/leopard.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/fox.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/fox.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/vertical/bear.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/vertical/bear.jpg")
        }
      }
    }
  ],
  name: "arrow"
};

export const carouselContent = {
  lists: [
    {
      subtitle: "Города",
      text: "Го&#769;род&nbsp;&mdash; крупный населённый пункт, жители которого заняты, как правило, не&nbsp;сельским хозяйством. Имеет развитый комплекс хозяйства и&nbsp;экономики. Является скоплением архитектурных и&nbsp;инженерных сооружений, обеспечивающих жизнедеятельность постоянного и&nbsp;временного населения города.\n" +
        "\n" +
        "Исторически термин происходит от&nbsp;наличия вокруг поселения оборонительной ограды&nbsp;&mdash; вала или стены. В&nbsp;Древней Руси городом называлось всякое крупное жилое место, окружённое такой оградой. Города служили центром развития искусства и&nbsp;ремёсел, технических достижений.",
      type: "city"
    },
    {
      subtitle: "Дикая природа",
      text: "Ди&#769;кая приро&#769;да&nbsp;&mdash; экологический термин для обозначения природы в&nbsp;естественном состоянии, ненарушенной хозяйственной деятельностью человека; нетронутых человеком участков природы и&nbsp;в&nbsp;значительной степени неконтролируемых&nbsp;им, где поддерживается местное биоразнообразие, экосистемные процессы и&nbsp;имеется малоизменённая человеком неживая природа (скалы, горы, водоёмы и&nbsp;т.&nbsp;д.). На&nbsp;этих участках дикая природа воспроизводится естественным путём, поддерживая саморегуляцию за&nbsp;счёт внутренних процессов. Участок дикой природы может также в&nbsp;определённой степени выступать в&nbsp;качестве культурного ландшафта, на&nbsp;территории которого в&nbsp;течение многих лет проживает тот или иной аборигенный народ.",
      type: "wildlife"
    },
    {
      subtitle: "Горы",
      text: "Го&#769;ры&nbsp;&mdash; сильно расчленённые части суши, значительно, на&nbsp;500 метров и&nbsp;более, приподнятые над прилегающими равнинами. От&nbsp;равнин горы отделены либо напрямую подножием склона, либо предгорьями. Горы могут быть линейно вытянутыми или дугообразными с&nbsp;параллельным, решётчатым, радиальным, перистым, кулисным или ветвистым рисунком расчленения. Различают высокогорья, среднегорья и&nbsp;низкогорья.",
      type: "mountains"
    },
    {
      subtitle: "Космос",
      text: "Космос&nbsp;&mdash; понятие древнегреческой философии и&nbsp;культуры, представление о&nbsp;природном мире как о&nbsp;пластически упорядоченном гармоническом целом; миропорядок, упорядоченная Вселенная в&nbsp;противоположность хаосу.",
      type: "space"
    }
  ],
  listImages: {
    city: [
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/city-1.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/city-1.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/city-2.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/city-2.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/city-3.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/city-3.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/city-4.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/city-4.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/city-5.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/city-5.jpg")
          }
        }
      }
    ],
    wildlife: [
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/wildlife-1.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/wildlife-1.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/wildlife-2.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/wildlife-2.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/wildlife-3.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/wildlife-3.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/wildlife-4.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/wildlife-4.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/wildlife-5.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/wildlife-5.jpg")
          }
        }
      }
    ],
    mountains: [
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/mountains-1.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/mountains-1.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/mountains-2.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/mountains-2.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/mountains-3.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/mountains-3.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/mountains-4.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/mountains-4.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/mountains-5.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/mountains-5.jpg")
          }
        }
      }
    ],
    space: [
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/space-1.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/space-1.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/space-2.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/space-2.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/space-3.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/space-3.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/space-4.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/space-4.jpg")
          }
        }
      },
      {
        image: {
          sourceData: {
            sources: [
              {
                srcSet: image("swipers/carousel/space-5.webp"),
                type: "image/webp"
              }
            ]
          },
          imgAttr: {
            src: image("swipers/carousel/space-5.jpg")
          }
        }
      }
    ]
  },
  name: "arrow"
};

export const oneControlsContent = {
  lists: [
    {
      subtitle: "Города",
      text: "Го&#769;род&nbsp;&mdash; крупный населённый пункт, жители которого заняты, как правило, не&nbsp;сельским хозяйством. Имеет развитый комплекс хозяйства и&nbsp;экономики. Является скоплением архитектурных и&nbsp;инженерных сооружений, обеспечивающих жизнедеятельность постоянного и&nbsp;временного населения города.\n" +
        "\n" +
        "Исторически термин происходит от&nbsp;наличия вокруг поселения оборонительной ограды&nbsp;&mdash; вала или стены. В&nbsp;Древней Руси городом называлось всякое крупное жилое место, окружённое такой оградой. Города служили центром развития искусства и&nbsp;ремёсел, технических достижений."
    },
    {
      subtitle: "Дикая природа",
      text: "Ди&#769;кая приро&#769;да&nbsp;&mdash; экологический термин для обозначения природы в&nbsp;естественном состоянии, ненарушенной хозяйственной деятельностью человека; нетронутых человеком участков природы и&nbsp;в&nbsp;значительной степени неконтролируемых&nbsp;им, где поддерживается местное биоразнообразие, экосистемные процессы и&nbsp;имеется малоизменённая человеком неживая природа (скалы, горы, водоёмы и&nbsp;т.&nbsp;д.). На&nbsp;этих участках дикая природа воспроизводится естественным путём, поддерживая саморегуляцию за&nbsp;счёт внутренних процессов. Участок дикой природы может также в&nbsp;определённой степени выступать в&nbsp;качестве культурного ландшафта, на&nbsp;территории которого в&nbsp;течение многих лет проживает тот или иной аборигенный народ."
    },
    {
      subtitle: "Горы",
      text: "Го&#769;ры&nbsp;&mdash; сильно расчленённые части суши, значительно, на&nbsp;500 метров и&nbsp;более, приподнятые над прилегающими равнинами. От&nbsp;равнин горы отделены либо напрямую подножием склона, либо предгорьями. Горы могут быть линейно вытянутыми или дугообразными с&nbsp;параллельным, решётчатым, радиальным, перистым, кулисным или ветвистым рисунком расчленения. Различают высокогорья, среднегорья и&nbsp;низкогорья."
    },
    {
      subtitle: "Космос",
      text: "Космос&nbsp;&mdash; понятие древнегреческой философии и&nbsp;культуры, представление о&nbsp;природном мире как о&nbsp;пластически упорядоченном гармоническом целом; миропорядок, упорядоченная Вселенная в&nbsp;противоположность хаосу."
    }
  ],
  desc: "Вопрос о&nbsp;том, зачем нужна грамотность, обсуждается широко и&nbsp;пристрастно. Казалось&nbsp;бы, сегодня, когда даже компьютерная программа способна выправить не&nbsp;только орфографию, но&nbsp;и&nbsp;смысл, от&nbsp;среднестатистического россиянина не&nbsp;требуется знания бесчисленных и&nbsp;порой бессмысленных тонкостей родного правописания. Я&nbsp;уж&nbsp;не&nbsp;говорю про запятые, которым не&nbsp;повезло дважды. Сначала, в&nbsp;либеральные девяностые, их&nbsp;ставили где попало или игнорировали вовсе, утверждая, что это авторский знак.",
  images: [
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/carousel/city-1.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/carousel/city-1.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/carousel/wildlife-1.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/carousel/wildlife-1.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/carousel/mountains-1.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/carousel/mountains-1.jpg")
        }
      }
    },
    {
      image: {
        sourceData: {
          sources: [
            {
              srcSet: image("swipers/carousel/space-1.webp"),
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: image("swipers/carousel/space-1.jpg")
        }
      }
    }
  ],
  name: "arrow"
};

export const exampleContent = {
  images: [
    {
      img: `${image("swipers/vertical/bear.jpg")}`,
      subtitle: "Bear",
      alt: "Bear"
    },
    {
      img: `${image("swipers/vertical/elk.jpg")}`,
      subtitle: "Elk",
      alt: "Elk"
    },
    {
      img: `${image("swipers/vertical/fox.jpg")}`,
      subtitle: "Fox",
      alt: "Fox"
    },
    {
      img: `${image("swipers/vertical/leopard.jpg")}`,
      subtitle: "Leopard",
      alt: "Leopard"
    },
    {
      img: `${image("swipers/vertical/lynx.jpg")}`,
      subtitle: "Lynx",
      alt: "Lynx"
    },
    {
      img: `${image("swipers/vertical/wolf.jpg")}`,
      subtitle: "Wolf",
      alt: "Wolf"
    }
  ],
  name: "arrow"
};

export const loginModalContent = {
  list: [
    {
      input: {
        className: "login__input login__input_email",
        type: "email",
        name: "email",
        id: "email",
        required: true,
        multiple: false
      },
      label: {
        text: "Логин",
        attr: {
          className: "login__label login__label_email",
          htmlFor: "email"
        }
      }
    },
    {
      input: {
        className: "login__input login__input_password",
        type: "password",
        name: "password",
        id: "password",
        minLength: 4,
        maxLength: 24,
        required: true
      },
      label: {
        text: "Пароль",
        attr: {
          className: "login__label login__label_password",
          htmlFor: "password"
        }
      }
    }
  ],
  buttonText: "Войти"
};

export const userNameContent = {
  list: [
    {
      input: {
        attr: {
          className: "user__input user__input_name",
          type: "text",
          id: "name"
        },
        validates: [
          "name",
          {
            required: true,
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ]+$/,
              message: "Некорректный ввод"
            }
          }
        ]
      },
      label: {
        text: "Имя",
        attr: {
          className: "user__label user__label_name",
          htmlFor: "name"
        }
      }
    },
    {
      input: {
        attr: {
          className: "user__input user__input_surname",
          type: "text",
          id: "surname"
        },
        validates: [
          "surname",
          {
            required: true,
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ]+$/,
              message: "Некорректный ввод"
            }
          }
        ]
      },
      label: {
        text: "Фамилия",
        attr: {
          className: "user__label user__label_surname",
          htmlFor: "surname"
        }
      }
    },
    {
      input: {
        attr: {
          className: "user__input user__input_age",
          type: "number",
          id: "age"
        },
        validates: [
          "age",
          {
            min: 1,
            max: 100,
            pattern: {
              value: /^[0-9]+$/,
              message: "Некорректный ввод"
            }
          }]
      },
      label: {
        text: "Возраст",
        attr: {
          className: "user__label user__label_age",
          htmlFor: "age"
        }
      }
    }
  ],
  buttonText: "Отправить"
};

export const storeContent = {
  stepOne: [
    {
      type: "vegetables",
      input: {
        attr: {
          className: "store__input store__input_radio",
          type: "radio",
          id: "vegetables",
          name: "step-one"
        },
        validates: [
          "step-one"
        ]
      },
      label: {
        text: "Овощи",
        attr: {
          className: "store__label store__label_radio",
          htmlFor: "vegetables"
        }
      }
    },
    {
      type: "fruits",
      input: {
        attr: {
          className: "store__input store__input_radio",
          type: "radio",
          id: "fruits",
          name: "step-one"
        },
        validates: [
          "step-one"
        ]
      },
      label: {
        text: "Фрукты",
        attr: {
          className: "store__label store__label_radio",
          htmlFor: "fruits"
        }
      }
    },
    {
      type: "bakery",
      input: {
        attr: {
          className: "store__input store__input_radio",
          type: "radio",
          id: "bakery",
          name: "step-one"
        },
        validates: [
          "step-one"
        ]
      },
      label: {
        text: "Выпечка",
        attr: {
          className: "store__label store__label_radio",
          htmlFor: "bakery"
        }
      }
    },
    {
      type: "meat",
      input: {
        attr: {
          className: "store__input store__input_radio",
          type: "radio",
          id: "meat",
          name: "step-one"
        },
        validates: [
          "step-one"
        ]
      },
      label: {
        text: "Мясо",
        attr: {
          className: "store__label store__label_radio",
          htmlFor: "meat"
        }
      }
    },
    {
      type: "drinks",
      input: {
        attr: {
          className: "store__input store__input_radio",
          type: "radio",
          id: "drinks",
          name: "step-one"
        },
        validates: [
          "step-one"
        ]
      },
      label: {
        text: "Напитки",
        attr: {
          className: "store__label store__label_radio",
          htmlFor: "drinks"
        }
      }
    }
  ],
  stepTwo: {
    vegetables: [
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "cucumbers",
            name: "cucumbers"
          },
          validates: [
            "cucumbers"
          ]
        },
        label: {
          text: "Огурцы",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "cucumbers"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "tomatoes",
            name: "tomatoes"
          },
          validates: [
            "tomatoes"
          ]
        },
        label: {
          text: "Помидоры",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "tomatoes"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "carrots",
            name: "carrots"
          },
          validates: [
            "carrots"
          ]
        },
        label: {
          text: "Морковь",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "carrots"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "onions",
            name: "onions"
          },
          validates: [
            "onions"
          ]
        },
        label: {
          text: "Лук",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "onions"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "potatoes",
            name: "potatoes"
          },
          validates: [
            "potatoes"
          ]
        },
        label: {
          text: "Картофель",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "potatoes"
          }
        }
      }
    ],
    fruits: [
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "apples",
            name: "apples"
          },
          validates: [
            "apples"
          ]
        },
        label: {
          text: "Яблоки",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "apples"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "bananas",
            name: "bananas"
          },
          validates: [
            "bananas"
          ]
        },
        label: {
          text: "Банан",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "bananas"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "pears",
            name: "pears"
          },
          validates: [
            "pears"
          ]
        },
        label: {
          text: "Груши",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "pears"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "oranges",
            name: "oranges"
          },
          validates: [
            "oranges"
          ]
        },
        label: {
          text: "Апельсины",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "oranges"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "lemons",
            name: "lemons"
          },
          validates: [
            "lemons"
          ]
        },
        label: {
          text: "Лимоны",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "lemons"
          }
        }
      }
    ],
    bakery: [
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "bread",
            name: "bread"
          },
          validates: [
            "bread"
          ]
        },
        label: {
          text: "Хлеб",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "bread"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "cake",
            name: "cake"
          },
          validates: [
            "cake"
          ]
        },
        label: {
          text: "Торт",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "cake"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "pancakes",
            name: "pancakes"
          },
          validates: [
            "pancakes"
          ]
        },
        label: {
          text: "Блинчики",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "pancakes"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "cookies",
            name: "cookies"
          },
          validates: [
            "cookies"
          ]
        },
        label: {
          text: "Печенье",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "cookies"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "cupcakes",
            name: "cupcakes"
          },
          validates: [
            "cupcakes"
          ]
        },
        label: {
          text: "Кексы",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "cupcakes"
          }
        }
      }
    ],
    meat: [
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "beef",
            name: "beef"
          },
          validates: [
            "beef"
          ]
        },
        label: {
          text: "Говядина",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "beef"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "pork",
            name: "pork"
          },
          validates: [
            "pork"
          ]
        },
        label: {
          text: "Свинина",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "pork"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "chicken",
            name: "chicken"
          },
          validates: [
            "chicken"
          ]
        },
        label: {
          text: "Курица",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "chicken"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "mutton",
            name: "mutton"
          },
          validates: [
            "mutton"
          ]
        },
        label: {
          text: "Баранина",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "mutton"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "fish",
            name: "fish"
          },
          validates: [
            "fish"
          ]
        },
        label: {
          text: "Рыба",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "fish"
          }
        }
      }
    ],
    drinks: [
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "tea",
            name: "tea"
          },
          validates: [
            "tea"
          ]
        },
        label: {
          text: "Чай",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "tea"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "coffee",
            name: "coffee"
          },
          validates: [
            "coffee"
          ]
        },
        label: {
          text: "Кофе",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "coffee"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "juice",
            name: "juice"
          },
          validates: [
            "juice"
          ]
        },
        label: {
          text: "Сок",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "juice"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "lemonade",
            name: "lemonade"
          },
          validates: [
            "lemonade"
          ]
        },
        label: {
          text: "Лимонад",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "lemonade"
          }
        }
      },
      {
        input: {
          attr: {
            className: "store__input store__input_checkbox",
            type: "checkbox",
            id: "milk",
            name: "milk"
          },
          validates: [
            "milk"
          ]
        },
        label: {
          text: "Молоко",
          attr: {
            className: "store__label store__label_checkbox",
            htmlFor: "milk"
          }
        }
      }
    ]
  },
  legendStepOne: "Выберите категорию",
  legendStepTwo: "Выберите товар",
  button: "В корзину",
  legendAddress: "Куда доставить?",
  addressInput: {
    name: "address",
    attr: {
      className: "store__address",
      type: "text",
      placeholder: "ул.Пушкина, д.1, кв.1"
    },
    validates: {
      required: true,
      min: 5,
      max: 100,
      pattern: /^[\sа-яА-ЯёЁ0-9.,-]+$/,
    },
    label: "Адрес"
  }
};

export const contactsContent = {
  legendAddress: "Пользователь",
  addressInput: {
    name: "firstName",
    attr: {
      className: "store__address",
      type: "text",
      placeholder: "Александр"
    },
    validates: {
      required: true,
      pattern: {
        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
        message: "Введите корректное имя"
      },
    },
    label: "Имя"
  },
  button: "Отправить"
}
