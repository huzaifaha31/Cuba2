import { Remedy } from './types';

export const APP_NAME = "Malay Medical Manuscript Exploration";

// Mock data simulating the Google Sheet content
export const REMEDIES: Remedy[] = [
  {
    id: '1',
    diseaseName: 'Demam Kepialu (Typhoid Fever)',
    category: 'Fever',
    symptoms: 'High fever, headache, weakness, and stomach pain.',
    ingredients: [
      'Daun Setawar (Costus speciosus)',
      'Akar Cerita (Andrographis paniculata)',
      'Air Tepung Tawar'
    ],
    preparationMethod: 'Grind the leaves and roots together until fine. Mix with fresh rice water (Air Tepung Tawar).',
    methodOfUse: 'Apply the mixture as a cooling paste (bedak sejuk) over the entire body, focusing on the forehead and abdomen.',
    spiritualElements: 'Recite Surah Al-Fatiha 3 times and blow gently onto the mixture before application.',
    sourceManuscript: 'MSS 1234, Kitab Tibb Pontianak',
    imageUrl: 'https://picsum.photos/id/106/800/600',
  },
  {
    id: '2',
    diseaseName: 'Kayap (Shingles)',
    category: 'Skin',
    symptoms: 'Painful rash, blisters wrapping around the torso.',
    ingredients: [
      'Daun Gelenggang (Cassia alata)',
      'Kapur Barus (Camphor)',
      'Minyak Kelapa (Coconut Oil)'
    ],
    preparationMethod: 'Pound the Daun Gelenggang until lumpy. Mix with crushed camphor and coconut oil.',
    methodOfUse: 'Rub gently onto the affected skin area twice a day, morning and evening.',
    spiritualElements: 'Mantra: "Turun bisa, naikawar, berkat doa La ilaha illallah".',
    sourceManuscript: 'MSS 2021, Kitab Obat-Obatan Melayu',
    imageUrl: 'https://picsum.photos/id/366/800/600',
  },
  {
    id: '3',
    diseaseName: 'Sakit Kepala (Migraine)',
    category: 'Internal',
    symptoms: 'Throbbing pain on one side of the head, sensitivity to light.',
    ingredients: [
      'Bunga Raya (Hibiscus)',
      'Limau Nipis (Key Lime)',
      'Air Embun (Dew Water)'
    ],
    preparationMethod: 'Crush the hibiscus flowers. Squeeze lime juice over them and leave in a bowl exposed to morning dew.',
    methodOfUse: 'Use the water to wet the head and place the crushed flowers as a poultice on the forehead.',
    spiritualElements: 'Recite Salawat upon the Prophet (PBUH) 7 times.',
    sourceManuscript: 'MSS 305, Bustan Salatin (Excerpts)',
    imageUrl: 'https://picsum.photos/id/203/800/600',
  },
  {
    id: '4',
    diseaseName: 'Batuk Kering (Dry Cough)',
    category: 'Internal',
    symptoms: 'Persistent dry cough, sore throat.',
    ingredients: [
      'Madu Lebah (Honey)',
      'Halia Bara (Red Ginger)',
      'Lada Hitam (Black Pepper)'
    ],
    preparationMethod: 'Extract juice from ginger. Mix with honey and a pinch of crushed black pepper.',
    methodOfUse: 'Drink one tablespoon slowly, three times a day.',
    sourceManuscript: 'MSS 550, Kitab Tibb',
    imageUrl: 'https://picsum.photos/id/364/800/600',
  },
  {
    id: '5',
    diseaseName: 'Gangguan Semangat (Spiritual Disturbance)',
    category: 'Spiritual',
    symptoms: 'Restlessness, bad dreams, feeling of heaviness.',
    ingredients: [
      'Limau Purut (Kaffir Lime)',
      'Garam Kasar (Coarse Salt)',
      'Air Kolah Masjid (Mosque Well Water)'
    ],
    preparationMethod: 'Cut the limes into quarters (do not sever completely). Mix salt into the water.',
    methodOfUse: 'Perform a mandi bunga (flower bath) or rinse the body with the mixture just before Maghrib prayers.',
    spiritualElements: 'Recite Ayat Al-Kursi 7 times while preparing the water.',
    imageUrl: 'https://picsum.photos/id/28/800/600',
  },
  {
    id: '6',
    diseaseName: 'Luka & Kudis (Wounds & Scabies)',
    category: 'Skin',
    symptoms: 'Open wounds or itchy scabs.',
    ingredients: [
      'Kunyit Hidup (Turmeric)',
      'Minyak Bijan (Sesame Oil)'
    ],
    preparationMethod: 'Pound the turmeric into a paste. Heat slightly with sesame oil.',
    methodOfUse: 'Apply directly to the wound while warm.',
    sourceManuscript: 'MSS 99, Warisan Obat',
    imageUrl: 'https://picsum.photos/id/514/800/600',
  }
];