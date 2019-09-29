import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DiagnoseService {

  constructor() { }
}

export const issueData = {
    "11": {
        "symptomList": [
            "headache",
            "pain in the limbs",
            "cough",
            "chest pain",
            "shortness of breath",
            "burning in the throat",
            "reduced appetite",
            "sputum",
            "swollen glands on the neck",
            "chills",
            "cough with sputum",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Flu",
            "Accuracy": 71.99999,
            "Icd": "J10;J11",
            "ID": 11,
            "IcdName": "Influenza due to other identified influenza virus;Influenza, virus not identified",
            "Ranking": 2,
            "ProfName": "Influenza"
        }
    },
    "12": {
        "symptomList": [
            "going black before the eyes",
            "dizziness",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Atrial fibrillation and flutter",
            "Ranking": 8,
            "ProfName": "Atrial fibrillation",
            "Name": "Irregular heart rhythm in atria",
            "Accuracy": 45,
            "Icd": "I48",
            "ID": 12
        }
    },
    "14": {
        "symptomList": [
            "cough",
            "chest pain",
            "shortness of breath",
            "wheezing",
            "chest tightness",
            "sputum",
            "night cough",
            "fast, deepened breathing",
            "agitation"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "Name": "Inflammatory disease of the airways",
            "Accuracy": 13.500001,
            "Icd": "J45",
            "ID": 14,
            "IcdName": "Asthma",
            "Ranking": 7,
            "ProfName": "Bronchial asthma"
        }
    },
    "15": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "wheezing",
            "eye redness",
            "lip swelling",
            "nausea",
            "going black before the eyes",
            "burning eyes",
            "feeling of foreign body in the eye",
            "skin rash",
            "night cough",
            "cheek swelling",
            "leg swelling",
            "facial swelling",
            "arm swelling",
            "tongue burning",
            "agitation",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Allergy",
            "Name": "Hypersensitivity reaction",
            "Accuracy": 26.9819984,
            "Icd": "T78.4",
            "ID": 15,
            "IcdName": "Allergy, unspecified",
            "Ranking": 11
        }
    },
    "16": {
        "symptomList": [
            "headache",
            "nosebleed"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Hypertension",
            "Name": "High blood pressure",
            "Accuracy": 27,
            "Icd": "I10;I11;I12;I13;I15",
            "ID": 16,
            "IcdName": "Essential (primary) hypertension;Hypertensive heart disease;Hypertensive renal disease;Hypertensive heart and renal disease;Secondary hypertension",
            "Ranking": 2
        }
    },
    "17": {
        "symptomList": [
            "weight loss",
            "increased urine quantity",
            "increased thirst",
            "nausea",
            "frequent urination",
            "non-healing skin wound",
            "vision impairment",
            "difficult defecation",
            "less than 3 defecations per week",
            "cold feet",
            "underweight",
            "disorientation regarding time or place",
            "problems with the sense of touch in the feet",
            "leg ulcer",
            "fast, deepened breathing",
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Diabetes mellitus",
            "Name": "Diabetes",
            "Accuracy": 20.2499981,
            "Icd": "E10;E11;E12;E13;E14",
            "ID": 17,
            "IcdName": "Type 1 diabetes mellitus;Type 2 diabetes mellitus;Malnutrition-related diabetes mellitus;Other specified diabetes mellitus;Unspecified diabetes mellitus",
            "Ranking": 8
        }
    },
    "18": {
        "symptomList": [
            "cough",
            "chest pain",
            "burning in the throat",
            "early satiety",
            "mouth pain",
            "stomach burning",
            "dry mouth",
            "tongue burning"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Reflux disease",
            "Accuracy": 28.125,
            "Icd": "K21",
            "ID": 18,
            "IcdName": "Gastro-oesophageal reflux disease",
            "Ranking": 6,
            "ProfName": "Gastroesophageal reflux disease"
        }
    },
    "19": {
        "symptomList": [
            "cough",
            "blackhead",
            "nausea",
            "sputum",
            "cough with sputum",
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Smoking",
            "Accuracy": 67.5,
            "Icd": "F17;Z72.0",
            "ID": 19,
            "IcdName": "Mental and behavioural disorders due to use of tobacco;Tobacco use",
            "Ranking": 2,
            "ProfName": "Tobacco consumption"
        }
    },
    "20": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "bloated feeling in the stomach",
            "diarrhea",
            "reduced appetite",
            "difficult defecation",
            "incomplete defecation",
            "less than 3 defecations per week"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Spastic colon",
            "Accuracy": 16.875,
            "Icd": "K58",
            "ID": 20,
            "IcdName": "Irritable bowel syndrome",
            "Ranking": 6,
            "ProfName": "Irritable bowel syndrome"
        }
    },
    "26": {
        "symptomList": [
            "skin lesion",
            "skin redness",
            "changes in the nails",
            "skin rash",
            "crusting",
            "dry skin",
            "discoloration of nails",
            "bold area among hair on the head",
            "flaking skin on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Condition causing overproduction of skin cells",
            "Accuracy": 26.9999981,
            "Icd": "L40",
            "ID": 26,
            "IcdName": "Psoriasis",
            "Ranking": 3,
            "ProfName": "Psoriasis"
        }
    },
    "27": {
        "symptomList": [
            "blackhead",
            "skin nodules",
            "skin lesion",
            "wound",
            "scar"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Acne",
            "Accuracy": 90,
            "Icd": "L70.0",
            "ID": 27,
            "IcdName": "Acne vulgaris",
            "Ranking": 1,
            "ProfName": "Acne vulgaris"
        }
    },
    "29": {
        "symptomList": [
            "non-healing skin wound",
            "irregular mole",
            "blue spot on skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 29,
            "IcdName": "Disorder of skin and subcutaneous tissue, unspecified",
            "Ranking": 19,
            "ProfName": "Suspicious lesion of skin",
            "Name": "Suspicious change of skin",
            "Accuracy": 9.449999,
            "Icd": "L98.9"
        }
    },
    "30": {
        "symptomList": [
            "headache",
            "eye redness",
            "visual field loss",
            "vision impairment",
            "blurred vision"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "Icd": "H40;H42*",
            "ID": 30,
            "IcdName": "Glaucoma;Glaucoma in diseases classified elsewhere",
            "Ranking": 2,
            "ProfName": "Glaucoma",
            "Name": "Green cataract",
            "Accuracy": 75
        }
    },
    "31": {
        "symptomList": [
            "vision impairment",
            "sensitivity to glare",
            "double vision",
            "blurred vision"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 31,
            "IcdName": "Senile cataract;Other cataract;Cataract and other disorders of lens in diseases classified elsewhere;Congenital cataract",
            "Ranking": 3,
            "ProfName": "Cataract",
            "Name": "Clouding of the eye lens",
            "Accuracy": 75,
            "Icd": "H25;H26;H28;Q12.0"
        }
    },
    "32": {
        "symptomList": [
            "eye redness",
            "vision impairment",
            "burning eyes",
            "feeling of foreign body in the eye",
            "blurred vision",
            "dry eyes"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 32,
            "IcdName": "Keratitis and keratoconjunctivitis in other diseases classified elsewhere",
            "Ranking": 1,
            "ProfName": "Keratoconjunctivitis sicca",
            "Name": "Dry eye",
            "Accuracy": 90,
            "Icd": "H19.3"
        }
    },
    "36": {
        "symptomList": [
            "ringing in the ear"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ProfName": "Tinnitus",
            "Name": "Ringing in the ears",
            "Accuracy": 54,
            "Icd": "H93.1",
            "ID": 36,
            "IcdName": "Tinnitus",
            "Ranking": 2
        }
    },
    "37": {
        "symptomList": [
            "headache",
            "feeling of pressure in the ear",
            "earache",
            "swollen glands on the neck",
            "face pain",
            "facial paralysis"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Icd": "H65;H66;H67",
            "ID": 37,
            "IcdName": "Nonsuppurative otitis media;Suppurative and unspecified otitis media;Otitis media in diseases classified elsewhere",
            "Ranking": 4,
            "ProfName": "Otitis media",
            "Name": "Middle ear infection",
            "Accuracy": 28.079998
        }
    },
    "38": {
        "symptomList": [
            "feeling of pressure in the ear",
            "earache"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 38,
            "IcdName": "Otitis externa",
            "Ranking": 2,
            "ProfName": "Otitis externa",
            "Name": "Inflammation of the external ear canal",
            "Accuracy": 69.23077,
            "Icd": "H60"
        }
    },
    "39": {
        "symptomList": [
            "ringing in the ear",
            "feeling of pressure in the ear",
            "earache"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 39,
            "IcdName": "Impacted cerumen",
            "Ranking": 5,
            "ProfName": "Impacted cerumen",
            "Name": "Earwax blockage",
            "Accuracy": 41.53846,
            "Icd": "H61.2"
        }
    },
    "40": {
        "symptomList": [
            "nosebleed"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "IcdName": "Epistaxis",
            "Ranking": 1,
            "ProfName": "Epistaxis",
            "Name": "Nosebleed",
            "Accuracy": 90,
            "Icd": "R04.0",
            "ID": 40
        }
    },
    "41": {
        "symptomList": [
            "headache",
            "cough",
            "nosebleed",
            "sputum",
            "feeling of pressure in the ear",
            "face pain",
            "cough with sputum"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Icd": "J01;J32",
            "ID": 41,
            "IcdName": "Acute sinusitis;Chronic sinusitis",
            "Ranking": 7,
            "ProfName": "Sinusitis",
            "Name": "Inflammation of paranasal sinuses",
            "Accuracy": 9.066667
        }
    },
    "43": {
        "symptomList": [
            "mouth ulcers",
            "mouth pain",
            "dry mouth",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 71,
                "Name": "Dentistry",
                "ID": 43
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Aphthous stomatitis",
            "Name": "Small sore in mouth",
            "Accuracy": 90,
            "Icd": "K12.0",
            "ID": 43,
            "IcdName": "Recurrent oral aphthae",
            "Ranking": 1
        }
    },
    "44": {
        "symptomList": [
            "headache",
            "cough",
            "burning in the throat",
            "earache",
            "mouth pain",
            "swollen glands on the neck"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ProfName": "Nasopharyngitis",
            "Name": "Inflammation of the nose and throat",
            "Accuracy": 37.5,
            "Icd": "J02;J31.2",
            "ID": 44,
            "IcdName": "Acute pharyngitis;Chronic pharyngitis",
            "Ranking": 3
        }
    },
    "47": {
        "symptomList": [
            "weight loss",
            "weight gain",
            "cravings",
            "difficulty to concentrate",
            "reduced appetite",
            "sensitivity to cold",
            "mood swings",
            "nervousness",
            "underweight",
            "difficulty with movement",
            "forgetfulness",
            "increased appetite",
            "anxiety",
            "aggressiveness",
            "sadness",
            "hallucination"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Name": "Depression",
            "Accuracy": 54.0000038,
            "Icd": "F31;F32;F33;F34",
            "ID": 47,
            "IcdName": "Bipolar affective disorder;Depressive episode;Recurrent depressive disorder;Persistent mood [affective] disorders",
            "Ranking": 2,
            "ProfName": "Major depressive disorder"
        }
    },
    "48": {
        "symptomList": [
            "weight loss",
            "sensitivity to cold",
            "menstruation disorder",
            "underweight",
            "missed period"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ID": 48,
            "IcdName": "Anorexia nervosa;Atypical anorexia nervosa",
            "Ranking": 2,
            "ProfName": "Anorexia nervosa",
            "Name": "Anorexia",
            "Accuracy": 89.28571,
            "Icd": "F50.0;F50.1"
        }
    },
    "49": {
        "symptomList": [
            "cravings",
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ID": 49,
            "IcdName": "Bulimia nervosa",
            "Ranking": 11,
            "ProfName": "Bulimia nervosa",
            "Name": "Bulimia",
            "Accuracy": 9.9,
            "Icd": "F50.2"
        }
    },
    "51": {
        "symptomList": [
            "abdominal pain",
            "diarrhea",
            "rebound tenderness",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Loose watery stools",
            "Accuracy": 14.4,
            "Icd": "A09;K59.1;K52.9",
            "ID": 51,
            "IcdName": "Other gastroenteritis and colitis of infectious and unspecified origin;Functional diarrhoea;Noninfective gastroenteritis and colitis, unspecified",
            "Ranking": 12,
            "ProfName": "Diarrhea"
        }
    },
    "52": {
        "symptomList": [
            "abdominal pain",
            "weight loss",
            "bloated feeling in the stomach",
            "diarrhea",
            "fatty defecation",
            "foul smelling defecation",
            "underweight"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "K90.0",
            "ID": 52,
            "IcdName": "Coeliac disease",
            "Ranking": 5,
            "ProfName": "Celiac disease",
            "Name": "Gluten intolerance",
            "Accuracy": 65.8125
        }
    },
    "53": {
        "symptomList": [
            "abdominal pain",
            "weight gain",
            "difficult defecation",
            "incomplete defecation",
            "less than 3 defecations per week",
            "early satiety",
            "flatulence",
            "side pain",
            "distended abdomen",
            "itching of the anus"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 53,
            "IcdName": "Constipation",
            "Ranking": 2,
            "ProfName": "Constipation",
            "Name": "Problems with defecation",
            "Accuracy": 10.7999992,
            "Icd": "K59.0"
        }
    },
    "54": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "yellow colored skin",
            "yellowish discoloration of the white part of the eye",
            "dark urine"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 54,
            "IcdName": "Inflammatory liver disease, unspecified",
            "Ranking": 7,
            "ProfName": "Hepatitis",
            "Name": "Inflammation of the liver",
            "Accuracy": 35.6756744,
            "Icd": "K75.9"
        }
    },
    "55": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "fatty defecation",
            "yellow colored skin",
            "yellowish discoloration of the white part of the eye",
            "dark urine"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "K80",
            "ID": 55,
            "IcdName": "Cholelithiasis",
            "Ranking": 6,
            "ProfName": "Cholelithiasis",
            "Name": "Gall stones",
            "Accuracy": 43.783783
        }
    },
    "57": {
        "symptomList": [
            "going black before the eyes",
            "night cough",
            "dizziness",
            "feeling faint",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Aortic (valve) stenosis;Rheumatic aortic stenosis;Congenital stenosis of aortic valve",
            "Ranking": 7,
            "ProfName": "Aortic stenosis",
            "Name": "Narrowing of the aortic valve",
            "Accuracy": 21.42857,
            "Icd": "I35.0;I06.0;Q23.0",
            "ID": 57
        }
    },
    "58": {
        "symptomList": [
            "night cough"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Mitral valve insufficiency",
            "Name": "Mitral regurgitation",
            "Accuracy": 58.5,
            "Icd": "I05.1;I34.0;Q23.3",
            "ID": 58,
            "IcdName": "Rheumatic mitral insufficiency;Mitral (valve) insufficiency;Congenital mitral insufficiency",
            "Ranking": 4
        }
    },
    "60": {
        "symptomList": [
            "weight gain",
            "difficulty to concentrate",
            "reduced appetite",
            "sensitivity to cold",
            "difficult defecation",
            "less than 3 defecations per week",
            "mood swings",
            "menstruation disorder",
            "missed period",
            "dry skin",
            "hair loss",
            "moist and softened skin",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Lack of supply of thyroid hormones",
            "Accuracy": 42,
            "Icd": "E03.9",
            "ID": 60,
            "IcdName": "Hypothyroidism, unspecified",
            "Ranking": 4,
            "ProfName": "Hypothyroidism"
        }
    },
    "61": {
        "symptomList": [
            "weight loss",
            "mood swings",
            "nervousness",
            "increased appetite",
            "cold sweats",
            "hot flushes",
            "hair loss"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Thyrotoxicosis [hyperthyroidism]",
            "Ranking": 4,
            "ProfName": "Hyperthyroidism",
            "Name": "Overproduction of thyroid hormones",
            "Accuracy": 18,
            "Icd": "E05",
            "ID": 61
        }
    },
    "62": {
        "symptomList": [
            "back pain",
            "pain in the bones",
            "bone fracture"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 62,
            "IcdName": "Osteoporosis with pathological fracture;Osteoporosis without pathological fracture;Osteoporosis in diseases classified elsewhere",
            "Ranking": 14,
            "ProfName": "Osteoporosis",
            "Name": "Thinning bones",
            "Accuracy": 50.4,
            "Icd": "M80;M81;M82"
        }
    },
    "63": {
        "symptomList": [
            "joint swelling",
            "finger deformity",
            "toe deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Gout",
            "Accuracy": 22.68,
            "Icd": "M10",
            "ID": 63,
            "IcdName": "Gout",
            "Ranking": 3,
            "ProfName": "Hyperuricemia"
        }
    },
    "64": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "chest tightness",
            "sputum",
            "changes in the nails",
            "fast, deepened breathing",
            "cough with sputum"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "ID": 64,
            "IcdName": "Bronchitis, not specified as acute or chronic;Simple and mucopurulent chronic bronchitis;Unspecified chronic bronchitis;Emphysema;Other chronic obstructive pulmonary disease",
            "Ranking": 3,
            "ProfName": "Chronic obstructive pulmonary disease",
            "Name": "Chronic obstructive lung disease",
            "Accuracy": 77,
            "Icd": "J40;J41;J42;J43;J44"
        }
    },
    "65": {
        "symptomList": [
            "difficulty to concentrate",
            "reduced appetite",
            "sleepiness with spontaneous falling asleep"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 65,
            "IcdName": "Sleep apnoea;Primary sleep apnoea of newborn",
            "Ranking": 1,
            "ProfName": "Sleep apnea syndrome",
            "Name": "Sleep apnea",
            "Accuracy": 90,
            "Icd": "G47.3;P28.3"
        }
    },
    "66": {
        "symptomList": [
            "forgetfulness",
            "difficulty in finding words",
            "disorientation regarding time or place",
            "memory gap",
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 74,
                "Name": "Geriatric medicine",
                "ID": 17
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Alzheimer type dementia",
            "Accuracy": 11.57625,
            "Icd": "G30;F00*",
            "ID": 66,
            "IcdName": "Alzheimer disease;Dementia in Alzheimer disease",
            "Ranking": 10,
            "ProfName": "Alzheimer's disease"
        }
    },
    "67": {
        "symptomList": [
            "headache",
            "nausea",
            "going black before the eyes",
            "visual field loss",
            "sensitivity to noise",
            "problems with the sense of touch in the face",
            "oversensitivity to light",
            "dizziness",
            "face pain",
            "facial paralysis",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Sick headache",
            "Accuracy": 13.4999981,
            "Icd": "G43",
            "ID": 67,
            "IcdName": "Migraine",
            "Ranking": 13,
            "ProfName": "Migraine"
        }
    },
    "76": {
        "symptomList": [
            "hand swelling",
            "hand pain",
            "limited mobility of the leg",
            "arm swelling",
            "morning stiffness",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 76,
            "IcdName": "Pyogenic arthritis;Direct infections of joint in infectious and parasitic diseases classified elsewhere;Reactive arthropathies;Postinfective and reactive arthropathies in diseases classified elsewhere;Seropositive rheumatoid arthritis;Other rheumatoid arthritis;Psoriatic and enteropathic arthropathies;Juvenile arthritis;Juvenile arthritis in diseases classified elsewhere;Gout;Other crystal arthropathies;Other specific arthropathies;Other arthritis;Arthropathies in other diseases classified elsewhere",
            "Ranking": 3,
            "ProfName": "Arthritis",
            "Name": "Inflammation to the joints",
            "Accuracy": 33.7499962,
            "Icd": "M00;M01*;M02;M03*;M05;M06;M07*;M08;M09*;M10;M11;M12;M13;M14*"
        }
    },
    "79": {
        "symptomList": [
            "skin redness",
            "skin rash"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Lyme disease",
            "Accuracy": 12,
            "Icd": "A69.2",
            "ID": 79,
            "IcdName": "Lyme disease",
            "Ranking": 19,
            "ProfName": "Lyme borreliosis"
        }
    },
    "80": {
        "symptomList": [
            "headache",
            "pain in the limbs",
            "cough",
            "burning in the throat",
            "sputum",
            "swollen glands on the neck",
            "cough with sputum"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Cold",
            "Accuracy": 13.333333,
            "Icd": "J00",
            "ID": 80,
            "IcdName": "Acute nasopharyngitis [common cold]",
            "Ranking": 5,
            "ProfName": "Common cold"
        }
    },
    "81": {
        "symptomList": [
            "itching of skin",
            "skin lesion",
            "formation of blisters on a skin area",
            "earache",
            "skin rash",
            "crusting",
            "wound",
            "scar"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "B01",
            "ID": 81,
            "IcdName": "Varicella [chickenpox]",
            "Ranking": 4,
            "ProfName": "Varicella zoster virus infection",
            "Name": "Chickenpox",
            "Accuracy": 11.25
        }
    },
    "82": {
        "symptomList": [
            "skin lesion",
            "formation of blisters on a skin area",
            "mouth ulcers",
            "skin rash",
            "crusting",
            "mouth pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "A60;B00;G05.1;P35.2",
            "ID": 82,
            "IcdName": "Anogenital herpesviral [herpes simplex] infection;Herpesviral [herpes simplex] infections;Encephalitis, myelitis and encephalomyelitis in viral diseases classified elsewhere;Congenital herpesviral [herpes simplex] infection",
            "Ranking": 3,
            "ProfName": "Herpes simplex",
            "Name": "Herpes",
            "Accuracy": 72
        }
    },
    "83": {
        "symptomList": [
            "headache",
            "nausea",
            "disorientation regarding time or place"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 28,
                "Name": "Infectiology",
                "ID": 23
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Bacterial meningitis, not elsewhere classified;Meningitis in bacterial diseases classified elsewhere;Meningitis in other infectious and parasitic diseases classified elsewhere;Meningitis due to other and unspecified causes",
            "Ranking": 13,
            "ProfName": "Meningitis",
            "Name": "Inflammation of the brain covering membranes",
            "Accuracy": 9.771428,
            "Icd": "G00;G01;G02;G03",
            "ID": 83
        }
    },
    "84": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "diarrhea",
            "lower abdominal pain",
            "blood in stool"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 84,
            "IcdName": "Salmonella enteritis;Viral and other specified intestinal infections;Other gastroenteritis and colitis of infectious and unspecified origin;Influenza with other manifestations, other influenza virus identified;Influenza with other manifestations, virus not identified;Other noninfective gastroenteritis and colitis",
            "Ranking": 7,
            "ProfName": "Gastroenteritis",
            "Name": "Stomach flu",
            "Accuracy": 24,
            "Icd": "A02.0;A08;A09;J10.8;J11.8;K52"
        }
    },
    "86": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "chest tightness",
            "going black before the eyes",
            "cold sweats",
            "feeling faint",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "I20;I21;I22;I23;I24;I25",
            "ID": 86,
            "IcdName": "Angina pectoris;Acute myocardial infarction;Subsequent myocardial infarction;Certain current complications following acute myocardial infarction;Other acute ischaemic heart diseases;Chronic ischaemic heart disease",
            "Ranking": 5,
            "ProfName": "Coronary artery disease",
            "Name": "Coronary heart disease",
            "Accuracy": 47.9999962
        }
    },
    "87": {
        "symptomList": [
            "chest pain",
            "chest tightness",
            "going black before the eyes",
            "cold sweats",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Heart attack",
            "Accuracy": 9,
            "Icd": "I21;I22",
            "ID": 87,
            "IcdName": "Acute myocardial infarction;Subsequent myocardial infarction",
            "Ranking": 14,
            "ProfName": "Myocardial infarction"
        }
    },
    "88": {
        "symptomList": [
            "going black before the eyes",
            "visual field loss",
            "double vision",
            "difficulty in swallowing",
            "difficulty in speaking",
            "difficulty with movement",
            "disorientation regarding time or place",
            "muscular weakness in the arm",
            "limited mobility of the leg",
            "dizziness",
            "facial paralysis",
            "muscular weakness in the leg",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 88,
            "IcdName": "Intracerebral haemorrhage;Other nontraumatic intracranial haemorrhage;Cerebral infarction;Stroke, not specified as haemorrhage or infarction",
            "Ranking": 4,
            "ProfName": "Cerebrovascular accident",
            "Name": "Stroke",
            "Accuracy": 59.9999962,
            "Icd": "I61;I62;I63;I64"
        }
    },
    "91": {
        "symptomList": [
            "feeling of tension in the legs",
            "leg cramps",
            "ankle swelling",
            "leg swelling",
            "marked veins"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "Name": "Enlarged and twisted veins",
            "Accuracy": 90,
            "Icd": "I83",
            "ID": 91,
            "IcdName": "Varicose veins of lower extremities",
            "Ranking": 1,
            "ProfName": "Varicose veins"
        }
    },
    "92": {
        "symptomList": [
            "pain in the calves",
            "feeling of tension in the legs",
            "leg swelling",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Phlebitis and thrombophlebitis of other deep vessels of lower extremities",
            "Ranking": 7,
            "ProfName": "Deep vein thrombosis",
            "Name": "Clot in a vein",
            "Accuracy": 13.4999981,
            "Icd": "I80.2",
            "ID": 92
        }
    },
    "93": {
        "symptomList": [
            "headache",
            "shortness of breath",
            "hair loss",
            "dizziness",
            "cold hands",
            "brittleness of nails",
            "tongue burning",
            "agitation"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 93,
            "IcdName": "Iron deficiency anaemia;Vitamin B12 deficiency anaemia;Folate deficiency anaemia;Other nutritional anaemias;Anaemia due to enzyme disorders;Thalassaemia;Sickle-cell disorders;Other hereditary haemolytic anaemias;Acquired pure red cell aplasia [erythroblastopenia];Other aplastic anaemias;Acute posthaemorrhagic anaemia;Anaemia in chronic diseases classified elsewhere;Other anaemias",
            "Ranking": 9,
            "ProfName": "Anemia",
            "Name": "Lack of blood",
            "Accuracy": 9,
            "Icd": "D50;D51;D52;D53;D55;D56;D57;D58;D59;D60;D61;D62;D63*;D64"
        }
    },
    "94": {
        "symptomList": [
            "going black before the eyes",
            "cramps",
            "fast, deepened breathing",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Name": "Hyperventilation",
            "Accuracy": 54,
            "Icd": "R06.4",
            "ID": 94,
            "IcdName": "Hyperventilation",
            "Ranking": 2,
            "ProfName": "Hyperventilation syndrome"
        }
    },
    "95": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "diarrhea",
            "foul smelling defecation",
            "flatulence"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "E73",
            "ID": 95,
            "IcdName": "Lactose intolerance",
            "Ranking": 5,
            "ProfName": "Lactose intolerance",
            "Name": "Lactase deficiency",
            "Accuracy": 15.75
        }
    },
    "96": {
        "symptomList": [
            "pain in the limbs",
            "pain in the bones",
            "bone fracture"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Lack of vitamin D",
            "Accuracy": 18,
            "Icd": "E55",
            "ID": 96,
            "IcdName": "Vitamin D deficiency",
            "Ranking": 17,
            "ProfName": "Vitamin D deficiency"
        }
    },
    "97": {
        "symptomList": [
            "shortness of breath",
            "difficulty with movement",
            "flatulence",
            "overweight"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 97,
            "IcdName": "Obesity",
            "Ranking": 1,
            "ProfName": "Obesity",
            "Name": "Excessive overweight",
            "Accuracy": 90,
            "Icd": "E66"
        }
    },
    "99": {
        "symptomList": [
            "frequent urination",
            "urge to urinate",
            "dribbling after urination",
            "decreased urine stream",
            "feeling of residual urine",
            "delayed start to urination"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ProfName": "Benign prostatic hyperplasia",
            "Name": "Benign prostate enlargement",
            "Accuracy": 90,
            "Icd": "N40",
            "ID": 99,
            "IcdName": "Hyperplasia of prostate",
            "Ranking": 1
        }
    },
    "100": {
        "symptomList": [
            "itching of skin",
            "skin redness",
            "skin rash",
            "dry skin",
            "flaking skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 100,
            "IcdName": "Xerosis cutis",
            "Ranking": 1,
            "ProfName": "Xerosis cutis",
            "Name": "Dry skin",
            "Accuracy": 90,
            "Icd": "L85.3"
        }
    },
    "102": {
        "symptomList": [
            "back pain",
            "limited mobility of the back",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 102,
            "IcdName": "Dorsalgia",
            "Ranking": 2,
            "ProfName": "Dorsalgia",
            "Name": "Back pain",
            "Accuracy": 45,
            "Icd": "M54"
        }
    },
    "103": {
        "symptomList": [
            "pain radiating to the leg",
            "back pain",
            "limited mobility of the back",
            "muscular weakness in the arm",
            "limited mobility of the leg",
            "numbness of the hands",
            "muscular weakness in the leg",
            "numbness in the leg",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Slipped disc",
            "Accuracy": 19.2,
            "Icd": "M51.2",
            "ID": 103,
            "IcdName": "Other specified intervertebral disc displacement",
            "Ranking": 4,
            "ProfName": "Spinal disc herniation"
        }
    },
    "104": {
        "symptomList": [
            "headache",
            "nausea",
            "difficulty to concentrate"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Other headache syndromes;Headache",
            "Ranking": 4,
            "ProfName": "Cephalalgia",
            "Name": "Headache",
            "Accuracy": 30.6122456,
            "Icd": "G44;R51",
            "ID": 104
        }
    },
    "105": {
        "symptomList": [
            "skin rash"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Measles",
            "Accuracy": 14.85,
            "Icd": "B05",
            "ID": 105,
            "IcdName": "Measles",
            "Ranking": 16,
            "ProfName": "Morbilli"
        }
    },
    "106": {
        "symptomList": [
            "earache",
            "mouth pain",
            "cheek swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Mumps",
            "Ranking": 1,
            "ProfName": "Mumps",
            "Name": "Inflammation of the parotid gland",
            "Accuracy": 90,
            "Icd": "B26",
            "ID": 106
        }
    },
    "107": {
        "symptomList": [
            "skin rash"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "German measles",
            "Accuracy": 15,
            "Icd": "B06",
            "ID": 107,
            "IcdName": "Rubella [German measles]",
            "Ranking": 15,
            "ProfName": "Rubella"
        }
    },
    "108": {
        "symptomList": [
            "cramps",
            "lockjaw"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Lockjaw",
            "Accuracy": 9,
            "Icd": "A33;A34;A35",
            "ID": 108,
            "IcdName": "Tetanus neonatorum;Obstetrical tetanus;Other tetanus",
            "Ranking": 6,
            "ProfName": "Tetanus"
        }
    },
    "109": {
        "symptomList": [
            "pain in the limbs",
            "swollen glands on the neck",
            "swollen glands in the groin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Infectious mononucleosis",
            "Ranking": 2,
            "ProfName": "Infectious mononucleosis",
            "Name": "Kissing disease",
            "Accuracy": 72,
            "Icd": "B27",
            "ID": 109
        }
    },
    "110": {
        "symptomList": [
            "skin rash",
            "swollen glands in the groin"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Congenital syphilis;Early syphilis;Late syphilis;Other and unspecified syphilis",
            "Ranking": 3,
            "ProfName": "Lues venerea in men",
            "Name": "Syphilis",
            "Accuracy": 22.5,
            "Icd": "A50;A51;A52;A53",
            "ID": 110
        }
    },
    "113": {
        "symptomList": [
            "abdominal pain",
            "cough",
            "chest pain",
            "shortness of breath",
            "sputum",
            "fast, deepened breathing",
            "chills",
            "cough with sputum",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "IcdName": "Viral pneumonia, not elsewhere classified;Pneumonia due to Streptococcus pneumoniae;Pneumonia due to Haemophilus influenzae;Bacterial pneumonia, not elsewhere classified;Pneumonia due to other infectious organisms, not elsewhere classified;Pneumonia in diseases classified elsewhere;Pneumonia, organism unspecified;Congenital pneumonia",
            "Ranking": 1,
            "ProfName": "Pneumonia",
            "Name": "Acute inflammation of lung",
            "Accuracy": 90,
            "Icd": "J12;J13;J14;J15;J16;J17;J18;P23",
            "ID": 113
        }
    },
    "114": {
        "symptomList": [
            "abdominal pain",
            "chest pain",
            "nausea",
            "burning in the throat",
            "reduced appetite",
            "black stools",
            "tongue burning"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Inflammation of the stomach",
            "Accuracy": 33.75,
            "Icd": "K29.0;K29.1;K29.2;K29.3;K29.4;K29.5;K29.6;K29.7",
            "ID": 114,
            "IcdName": "Acute haemorrhagic gastritis;Other acute gastritis;Alcoholic gastritis;Chronic superficial gastritis;Chronic atrophic gastritis;Chronic gastritis, unspecified;Other gastritis;Gastritis, unspecified",
            "Ranking": 5,
            "ProfName": "Gastritis"
        }
    },
    "116": {
        "symptomList": [
            "hand pain",
            "arm swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Tennis elbow",
            "Accuracy": 18,
            "Icd": "M77.1",
            "ID": 116,
            "IcdName": "Lateral epicondylitis",
            "Ranking": 8,
            "ProfName": "Lateral epicondylitis"
        }
    },
    "118": {
        "symptomList": [
            "abdominal pain",
            "early satiety",
            "stomach burning",
            "black stools",
            "rebound tenderness"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Stomach ulcer",
            "Accuracy": 18,
            "Icd": "K25;K26;K27",
            "ID": 118,
            "IcdName": "Gastric ulcer;Duodenal ulcer;Peptic ulcer, site unspecified",
            "Ranking": 5,
            "ProfName": "Peptic ulcer disease"
        }
    },
    "119": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "reduced appetite",
            "fatty defecation",
            "back pain",
            "side pain",
            "rebound tenderness",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Inflammation of the pancreas",
            "Accuracy": 10.7999992,
            "Icd": "K85;K86.0;K86.1",
            "ID": 119,
            "IcdName": "Acute pancreatitis;Alcohol-induced chronic pancreatitis;Other chronic pancreatitis",
            "Ranking": 9,
            "ProfName": "Pancreatitis"
        }
    },
    "121": {
        "symptomList": [
            "dark urine",
            "side pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            }
        ],
        "details": {
            "ID": 121,
            "IcdName": "Unspecified nephritic syndrome",
            "Ranking": 7,
            "ProfName": "Glomerulonephritis in men",
            "Name": "Kidney inflammation",
            "Accuracy": 18,
            "Icd": "N05"
        }
    },
    "122": {
        "symptomList": [
            "feeling of tension in the legs",
            "hand swelling",
            "increased touch sensitivity",
            "leg swelling",
            "marked veins"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 122,
            "IcdName": "Phlebitis and thrombophlebitis",
            "Ranking": 3,
            "ProfName": "Phlebitis",
            "Name": "Inflammation of veins",
            "Accuracy": 51.42857,
            "Icd": "I80"
        }
    },
    "124": {
        "symptomList": [
            "skin redness",
            "hand pain",
            "leg swelling",
            "swollen glands in the groin",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 124,
            "IcdName": "Erysipelas",
            "Ranking": 2,
            "ProfName": "Erysipelas",
            "Name": "Superficial form of cellulitis",
            "Accuracy": 72,
            "Icd": "A46"
        }
    },
    "125": {
        "symptomList": [
            "skin lesion",
            "skin redness",
            "changes in the nails",
            "hand swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "Name": "Inflammation of the nail skin",
            "Accuracy": 90,
            "Icd": "L03.0",
            "ID": 125,
            "IcdName": "Cellulitis of finger and toe",
            "Ranking": 2,
            "ProfName": "Paronychia"
        }
    },
    "126": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "lower abdominal pain",
            "abdominal guarding",
            "rebound tenderness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "IcdName": "Acute appendicitis;Other appendicitis;Unspecified appendicitis",
            "Ranking": 1,
            "ProfName": "Appendicitis",
            "Name": "Inflammation of the appendix",
            "Accuracy": 90,
            "Icd": "K35;K36;K37",
            "ID": 126
        }
    },
    "127": {
        "symptomList": [
            "difficult defecation",
            "less than 3 defecations per week",
            "painful defecation",
            "blood in stool",
            "itching of the anus"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 127,
            "IcdName": "Acute anal fissure;Chronic anal fissure;Anal fissure, unspecified",
            "Ranking": 3,
            "ProfName": "Anal fissure",
            "Name": "Tear in the skin of anus",
            "Accuracy": 9,
            "Icd": "K60.0;K60.1;K60.2"
        }
    },
    "128": {
        "symptomList": [
            "difficult defecation",
            "less than 3 defecations per week",
            "painful defecation",
            "blood in stool",
            "itching of the anus"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 128,
            "IcdName": "Haemorrhoids and perianal venous thrombosis",
            "Ranking": 1,
            "ProfName": "Hemorrhoids",
            "Name": "Blood vessel expansion around anus",
            "Accuracy": 90,
            "Icd": "K64"
        }
    },
    "130": {
        "symptomList": [
            "abdominal pain",
            "bulging abdominal wall",
            "distended abdomen"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 130,
            "IcdName": "Inguinal hernia;Femoral hernia;Umbilical hernia;Ventral hernia;Diaphragmatic hernia;Other abdominal hernia;Unspecified abdominal hernia",
            "Ranking": 6,
            "ProfName": "Abdominal wall hernia",
            "Name": "Abdominal hernia",
            "Accuracy": 9.45,
            "Icd": "K40;K41;K42;K43;K44;K45;K46"
        }
    },
    "131": {
        "symptomList": [
            "ankle swelling",
            "joint swelling",
            "limited mobility of the leg",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ProfName": "Septic arthritis",
            "Name": "Joint infection",
            "Accuracy": 90,
            "Icd": "M00;M01;M02;M03",
            "ID": 131,
            "IcdName": "Pyogenic arthritis;Direct infections of joint in infectious and parasitic diseases classified elsewhere;Reactive arthropathies;Postinfective and reactive arthropathies in diseases classified elsewhere",
            "Ranking": 1
        }
    },
    "132": {
        "symptomList": [
            "limited mobility of the leg",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 132,
            "IcdName": "Fracture of femur",
            "Ranking": 6,
            "ProfName": "Fracture of the femoral neck",
            "Name": "Femoral neck fracture",
            "Accuracy": 18.4499989,
            "Icd": "S72"
        }
    },
    "134": {
        "symptomList": [
            "joint instability",
            "blue spot on skin",
            "foot pain",
            "limited mobility of the ankle",
            "ankle deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "Name": "Ankle injury",
            "Accuracy": 90,
            "Icd": "S93.4",
            "ID": 134,
            "IcdName": "Sprain and strain of ankle",
            "Ranking": 1,
            "ProfName": "Ankle joint injury"
        }
    },
    "135": {
        "symptomList": [
            "muscular weakness in the arm",
            "hand pain",
            "numbness of the hands",
            "muscular atrophy of the arm"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 20,
                "Name": "Hand surgery",
                "ID": 20
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 135,
            "IcdName": "Carpal tunnel syndrome",
            "Ranking": 1,
            "ProfName": "Carpal tunnel syndrome",
            "Name": "Nerve compression in the wrist",
            "Accuracy": 90,
            "Icd": "G56.0"
        }
    },
    "136": {
        "symptomList": [
            "earache",
            "swollen glands on the neck",
            "lockjaw"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 136,
            "IcdName": "Acute tonsillitis;Chronic tonsillitis",
            "Ranking": 2,
            "ProfName": "Tonsillitis",
            "Name": "Inflammation of the tonsils",
            "Accuracy": 54,
            "Icd": "J03;J35.0"
        }
    },
    "137": {
        "symptomList": [
            "ringing in the ear",
            "feeling of pressure in the ear"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Name": "Sudden hearing loss",
            "Accuracy": 51.9230766,
            "Icd": "H91.2;H90;H91",
            "ID": 137,
            "IcdName": "Sudden idiopathic hearing loss;Conductive and sensorineural hearing loss;Other hearing loss",
            "Ranking": 5,
            "ProfName": "Idiopathic hearing loss"
        }
    },
    "138": {
        "symptomList": [
            "nausea",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Name": "Positional vertigo",
            "Accuracy": 90,
            "Icd": "H81.1",
            "ID": 138,
            "IcdName": "Benign paroxysmal vertigo",
            "Ranking": 1,
            "ProfName": "Benign paroxysmal positional vertigo"
        }
    },
    "139": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "eye lid swelling",
            "eye lids sticking together",
            "loss of eye lashes",
            "eye pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "IcdName": "Blepharitis",
            "Ranking": 3,
            "ProfName": "Blepharitis",
            "Name": "Eyelid inflammation",
            "Accuracy": 40.9090919,
            "Icd": "H01.0",
            "ID": 139
        }
    },
    "140": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "feeling of foreign body in the eye",
            "oversensitivity to light",
            "eye lids sticking together"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 140,
            "IcdName": "Conjunctivitis",
            "Ranking": 1,
            "ProfName": "Conjunctivitis",
            "Name": "Pink eye",
            "Accuracy": 90,
            "Icd": "H10"
        }
    },
    "142": {
        "symptomList": [
            "vision impairment",
            "blurred vision",
            "vision impairment for far objects"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 142,
            "IcdName": "Myopia;Degenerative myopia",
            "Ranking": 1,
            "ProfName": "Myopia",
            "Name": "Short-sightedness",
            "Accuracy": 90,
            "Icd": "H52.1;H44.2"
        }
    },
    "143": {
        "symptomList": [
            "vision impairment",
            "blurred vision",
            "vision impairment for near objects"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ProfName": "Hyperopia",
            "Name": "Far-sightedness",
            "Accuracy": 90,
            "Icd": "H52.0",
            "ID": 143,
            "IcdName": "Hypermetropia",
            "Ranking": 1
        }
    },
    "144": {
        "symptomList": [
            "itching of skin",
            "skin redness",
            "changes in the nails",
            "skin rash",
            "mouth pain",
            "dry skin",
            "flaking skin",
            "discoloration of nails",
            "bold area among hair on the head",
            "flaking skin on the head",
            "dry mouth",
            "brittleness of nails"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 144,
            "IcdName": "Dermatophytosis;Other superficial mycoses;Candidiasis;Coccidioidomycosis;Histoplasmosis;Blastomycosis;Paracoccidioidomycosis;Sporotrichosis;Chromomycosis and phaeomycotic abscess;Aspergillosis;Cryptococcosis;Zygomycosis;Mycetoma;Other mycoses, not elsewhere classified;Unspecified mycosis",
            "Ranking": 1,
            "ProfName": "Mycosis",
            "Name": "Fungal infection",
            "Accuracy": 89.99999,
            "Icd": "B35;B36;B37;B38;B39;B40;B41;B42;B43;B44;B45;B46;B47;B48;B49"
        }
    },
    "145": {
        "symptomList": [
            "itching of skin",
            "skin wheal",
            "lip swelling",
            "skin rash",
            "eye lid swelling",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "L50",
            "ID": 145,
            "IcdName": "Urticaria",
            "Ranking": 2,
            "ProfName": "Urticaria",
            "Name": "Hives",
            "Accuracy": 30.0200138
        }
    },
    "146": {
        "symptomList": [
            "itching of skin",
            "skin rash",
            "dry skin",
            "hardening of the skin",
            "flaking skin",
            "skin thickening",
            "coarsening of the skin structure"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Atopic dermatitis",
            "Ranking": 1,
            "ProfName": "Neurodermatitis",
            "Name": "Recurring itchy inflammation of the skin",
            "Accuracy": 90,
            "Icd": "L20",
            "ID": 146
        }
    },
    "147": {
        "symptomList": [
            "headache",
            "nausea",
            "nervousness",
            "oversensitivity to light"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Icd": "G44.0",
            "ID": 147,
            "IcdName": "Cluster headache syndrome",
            "Ranking": 4,
            "ProfName": "Bing's erythroprosopalgia",
            "Name": "Cluster headache",
            "Accuracy": 11.249999
        }
    },
    "148": {
        "symptomList": [
            "earache",
            "face pain",
            "increased touch sensitivity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Trigeminal neuralgia",
            "Ranking": 2,
            "ProfName": "Trigeminal neuralgia",
            "Name": "Facial neuralgia",
            "Accuracy": 28.8,
            "Icd": "G50.0",
            "ID": 148
        }
    },
    "149": {
        "symptomList": [
            "headache",
            "nausea",
            "going black before the eyes",
            "double vision",
            "disorientation regarding time or place",
            "memory gap",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 149,
            "IcdName": "Concussion",
            "Ranking": 15,
            "ProfName": "Mild traumatic brain injury",
            "Name": "Concussion",
            "Accuracy": 9,
            "Icd": "S06.0"
        }
    },
    "150": {
        "symptomList": [
            "pain in the limbs",
            "muscular weakness in the arm",
            "hand pain",
            "numbness of the hands",
            "muscular atrophy of the arm"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Simultaneous malfunction of peripheral nerves",
            "Accuracy": 90,
            "Icd": "G60;G61;G62;G63;G64",
            "ID": 150,
            "IcdName": "Hereditary and idiopathic neuropathy;Inflammatory polyneuropathy;Other polyneuropathies;Polyneuropathy in diseases classified elsewhere;Other disorders of peripheral nervous system",
            "Ranking": 2,
            "ProfName": "Polyneuropathy"
        }
    },
    "153": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "wheezing",
            "sputum",
            "fast, deepened breathing",
            "cough with sputum",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "ProfName": "Acute bronchitis",
            "Name": "Inflammation of the bronchi",
            "Accuracy": 37.5,
            "Icd": "J20;J21",
            "ID": 153,
            "IcdName": "Acute bronchitis;Acute bronchiolitis with bronchospasm ",
            "Ranking": 3
        }
    },
    "155": {
        "symptomList": [
            "visual field loss",
            "vision impairment"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "IcdName": "Retinal detachments and breaks",
            "Ranking": 7,
            "ProfName": "Retinal detachment",
            "Name": "Detached retina",
            "Accuracy": 18.75,
            "Icd": "H33",
            "ID": 155
        }
    },
    "164": {
        "symptomList": [
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "E78",
            "ID": 164,
            "IcdName": "Disorders of lipoprotein metabolism and other lipidaemias",
            "Ranking": 9,
            "ProfName": "Dyslipidemia",
            "Name": "Disorders of lipid metabolism",
            "Accuracy": 13.248
        }
    },
    "165": {
        "symptomList": [
            "hardening of the skin",
            "bulging abdominal wall",
            "skin thickening"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Fatty tumor",
            "Accuracy": 21.6,
            "Icd": "D17",
            "ID": 165,
            "IcdName": "Benign lipomatous neoplasm",
            "Ranking": 6,
            "ProfName": "Lipoma"
        }
    },
    "167": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "chest tightness",
            "going black before the eyes",
            "fast, deepened breathing",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "ID": 167,
            "IcdName": "Pulmonary embolism",
            "Ranking": 16,
            "ProfName": "Pulmonary embolism",
            "Name": "Obstruction of a pulmonary artery",
            "Accuracy": 9,
            "Icd": "I26"
        }
    },
    "168": {
        "symptomList": [
            "forgetfulness",
            "disorientation regarding time or place"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 74,
                "Name": "Geriatric medicine",
                "ID": 17
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 168,
            "IcdName": "Dementia in Alzheimer disease (G30.-†);Vascular dementia;Dementia in other diseases classified elsewhere;Unspecified dementia",
            "Ranking": 4,
            "ProfName": "Dementia",
            "Name": "Senility",
            "Accuracy": 70.71428,
            "Icd": "F00*;F01;F02*;F03"
        }
    },
    "171": {
        "symptomList": [
            "pain in the calves",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "IcdName": "Injury of Achilles tendon",
            "Ranking": 3,
            "ProfName": "Achilles tendon rupture",
            "Name": "Achilles tendon tear",
            "Accuracy": 27,
            "Icd": "S86.0",
            "ID": 171
        }
    },
    "174": {
        "symptomList": [
            "itching of skin",
            "skin wheal",
            "skin redness",
            "skin rash",
            "crusting",
            "dry skin",
            "flaking skin",
            "flaking skin on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Contact dermatitis",
            "Name": "Contact eczema",
            "Accuracy": 22.5,
            "Icd": "L23;L24;L25",
            "ID": 174,
            "IcdName": "Allergic contact dermatitis;Irritant contact dermatitis;Unspecified contact dermatitis",
            "Ranking": 4
        }
    },
    "175": {
        "symptomList": [
            "vision impairment"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 175,
            "IcdName": "Subjective visual disturbances",
            "Ranking": 8,
            "ProfName": "Amaurosis fugax",
            "Name": "Sudden loss of vision",
            "Accuracy": 12.749999,
            "Icd": "H53.1"
        }
    },
    "176": {
        "symptomList": [
            "muscular weakness in the arm",
            "muscular atrophy of the arm",
            "muscular atrophy in the leg",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ProfName": "Amyotrophic lateral sclerosis",
            "Name": "Disease of the motor neurons",
            "Accuracy": 9,
            "Icd": "G12.2",
            "ID": 176,
            "IcdName": "Motor neuron disease",
            "Ranking": 8
        }
    },
    "178": {
        "symptomList": [
            "painful defecation",
            "blood in stool"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 178,
            "IcdName": "Anal fistula",
            "Ranking": 4,
            "ProfName": "Anal fistula",
            "Name": "Inflammation in the anal region",
            "Accuracy": 60,
            "Icd": "K60.3"
        }
    },
    "180": {
        "symptomList": [
            "skin wheal",
            "lip swelling",
            "cheek swelling",
            "eye lid swelling",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 180,
            "IcdName": "Angioneurotic oedema;Defects in the complement system",
            "Ranking": 3,
            "ProfName": "Angioedema",
            "Name": "Rapid swelling of the skin",
            "Accuracy": 24.0160122,
            "Icd": "T78.3;D84.1"
        }
    },
    "181": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "chest tightness",
            "nervousness",
            "hot flushes",
            "fast, deepened breathing",
            "dizziness",
            "memory gap",
            "anxiety",
            "sadness",
            "agitation",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Name": "Excessive feeling of fear",
            "Accuracy": 85.5,
            "Icd": "F40;F41",
            "ID": 181,
            "IcdName": "Phobic anxiety disorders;Other anxiety disorders",
            "Ranking": 2,
            "ProfName": "Anxiety disorder"
        }
    },
    "182": {
        "symptomList": [
            "chest pain",
            "dizziness",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Aneurysm of the main artery",
            "Accuracy": 25.7142849,
            "Icd": "I71",
            "ID": 182,
            "IcdName": "Aortic aneurysm and dissection",
            "Ranking": 6,
            "ProfName": "Aortic aneurysm"
        }
    },
    "183": {
        "symptomList": [
            "chest pain",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 183,
            "IcdName": "Dissection of aorta [any part]",
            "Ranking": 8,
            "ProfName": "Aortic dissection",
            "Name": "Dissection of the aorta",
            "Accuracy": 21.42857,
            "Icd": "I71.0"
        }
    },
    "189": {
        "symptomList": [
            "non-healing skin wound",
            "cold feet",
            "pain in the calves",
            "leg ulcer",
            "leg cramps",
            "stress-related leg pain",
            "hand pain",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 189,
            "IcdName": "Peripheral vascular disease, unspecified",
            "Ranking": 10,
            "ProfName": "Peripheral artery occlusive disease",
            "Name": "Peripheral artery disease",
            "Accuracy": 9.428571,
            "Icd": "I73.9"
        }
    },
    "192": {
        "symptomList": [
            "back pain",
            "stress-related leg pain",
            "hand pain",
            "joint swelling",
            "limited mobility of the leg",
            "morning stiffness",
            "limited mobility of the ankle",
            "finger deformity",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Arthrosis",
            "Accuracy": 36,
            "Icd": "M15;M16;M17;M18;M19;M47",
            "ID": 192,
            "IcdName": "Polyarthrosis;Coxarthrosis [arthrosis of hip];Gonarthrosis [arthrosis of knee];Arthrosis of first carpometacarpal joint;Other arthrosis;Spondylosis",
            "Ranking": 2,
            "ProfName": "Osteoarthritis"
        }
    },
    "193": {
        "symptomList": [
            "flatulence",
            "distended abdomen"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 193,
            "IcdName": "Ascites",
            "Ranking": 5,
            "ProfName": "Ascites",
            "Name": "Fluid accumulation in the abdomen",
            "Accuracy": 11.25,
            "Icd": "R18"
        }
    },
    "194": {
        "symptomList": [
            "hardening of the skin",
            "skin thickening"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "IcdName": "Epidermal cyst;Trichilemmal cyst",
            "Ranking": 4,
            "ProfName": "Skin atheroma",
            "Name": "Sebaceous cyst",
            "Accuracy": 50.4,
            "Icd": "L72.0;L72.1",
            "ID": 194
        }
    },
    "196": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "blurred vision",
            "eye pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "Icd": "T26.6",
            "ID": 196,
            "IcdName": "Corrosion of cornea and conjunctival sac",
            "Ranking": 1,
            "ProfName": "Eye corrosion",
            "Name": "Chemical eye burn",
            "Accuracy": 89.99999
        }
    },
    "197": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "feeling of foreign body in the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 197,
            "IcdName": "Injury of eye and orbit",
            "Ranking": 6,
            "ProfName": "Eye injury",
            "Name": "Injury of the eye",
            "Accuracy": 11.25,
            "Icd": "S05"
        }
    },
    "199": {
        "symptomList": [
            "skin redness",
            "non-healing skin wound",
            "skin rash",
            "hand pain",
            "wound",
            "leg swelling",
            "swollen glands in the groin",
            "facial swelling",
            "arm swelling",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 199,
            "IcdName": "Impetigo;Erysipelas;Cellulitis;Follicular disorder, unspecified;Hidradenitis suppurativa;Eccrine sweat disorders;Cutaneous abscess, furuncle and carbuncle;Staphylococcal scalded skin syndrome;Toxic epidermal necrolysis [Lyell];Necrotizing fasciitis",
            "Ranking": 1,
            "ProfName": "Skin infection, bacterial",
            "Name": "Bacterial skin infection",
            "Accuracy": 90,
            "Icd": "L01;A46;L03;L73.9;L73.2;L74;L02;L00;L51.2;M72.6"
        }
    },
    "200": {
        "symptomList": [
            "non-healing skin wound",
            "crusting",
            "skin thickening"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "White skin cancer",
            "Accuracy": 18,
            "Icd": "C44",
            "ID": 200,
            "IcdName": "Other malignant neoplasms of skin",
            "Ranking": 7,
            "ProfName": "Basal-cell carcinoma"
        }
    },
    "202": {
        "symptomList": [
            "shortness of breath",
            "going black before the eyes",
            "cheek swelling",
            "leg swelling",
            "arm swelling",
            "feeling faint",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "T63.4",
            "ID": 202,
            "IcdName": "Venom of other arthropods",
            "Ranking": 8,
            "ProfName": "Allergy, bee or wasp venom",
            "Name": "Allergy to bee or wasp venom",
            "Accuracy": 13.49865
        }
    },
    "203": {
        "symptomList": [
            "muscular weakness in the arm"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 203,
            "IcdName": "Injury of muscle and tendon of long head of biceps;Injury of muscle and tendon of other parts of biceps",
            "Ranking": 6,
            "ProfName": "Rupture of the biceps tendon",
            "Name": "Tear of the biceps tendon",
            "Accuracy": 18,
            "Icd": "S46.1;S46.2"
        }
    },
    "204": {
        "symptomList": [
            "dark urine",
            "decreased urine stream"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ID": 204,
            "IcdName": "Malignant neoplasm of bladder;Bladder, unspecified",
            "Ranking": 3,
            "ProfName": "Bladder carcinoma in men",
            "Name": "Bladder cancer",
            "Accuracy": 11.25,
            "Icd": "C67;C67.9"
        }
    },
    "208": {
        "symptomList": [
            "joint swelling",
            "foot pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Icd": "M70;M71",
            "ID": 208,
            "IcdName": "Soft tissue disorders related to use, overuse and pressure;Other bursopathies",
            "Ranking": 10,
            "ProfName": "Bursitis",
            "Name": "Inflammation of the bursae",
            "Accuracy": 21.17647
        }
    },
    "209": {
        "symptomList": [
            "involuntary movements"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Huntington's disease",
            "Accuracy": 45,
            "Icd": "G10;F02.2*",
            "ID": 209,
            "IcdName": "Huntington disease;Dementia in Huntington disease (G10†)",
            "Ranking": 2,
            "ProfName": "Huntington's chorea"
        }
    },
    "210": {
        "symptomList": [
            "non-healing skin wound",
            "leg ulcer",
            "feeling of tension in the legs",
            "ankle swelling",
            "leg swelling",
            "marked veins",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 210,
            "IcdName": "Venous insufficiency (chronic)(peripheral)",
            "Ranking": 4,
            "ProfName": "Chronic venous insufficiency",
            "Name": "Chronic vein insufficiency",
            "Accuracy": 34.65,
            "Icd": "I87.2"
        }
    },
    "211": {
        "symptomList": [
            "pain in the limbs",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Icd": "G93.3",
            "ID": 211,
            "IcdName": "Postviral fatigue syndrome",
            "Ranking": 5,
            "ProfName": "Chronic fatigue syndrome",
            "Name": "Chronic tiredness syndrome",
            "Accuracy": 26.9999981
        }
    },
    "212": {
        "symptomList": [
            "abdominal pain",
            "weight loss",
            "bloated feeling in the stomach",
            "diarrhea",
            "underweight",
            "lower abdominal pain",
            "black stools",
            "blood in stool"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "K51",
            "ID": 212,
            "IcdName": "Ulcerative colitis",
            "Ranking": 5,
            "ProfName": "Ulcerative colitis",
            "Name": "Chronic inflammatory bowel disease of colon",
            "Accuracy": 30
        }
    },
    "213": {
        "symptomList": [
            "increased thirst",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 213,
            "IcdName": "Cushing syndrome",
            "Ranking": 7,
            "ProfName": "Cushing's syndrome",
            "Name": "Hypercortisolism",
            "Accuracy": 8.999999,
            "Icd": "E24"
        }
    },
    "214": {
        "symptomList": [
            "eye lids sticking together"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 214,
            "IcdName": "Acute and unspecified inflammation of lacrimal passages;Chronic inflammation of lacrimal passages",
            "Ranking": 4,
            "ProfName": "Dacrocystitis",
            "Name": "Lacrimal gland inflammation",
            "Accuracy": 36,
            "Icd": "H04.3;H04.4"
        }
    },
    "215": {
        "symptomList": [
            "black stools"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "C18;C19;C20;C21",
            "ID": 215,
            "IcdName": "Malignant neoplasm of colon;Malignant neoplasm of rectosigmoid junction;Malignant neoplasm of rectum;Malignant neoplasm of anus and anal canal",
            "Ranking": 5,
            "ProfName": "Colorectal cancer",
            "Name": "Colon cancer",
            "Accuracy": 45
        }
    },
    "216": {
        "symptomList": [
            "difficult defecation",
            "less than 3 defecations per week",
            "black stools"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Benign intestinal polyp",
            "Name": "Intestinal polyp",
            "Accuracy": 45,
            "Icd": "K63.5",
            "ID": 216,
            "IcdName": "Polyp of colon",
            "Ranking": 6
        }
    },
    "217": {
        "symptomList": [
            "difficult defecation",
            "less than 3 defecations per week",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 217,
            "IcdName": "Volume depletion",
            "Ranking": 11,
            "ProfName": "Dehydration",
            "Name": "Fluid loss",
            "Accuracy": 19.8,
            "Icd": "E86"
        }
    },
    "220": {
        "symptomList": [
            "swollen glands on the neck"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 68,
                "Name": "Tropical medicine",
                "ID": 37
            }
        ],
        "details": {
            "ID": 220,
            "IcdName": "Diphtheria",
            "Ranking": 10,
            "ProfName": "Diphtheria",
            "Name": "Infection caused by corynebacterium diphtheriae",
            "Accuracy": 9.5625,
            "Icd": "A36"
        }
    },
    "223": {
        "symptomList": [
            "difficult defecation",
            "less than 3 defecations per week"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "K57",
            "ID": 223,
            "IcdName": "Diverticular disease of intestine",
            "Ranking": 10,
            "ProfName": "Diverticulosis",
            "Name": "Diverticular disease",
            "Accuracy": 9.45
        }
    },
    "224": {
        "symptomList": [
            "finger deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Dupuytren's contracture",
            "Accuracy": 9,
            "Icd": "M72.0",
            "ID": 224,
            "IcdName": "Palmar fascial fibromatosis [Dupuytren]",
            "Ranking": 6,
            "ProfName": "Dupuytren's disease"
        }
    },
    "226": {
        "symptomList": [
            "mouth pain",
            "dry skin",
            "hair loss",
            "dry mouth",
            "pain when chewing",
            "brittleness of nails"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Iron deficiency",
            "Ranking": 2,
            "ProfName": "Hypoferremia",
            "Name": "Iron deficiency",
            "Accuracy": 80,
            "Icd": "E61.1",
            "ID": 226
        }
    },
    "228": {
        "symptomList": [
            "itching of skin",
            "skin nodules",
            "skin redness",
            "formation of blisters on a skin area",
            "skin rash",
            "dry skin",
            "hardening of the skin",
            "flaking skin",
            "skin thickening",
            "flaking skin on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 228,
            "IcdName": "Atopic dermatitis;Seborrhoeic dermatitis;Allergic contact dermatitis;Irritant contact dermatitis;Unspecified contact dermatitis;Lichen simplex chronicus and prurigo;Other dermatitis",
            "Ranking": 1,
            "ProfName": "Eczema",
            "Name": "Dermatitis",
            "Accuracy": 90,
            "Icd": "L20;L21;L23;L24;L25;L28;L30"
        }
    },
    "229": {
        "symptomList": [
            "bleeding in the conjunctiva of the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Endocarditis",
            "Name": "Inflammation of the endocardium",
            "Accuracy": 9,
            "Icd": "I33",
            "ID": 229,
            "IcdName": "Acute and subacute endocarditis",
            "Ranking": 4
        }
    },
    "230": {
        "symptomList": [
            "protrusion of the eyes"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "H06.2*",
            "ID": 230,
            "IcdName": "Dysthyroid exophthalmos",
            "Ranking": 1,
            "ProfName": "Endocrine ophthalmopathy",
            "Name": "Thyroid eye disease",
            "Accuracy": 90
        }
    },
    "231": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "feeling of foreign body in the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 231,
            "IcdName": "Entropion and trichiasis of eyelid;Congenital entropion",
            "Ranking": 7,
            "ProfName": "Entropion",
            "Name": "Inward folding of eyelid",
            "Accuracy": 10.124999,
            "Icd": "H02.0;Q10.2"
        }
    },
    "235": {
        "symptomList": [
            "purulent discharge from the urethra"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ProfName": "Epididymitis",
            "Name": "Inflammation of the epididymis",
            "Accuracy": 13.8461542,
            "Icd": "N45.0",
            "ID": 235,
            "IcdName": "Orchitis, epididymitis and epididymo-orchitis with abscess",
            "Ranking": 4
        }
    },
    "236": {
        "symptomList": [
            "cramps",
            "uncontrolled defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Epilepsy;Status epilepticus",
            "Ranking": 2,
            "ProfName": "Epilepsy",
            "Name": "Epileptic seizures",
            "Accuracy": 45,
            "Icd": "G40;G41",
            "ID": 236
        }
    },
    "238": {
        "symptomList": [
            "skin redness",
            "formation of blisters on a skin area",
            "chills",
            "numbness of the hands",
            "cold hands"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 238,
            "IcdName": "Superficial frostbite;Frostbite with tissue necrosis;Frostbite involving multiple body regions and unspecified frostbite",
            "Ranking": 2,
            "ProfName": "Congelatio",
            "Name": "Frostbite",
            "Accuracy": 72,
            "Icd": "T33;T34;T35"
        }
    },
    "243": {
        "symptomList": [
            "pain in the limbs",
            "back pain",
            "muscle pain",
            "increased touch sensitivity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 243,
            "IcdName": "Fibromyalgia",
            "Ranking": 1,
            "ProfName": "Fibromyalgia syndrome",
            "Name": "Chronic muscular pain disorder",
            "Accuracy": 90,
            "Icd": "M79.7"
        }
    },
    "246": {
        "symptomList": [
            "hand pain",
            "joint swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Ganglion",
            "Accuracy": 8.999999,
            "Icd": "M67.4",
            "ID": 246,
            "IcdName": "Ganglion",
            "Ranking": 11,
            "ProfName": "Ganglion cyst"
        }
    },
    "250": {
        "symptomList": [
            "muscular weakness in the arm"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ProfName": "Guillain-Barré syndrome",
            "Name": "Landry's paralysis",
            "Accuracy": 10.7999992,
            "Icd": "G61.0",
            "ID": 250,
            "IcdName": "Guillain-Barré syndrome",
            "Ranking": 12
        }
    },
    "253": {
        "symptomList": [
            "foot pain",
            "toe deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Icd": "M20.1",
            "ID": 253,
            "IcdName": "Hallux valgus (acquired)",
            "Ranking": 1,
            "ProfName": "Hallux valgus",
            "Name": "Bunion",
            "Accuracy": 90
        }
    },
    "255": {
        "symptomList": [
            "hand pain",
            "blue spot on skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Superficial injury of unspecified body region;Multiple superficial injuries, unspecified",
            "Ranking": 1,
            "ProfName": "Hematoma",
            "Name": "Bruise",
            "Accuracy": 90,
            "Icd": "T14.0;T00.9",
            "ID": 255
        }
    },
    "261": {
        "symptomList": [
            "chest pain",
            "bloated feeling in the stomach",
            "side pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ProfName": "Hiatus hernia",
            "Name": "Diaphragmatic hernia",
            "Accuracy": 20.25,
            "Icd": "K44;Q79.0",
            "ID": 261,
            "IcdName": "Diaphragmatic hernia;Congenital diaphragmatic hernia",
            "Ranking": 6
        }
    },
    "263": {
        "symptomList": [
            "disorientation regarding time or place"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Pressure on the brain",
            "Accuracy": 9.642856,
            "Icd": "G93.2;P11.0",
            "ID": 263,
            "IcdName": "Benign intracranial hypertension;Cerebral oedema due to birth injury",
            "Ranking": 14,
            "ProfName": "Increased intracranial pressure"
        }
    },
    "264": {
        "symptomList": [
            "visual field loss",
            "double vision",
            "facial paralysis",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 264,
            "IcdName": "Benign neoplasm of brain and other parts of central nervous system",
            "Ranking": 6,
            "ProfName": "Intracranial neoplasm",
            "Name": "Brain tumor",
            "Accuracy": 10.5,
            "Icd": "D33"
        }
    },
    "266": {
        "symptomList": [
            "malposition of the testicles"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Icd": "Q53",
            "ID": 266,
            "IcdName": "Undescended testicle",
            "Ranking": 1,
            "ProfName": "Maldescended testis",
            "Name": "Disturbed testicular descent",
            "Accuracy": 90
        }
    },
    "268": {
        "symptomList": [
            "weight loss",
            "swollen glands in the groin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 12,
                "Name": "Hematology",
                "ID": 21
            },
            {
                "SpecialistID": 70,
                "Name": "Oncology",
                "ID": 29
            }
        ],
        "details": {
            "ID": 268,
            "IcdName": "Hodgkin lymphoma;Follicular lymphoma;Non-follicular lymphoma;Mature T/NK-cell lymphomas;Other and unspecified types of non-Hodgkin lymphoma;Other specified types of T/NK-cell lymphoma;Malignant immunoproliferative diseases",
            "Ranking": 8,
            "ProfName": "Lymphoma",
            "Name": "Lymph cancer",
            "Accuracy": 9,
            "Icd": "C81;C82;C83;C84;C85;C86;C88"
        }
    },
    "269": {
        "symptomList": [
            "limited mobility of the leg",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 269,
            "IcdName": "Congenital deformities of hip",
            "Ranking": 4,
            "ProfName": "Dysplasia of the hip",
            "Name": "Hip dysplasia",
            "Accuracy": 22.5,
            "Icd": "Q65"
        }
    },
    "271": {
        "symptomList": [
            "headache",
            "bleeding in the conjunctiva of the eye",
            "dizziness",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 271,
            "IcdName": "Essential (primary) hypertension",
            "Ranking": 4,
            "ProfName": "Hypertensive crisis",
            "Name": "High blood pressure crisis",
            "Accuracy": 77.1428452,
            "Icd": "I10"
        }
    },
    "272": {
        "symptomList": [
            "eye redness",
            "bleeding in the conjunctiva of the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 272,
            "IcdName": "Conjunctival haemorrhage",
            "Ranking": 1,
            "ProfName": "Hyposphagma",
            "Name": "Subconjunctival bleeding",
            "Accuracy": 90,
            "Icd": "H11.3"
        }
    },
    "273": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "lower abdominal pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Paralytic ileus and intestinal obstruction without hernia",
            "Ranking": 8,
            "ProfName": "Intestinal obstruction",
            "Name": "Bowel obstruction",
            "Accuracy": 9,
            "Icd": "K56",
            "ID": 273
        }
    },
    "277": {
        "symptomList": [
            "blue spot on skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 12,
                "Name": "Hematology",
                "ID": 21
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Coagulopathy",
            "Name": "Bleeding disorder",
            "Accuracy": 13.4999981,
            "Icd": "D65;D66;D67;D68",
            "ID": 277,
            "IcdName": "Disseminated intravascular coagulation [defibrination syndrome];Hereditary factor VIII deficiency;Hereditary factor IX deficiency;Other coagulation defects",
            "Ranking": 18
        }
    },
    "280": {
        "symptomList": [
            "curvature of the spine",
            "back deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 280,
            "IcdName": "Postural kyphosis;Other secondary kyphosis;Other and unspecified kyphosis;Juvenile osteochondrosis of spine;Sequelae of rickets;Other congenital malformations of spine, not associated with scoliosis;Malunion of fracture;Postradiation kyphosis;Postlaminectomy kyphosis",
            "Ranking": 1,
            "ProfName": "Kyphosis",
            "Name": "Hump",
            "Accuracy": 90,
            "Icd": "M40.0;M40.1;M40.2;M42.0;E64.3;Q76.4;M84.0;M96.2;M96.3"
        }
    },
    "281": {
        "symptomList": [
            "abdominal pain",
            "nausea",
            "diarrhea"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 281,
            "IcdName": "Other bacterial foodborne intoxications, not elsewhere classified;Other salmonella infections;Shigellosis;Other bacterial intestinal infections",
            "Ranking": 2,
            "ProfName": "Foodborne illness",
            "Name": "Food poisoning",
            "Accuracy": 89.8875,
            "Icd": "A05;A02;A03;A04"
        }
    },
    "283": {
        "symptomList": [
            "yellow colored skin",
            "leg swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Cirrhosis of liver",
            "Name": "Cirrhosis",
            "Accuracy": 9.6,
            "Icd": "K70.3;K71.7;K74",
            "ID": 283,
            "IcdName": "Alcoholic cirrhosis of liver;Toxic liver disease with fibrosis and cirrhosis of liver;Fibrosis and cirrhosis of liver",
            "Ranking": 12
        }
    },
    "286": {
        "symptomList": [
            "shortness of breath",
            "night cough"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "Name": "Water accumulation in the lungs",
            "Accuracy": 90,
            "Icd": "J81",
            "ID": 286,
            "IcdName": "Pulmonary oedema",
            "Ranking": 1,
            "ProfName": "Pulmonary edema"
        }
    },
    "287": {
        "symptomList": [
            "swollen glands on the neck",
            "swollen glands in the groin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 287,
            "IcdName": "Nonspecific lymphadenitis;Acute lymphadenitis;Generalized enlarged lymph nodes",
            "Ranking": 5,
            "ProfName": "Lymphadenopathy",
            "Name": "Enlarged lymph nodes",
            "Accuracy": 13.4999981,
            "Icd": "I88;L04;R59.1"
        }
    },
    "289": {
        "symptomList": [
            "weight loss",
            "black stools"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Gastric carcinoma",
            "Name": "Stomach cancer",
            "Accuracy": 33.7500038,
            "Icd": "C16",
            "ID": 289,
            "IcdName": "Malignant neoplasm of stomach",
            "Ranking": 9
        }
    },
    "293": {
        "symptomList": [
            "painful defecation",
            "blood in stool"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 293,
            "IcdName": "Residual haemorrhoidal skin tags",
            "Ranking": 2,
            "ProfName": "Anal fold",
            "Name": "Skin tags of anus",
            "Accuracy": 66,
            "Icd": "K64.4"
        }
    },
    "297": {
        "symptomList": [
            "irregular mole"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Malignant melanoma of skin",
            "Ranking": 3,
            "ProfName": "Melanoma",
            "Name": "Black skin cancer",
            "Accuracy": 26.9999981,
            "Icd": "C43",
            "ID": 297
        }
    },
    "302": {
        "symptomList": [
            "weight loss"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "IcdName": "Mesothelioma",
            "Ranking": 10,
            "ProfName": "Pleural mesothelioma",
            "Name": "Pleural tumor",
            "Accuracy": 11.25,
            "Icd": "C45",
            "ID": 302
        }
    },
    "308": {
        "symptomList": [
            "foot pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "IcdName": "Fracture of metatarsal bone",
            "Ranking": 11,
            "ProfName": "March fracture",
            "Name": "Fatigue fracture of the metatarsal",
            "Accuracy": 12.7058811,
            "Icd": "S92.3",
            "ID": 308
        }
    },
    "310": {
        "symptomList": [
            "back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 310,
            "IcdName": "Juvenile ankylosing spondylitis;Ankylosing spondylitis",
            "Ranking": 14,
            "ProfName": "Ankylosing spondylitis",
            "Name": "Bekhterev's disease",
            "Accuracy": 11.1801243,
            "Icd": "M08.1;M45"
        }
    },
    "311": {
        "symptomList": [
            "abdominal pain",
            "weight loss",
            "bloated feeling in the stomach",
            "diarrhea",
            "underweight",
            "lower abdominal pain",
            "black stools",
            "blood in stool"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 311,
            "IcdName": "Crohn disease [regional enteritis]",
            "Ranking": 6,
            "ProfName": "Regional enteritis",
            "Name": "Crohn's disease",
            "Accuracy": 30,
            "Icd": "K50"
        }
    },
    "312": {
        "symptomList": [
            "headache",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 312,
            "IcdName": "Giant cell arteritis with polymyalgia rheumatica;Other giant cell arteritis",
            "Ranking": 7,
            "ProfName": "Cranial arteritis",
            "Name": "Giant cell arteritis",
            "Accuracy": 18,
            "Icd": "M31.5;M31.6"
        }
    },
    "314": {
        "symptomList": [
            "sensitivity to cold",
            "cold feet",
            "hand pain",
            "numbness of the hands",
            "foot pain",
            "cold hands"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Raynaud's disease",
            "Accuracy": 90,
            "Icd": "I73.0",
            "ID": 314,
            "IcdName": "Raynaud syndrome",
            "Ranking": 1,
            "ProfName": "Raynaud's phenomenon"
        }
    },
    "315": {
        "symptomList": [
            "curvature of the spine"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ProfName": "Scheuermann's kyphosis",
            "Name": "Scheuermann's disease",
            "Accuracy": 36,
            "Icd": "M42.0",
            "ID": 315,
            "IcdName": "Juvenile osteochondrosis of spine",
            "Ranking": 3
        }
    },
    "316": {
        "symptomList": [
            "double vision",
            "problems with the sense of touch in the face",
            "problems with the sense of touch in the feet",
            "tremor on movement",
            "muscular weakness in the arm",
            "limited mobility of the leg",
            "muscular atrophy of the arm",
            "dizziness",
            "muscular atrophy in the leg",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 316,
            "IcdName": "Multiple sclerosis",
            "Ranking": 7,
            "ProfName": "Multiple sclerosis",
            "Name": "Disseminated sclerosis",
            "Accuracy": 9.45,
            "Icd": "G35"
        }
    },
    "318": {
        "symptomList": [
            "difficulty in swallowing",
            "muscular weakness in the arm",
            "drooping eyelid",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 318,
            "IcdName": "Myasthenia gravis",
            "Ranking": 9,
            "ProfName": "Pseudoparalytic myasthenia gravis",
            "Name": "Myasthenia gravis",
            "Accuracy": 9,
            "Icd": "G70.0"
        }
    },
    "320": {
        "symptomList": [
            "shortness of breath",
            "lip swelling",
            "nausea",
            "mouth pain",
            "dry mouth",
            "itching in the mouth or throat",
            "tongue burning"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 320,
            "IcdName": "",
            "Ranking": 4,
            "ProfName": "Allergic food hypersensitivity",
            "Name": "Food allergy",
            "Accuracy": 67.5,
            "Icd": ""
        }
    },
    "321": {
        "symptomList": [
            "nausea",
            "bloated feeling in the stomach",
            "diarrhea",
            "foul smelling defecation",
            "flatulence"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 321,
            "IcdName": "Intestinal malabsorption",
            "Ranking": 4,
            "ProfName": "Non-allergic food hypersensitivity",
            "Name": "Food intolerance",
            "Accuracy": 16.2,
            "Icd": "K90"
        }
    },
    "322": {
        "symptomList": [
            "nosebleed"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 322,
            "IcdName": "Nasal polyp",
            "Ranking": 7,
            "ProfName": "Benign nasal polyp",
            "Name": "Nasal polyp",
            "Accuracy": 15.75,
            "Icd": "J33"
        }
    },
    "323": {
        "symptomList": [
            "irregular mole"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Mole",
            "Accuracy": 45,
            "Icd": "Q82.5",
            "ID": 323,
            "IcdName": "Congenital non-neoplastic naevus",
            "Ranking": 2,
            "ProfName": "Nevus"
        }
    },
    "324": {
        "symptomList": [
            "abdominal pain",
            "back pain",
            "burning sensation when urinating",
            "dark urine",
            "lower abdominal pain",
            "side pain",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ProfName": "Nephrolithiasis in men",
            "Name": "Kidney stones",
            "Accuracy": 12.21,
            "Icd": "N20",
            "ID": 324,
            "IcdName": "Calculus of kidney and ureter",
            "Ranking": 7
        }
    },
    "325": {
        "symptomList": [
            "numbness of the hands"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 325,
            "IcdName": "Lesion of ulnar nerve",
            "Ranking": 6,
            "ProfName": "Cubital tunnel syndrome",
            "Name": "Ulnar nerve entrapment",
            "Accuracy": 36,
            "Icd": "G56.2"
        }
    },
    "326": {
        "symptomList": [
            "nausea",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 326,
            "IcdName": "Vestibular neuronitis",
            "Ranking": 13,
            "ProfName": "Vestibular neuronitis",
            "Name": "Vestibular failure",
            "Accuracy": 12.9599991,
            "Icd": "H81.2"
        }
    },
    "327": {
        "symptomList": [
            "side pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Name": "Fluid-filled sacs in the kidney",
            "Accuracy": 36,
            "Icd": "N28",
            "ID": 327,
            "IcdName": "Other disorders of kidney and ureter, not elsewhere classified",
            "Ranking": 4,
            "ProfName": "Renal cysts in men"
        }
    },
    "329": {
        "symptomList": [
            "weight gain",
            "feeling of tension in the legs",
            "leg swelling",
            "marked veins",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 329,
            "IcdName": "Oedema, unspecified",
            "Ranking": 3,
            "ProfName": "Edema",
            "Name": "Water accumulation in the tissues",
            "Accuracy": 67.5,
            "Icd": "R60.9"
        }
    },
    "330": {
        "symptomList": [
            "earache"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Name": "Ear injury with foreign body",
            "Accuracy": 66.46154,
            "Icd": "T16",
            "ID": 330,
            "IcdName": "Foreign body in ear",
            "Ranking": 3,
            "ProfName": "Foreign body in ear"
        }
    },
    "331": {
        "symptomList": [
            "burning sensation when urinating"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "IcdName": "Orchitis and epididymitis",
            "Ranking": 6,
            "ProfName": "Orchitis",
            "Name": "Inflammation of the testes",
            "Accuracy": 15.48,
            "Icd": "N45",
            "ID": 331
        }
    },
    "332": {
        "symptomList": [
            "difficulty in swallowing"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Malignant neoplasm of oesophagus",
            "Ranking": 7,
            "ProfName": "Esophageal carcinoma",
            "Name": "Esophageal cancer",
            "Accuracy": 10.3846149,
            "Icd": "C15",
            "ID": 332
        }
    },
    "334": {
        "symptomList": [
            "pain in the bones"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 334,
            "IcdName": "Benign neoplasm of bone and articular cartilage",
            "Ranking": 6,
            "ProfName": "Osteoma",
            "Name": "Benign bone tumor",
            "Accuracy": 17.1428566,
            "Icd": "D16"
        }
    },
    "336": {
        "symptomList": [
            "pain in the bones"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "IcdName": "Malignant neoplasm of bone and articular cartilage of limbs;Malignant neoplasm of bone and articular cartilage of other and unspecified sites",
            "Ranking": 7,
            "ProfName": "Osteosarcoma",
            "Name": "Malignant bone tumor",
            "Accuracy": 12.8571424,
            "Icd": "C40;C41",
            "ID": 336
        }
    },
    "339": {
        "symptomList": [
            "mouth pain",
            "pain when chewing",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Sialadenitis",
            "Name": "Salivary gland inflammation",
            "Accuracy": 9.306205,
            "Icd": "K11.2",
            "ID": 339,
            "IcdName": "Sialoadenitis",
            "Ranking": 7
        }
    },
    "341": {
        "symptomList": [
            "painful defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 17,
                "Name": "Angiology",
                "ID": 7
            },
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "K64.5",
            "ID": 341,
            "IcdName": "Perianal venous thrombosis",
            "Ranking": 4,
            "ProfName": "Perianal hematoma",
            "Name": "Anal venous thrombosis",
            "Accuracy": 61.363636
        }
    },
    "345": {
        "symptomList": [
            "cough",
            "shortness of breath"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Whooping cough",
            "Accuracy": 9.375,
            "Icd": "A37",
            "ID": 345,
            "IcdName": "Whooping cough",
            "Ranking": 21,
            "ProfName": "Pertussis"
        }
    },
    "346": {
        "symptomList": [
            "anxiety"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ID": 346,
            "IcdName": "Adrenal gland;Medulla of adrenal gland",
            "Ranking": 3,
            "ProfName": "Pheochromocytoma in men",
            "Name": "Benign tumor of the adrenal medulla",
            "Accuracy": 9.45,
            "Icd": "D35.0;C74.1"
        }
    },
    "348": {
        "symptomList": [
            "skin redness",
            "wound"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 348,
            "IcdName": "Pilonidal cyst",
            "Ranking": 7,
            "ProfName": "Pilonidal cyst",
            "Name": "Coccyx fistula",
            "Accuracy": 10.97561,
            "Icd": "L05"
        }
    },
    "349": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "ID": 349,
            "IcdName": "Pleural effusion, not elsewhere classified;Pleural effusion in conditions classified elsewhere",
            "Ranking": 6,
            "ProfName": "Pleural effusion",
            "Name": "Fluid accumulation in the chest cavity",
            "Accuracy": 26.25,
            "Icd": "J90;J91*"
        }
    },
    "350": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "IcdName": "Pleural effusion, not elsewhere classified;Pleurisy",
            "Ranking": 2,
            "ProfName": "Pleurisy",
            "Name": "Inflammation of the pleura",
            "Accuracy": 45,
            "Icd": "J90;R09.1",
            "ID": 350
        }
    },
    "351": {
        "symptomList": [
            "cough",
            "chest pain",
            "shortness of breath",
            "chest tightness",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 351,
            "IcdName": "Pneumothorax;Pneumothorax originating in the perinatal period;Traumatic pneumothorax",
            "Ranking": 4,
            "ProfName": "Pneumothorax",
            "Name": "Lung collapse",
            "Accuracy": 37.5,
            "Icd": "J93;P25.1;S27.0"
        }
    },
    "353": {
        "symptomList": [
            "reduced appetite",
            "nervousness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ID": 353,
            "IcdName": "Post-traumatic stress disorder",
            "Ranking": 5,
            "ProfName": "Post-traumatic stress disorder",
            "Name": "Stress disorder after trauma",
            "Accuracy": 27,
            "Icd": "F43.1"
        }
    },
    "357": {
        "symptomList": [
            "dark urine"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "IcdName": "Malignant neoplasm of prostate",
            "Ranking": 8,
            "ProfName": "Carcinoma of the prostate",
            "Name": "Malignant prostate cancer",
            "Accuracy": 28.3783779,
            "Icd": "C61",
            "ID": 357
        }
    },
    "361": {
        "symptomList": [
            "back pain",
            "burning sensation when urinating",
            "dark urine",
            "side pain",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Icd": "N10;N11;N12",
            "ID": 361,
            "IcdName": "Acute tubulo-interstitial nephritis;Chronic tubulo-interstitial nephritis;Tubulo-interstitial nephritis, not specified as acute or chronic",
            "Ranking": 8,
            "ProfName": "Pyelonephritis in men",
            "Name": "Infection of kidney pelvis",
            "Accuracy": 12
        }
    },
    "364": {
        "symptomList": [
            "numbness in the leg",
            "involuntary movements"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Other specified extrapyramidal and movement disorders",
            "Ranking": 1,
            "ProfName": "Restless legs syndrome",
            "Name": "Restless limb syndrome",
            "Accuracy": 90,
            "Icd": "G25.8",
            "ID": 364
        }
    },
    "366": {
        "symptomList": [
            "joint swelling",
            "limited mobility of the leg",
            "morning stiffness",
            "finger deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 366,
            "IcdName": "Seropositive rheumatoid arthritis;Other rheumatoid arthritis",
            "Ranking": 3,
            "ProfName": "Rheumatoid arthritis",
            "Name": "Rheumatism",
            "Accuracy": 45,
            "Icd": "M05;M06"
        }
    },
    "367": {
        "symptomList": [
            "headache",
            "cough",
            "nosebleed",
            "burning nose"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 367,
            "IcdName": "Vasomotor and allergic rhinitis",
            "Ranking": 1,
            "ProfName": "Allergic rhinitis",
            "Name": "Hay fever",
            "Accuracy": 90,
            "Icd": "J30"
        }
    },
    "368": {
        "symptomList": [
            "cough",
            "nosebleed",
            "swollen glands on the neck",
            "burning nose"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "IcdName": "Acute nasopharyngitis [common cold]",
            "Ranking": 2,
            "ProfName": "Infectious rhinitis",
            "Name": "Flu-related rhinitis",
            "Accuracy": 90,
            "Icd": "J00",
            "ID": 368
        }
    },
    "374": {
        "symptomList": [
            "cough",
            "swollen glands on the neck"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 374,
            "IcdName": "Sarcoidosis",
            "Ranking": 12,
            "ProfName": "Sarcoidosis",
            "Name": "Systemic disorder with granulomatous inflammation",
            "Accuracy": 9.375,
            "Icd": "D86"
        }
    },
    "379": {
        "symptomList": [
            "headache",
            "weight gain",
            "difficulty to concentrate",
            "reduced appetite",
            "sleepiness with spontaneous falling asleep"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Sleeping disorder",
            "Accuracy": 52.92,
            "Icd": "G47;F51",
            "ID": 379,
            "IcdName": "Sleep disorders;Nonorganic sleep disorders",
            "Ranking": 2,
            "ProfName": "Somnipathy"
        }
    },
    "381": {
        "symptomList": [
            "muscular weakness in the arm",
            "muscle pain",
            "muscular atrophy of the arm",
            "muscular atrophy in the leg",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Icd": "M89.0;G56.4",
            "ID": 381,
            "IcdName": "Algoneurodystrophy;Causalgia",
            "Ranking": 10,
            "ProfName": "Complex regional pain syndrome",
            "Name": "Reflex sympathetic dystrophy",
            "Accuracy": 9
        }
    },
    "386": {
        "symptomList": [
            "crusting",
            "dry skin",
            "flaking skin",
            "coarsening of the skin structure"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 386,
            "IcdName": "Seborrhoeic dermatitis",
            "Ranking": 2,
            "ProfName": "Seborrheic dermatitis",
            "Name": "Seborrheic eczema",
            "Accuracy": 72,
            "Icd": "L21"
        }
    },
    "388": {
        "symptomList": [
            "cheek swelling",
            "face pain",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Salivary gland stone",
            "Accuracy": 9.306205,
            "Icd": "K11.5",
            "ID": 388,
            "IcdName": "Sialolithiasis",
            "Ranking": 8,
            "ProfName": "Sialolithiasis"
        }
    },
    "390": {
        "symptomList": [
            "curvature of the spine"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Curvature of the spine",
            "Accuracy": 60,
            "Icd": "M41",
            "ID": 390,
            "IcdName": "Scoliosis",
            "Ranking": 2,
            "ProfName": "Scoliosis"
        }
    },
    "391": {
        "symptomList": [
            "skin redness",
            "formation of blisters on a skin area",
            "skin rash",
            "wound",
            "dizziness",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 391,
            "IcdName": "Sunburn",
            "Ranking": 9,
            "ProfName": "UV erythema",
            "Name": "Sunburn",
            "Accuracy": 9.006004,
            "Icd": "L55"
        }
    },
    "395": {
        "symptomList": [
            "double vision"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ID": 395,
            "IcdName": "Paralytic strabismus;Other strabismus",
            "Ranking": 2,
            "ProfName": "Strabismus",
            "Name": "Squint",
            "Accuracy": 45,
            "Icd": "H49;H50"
        }
    },
    "396": {
        "symptomList": [
            "difficulty in swallowing"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Swelling of the thyroid gland",
            "Accuracy": 41.53846,
            "Icd": "E01;E02;E03;E04;E05",
            "ID": 396,
            "IcdName": "Iodine-deficiency-related thyroid disorders and allied conditions;Subclinical iodine-deficiency hypothyroidism;Other hypothyroidism;Other nontoxic goitre;Thyrotoxicosis [hyperthyroidism]",
            "Ranking": 3,
            "ProfName": "Goitre"
        }
    },
    "397": {
        "symptomList": [
            "uncontrolled defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 397,
            "IcdName": "Faecal incontinence",
            "Ranking": 1,
            "ProfName": "Fecal incontinence",
            "Name": "Bowel incontinence",
            "Accuracy": 90,
            "Icd": "R15"
        }
    },
    "404": {
        "symptomList": [
            "yellow colored skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 12,
                "Name": "Hematology",
                "ID": 21
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 404,
            "IcdName": "Thalassaemia",
            "Ranking": 7,
            "ProfName": "Thalassemia",
            "Name": "Mediterranean anemia",
            "Accuracy": 10,
            "Icd": "D56"
        }
    },
    "407": {
        "symptomList": [
            "swollen glands in the groin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 28,
                "Name": "Infectiology",
                "ID": 23
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "B58",
            "ID": 407,
            "IcdName": "Toxoplasmosis",
            "Ranking": 9,
            "ProfName": "Toxoplasmosis",
            "Name": "Toxoplasmosis infection",
            "Accuracy": 9
        }
    },
    "410": {
        "symptomList": [
            "changes in the nails"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Ingrowing nail",
            "Ranking": 4,
            "ProfName": "Onychocryptosis",
            "Name": "Ingrown nail",
            "Accuracy": 75.9375,
            "Icd": "L60.0",
            "ID": 410
        }
    },
    "411": {
        "symptomList": [
            "frequent urination"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "IcdName": "Stress incontinence;Other specified urinary incontinence;Unspecified urinary incontinence",
            "Ranking": 4,
            "ProfName": "Urinary incontinence in men",
            "Name": "Involuntary urination",
            "Accuracy": 61.363636,
            "Icd": "N39.3;N39.4;R32",
            "ID": 411
        }
    },
    "412": {
        "symptomList": [
            "abdominal pain",
            "urge to urinate",
            "decreased urine stream",
            "side pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ID": 412,
            "IcdName": "Calculus of lower urinary tract",
            "Ranking": 8,
            "ProfName": "Urolithiasis in men",
            "Name": "Urinary tract stones",
            "Accuracy": 13.5,
            "Icd": "N21"
        }
    },
    "415": {
        "symptomList": [
            "skin redness",
            "formation of blisters on a skin area",
            "wound",
            "scar"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 415,
            "IcdName": "Burn and corrosion of head and neck;Burn and corrosion of trunk;Burn and corrosion of shoulder and upper limb, except wrist and hand;Burn and corrosion of wrist and hand;Burn and corrosion of hip and lower limb, except ankle and foot;Burn and corrosion of ankle and foot;Burn and corrosion confined to eye and adnexa;Burn and corrosion of respiratory tract;Burn and corrosion of other internal organs;Burns and corrosions of multiple body regions;Burn and corrosion, body region unspecified;Burns classified according to extent of body surface involved",
            "Ranking": 3,
            "ProfName": "Combustion",
            "Name": "Burn",
            "Accuracy": 29.2499981,
            "Icd": "T20;T21;T22;T23;T24;T25;T26;T27;T28;T29;T30;T31"
        }
    },
    "431": {
        "symptomList": [
            "abdominal pain",
            "cough",
            "itching of skin",
            "weight loss",
            "weight gain",
            "skin lesion",
            "skin wheal",
            "lip swelling",
            "nosebleed",
            "increased urine quantity",
            "increased thirst",
            "nausea",
            "diarrhea",
            "skin redness",
            "formation of blisters on a skin area",
            "burning eyes",
            "ringing in the ear",
            "difficult defecation",
            "less than 3 defecations per week",
            "fatty defecation",
            "mouth ulcers",
            "dark urine",
            "muscle stiffness",
            "skin rash",
            "disorientation regarding time or place",
            "increased appetite",
            "dry skin",
            "hair loss",
            "stomach burning",
            "black stools",
            "blood in stool",
            "dizziness",
            "loss of eye lashes",
            "memory gap",
            "blue spot on skin",
            "sleepiness with spontaneous falling asleep",
            "flaking skin on the head",
            "swollen glands in the groin",
            "dry mouth",
            "facial swelling",
            "tongue burning",
            "agitation",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Drug side effect",
            "Accuracy": 60,
            "Icd": "T88.7",
            "ID": 431,
            "IcdName": "Unspecified adverse effect of drug or medicament",
            "Ranking": 3,
            "ProfName": "Adverse drug reaction"
        }
    },
    "432": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "going black before the eyes",
            "changes in the nails",
            "night cough",
            "leg swelling",
            "absence of a pulse",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 432,
            "IcdName": "Heart failure",
            "Ranking": 11,
            "ProfName": "Cardiac failure",
            "Name": "Heart failure",
            "Accuracy": 9,
            "Icd": "I50"
        }
    },
    "433": {
        "symptomList": [
            "ankle swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Name": "Vascular inflammation",
            "Accuracy": 13.5,
            "Icd": "I77.6;I80;L95;M30;M31",
            "ID": 433,
            "IcdName": "Arteritis, unspecified;Phlebitis and thrombophlebitis;Vasculitis limited to skin, not elsewhere classified;Polyarteritis nodosa and related conditions;Other necrotizing vasculopathies",
            "Ranking": 6,
            "ProfName": "Vasculitis"
        }
    },
    "436": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "chest tightness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Acute myocarditis;Myocarditis, unspecified;Rheumatic myocarditis;Acute rheumatic myocarditis;Myocarditis in diseases classified elsewhere",
            "Ranking": 6,
            "ProfName": "Myocarditis",
            "Name": "Inflammation of heart muscle",
            "Accuracy": 13.5,
            "Icd": "I40;I51.4;I09.0;I01.2;I41*",
            "ID": 436
        }
    },
    "437": {
        "symptomList": [
            "chest pain",
            "shortness of breath",
            "breathing-related pains",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Acute rheumatic pericarditis;Chronic rheumatic pericarditis;Acute pericarditis;Other diseases of pericardium;Pericarditis in diseases classified elsewhere",
            "Ranking": 9,
            "ProfName": "Pericarditis",
            "Name": "Inflammation of the pericardium",
            "Accuracy": 17.1428566,
            "Icd": "I01.0;I09.2;I30;I31;I32",
            "ID": 437
        }
    },
    "438": {
        "symptomList": [
            "hair loss"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Telogen effluvium;Anagen effluvium",
            "Ranking": 1,
            "ProfName": "Effluvium",
            "Name": "Diffuse hair loss",
            "Accuracy": 90,
            "Icd": "L65.0;L65.1",
            "ID": 438
        }
    },
    "439": {
        "symptomList": [
            "skin redness",
            "skin rash",
            "bold area among hair on the head",
            "swollen glands in the groin",
            "scar"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 439,
            "IcdName": "Lupus erythematosus",
            "Ranking": 6,
            "ProfName": "Systemic lupus erythematosus",
            "Name": "Lupus",
            "Accuracy": 9,
            "Icd": "L93"
        }
    },
    "440": {
        "symptomList": [
            "going black before the eyes",
            "cold sweats",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Orthostatic syncope",
            "Name": "Fainting after standing up",
            "Accuracy": 42.75,
            "Icd": "R55;I95.1",
            "ID": 440,
            "IcdName": "Syncope and collapse;Orthostatic hypotension",
            "Ranking": 9
        }
    },
    "443": {
        "symptomList": [
            "abdominal pain",
            "shortness of breath",
            "nausea",
            "diarrhea",
            "yellow colored skin",
            "disorientation regarding time or place",
            "oversensitivity to light",
            "hot flushes",
            "lockjaw",
            "memory gap",
            "hallucination",
            "agitation",
            "absence of a pulse",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "T36;T37;T38;T39;T40;T41;T42;T43;T44;T45;T46;T47;T48;T49;T50",
            "ID": 443,
            "IcdName": "Poisoning by systemic antibiotics;Poisoning by other systemic anti-infectives and antiparasitics;Poisoning by hormones and their synthetic substitutes and antagonists, not elsewhere classified;Poisoning by nonopioid analgesics, antipyretics and antirheumatics;Poisoning by narcotics and psychodysleptics [hallucinogens];Poisoning by anaesthetics and therapeutic gases;Poisoning by antiepileptic, sedative-hypnotic and antiparkinsonism drugs;Poisoning by psychotropic drugs, not elsewhere classified;Poisoning by drugs primarily affecting the autonomic nervous system;Poisoning by primarily systemic and haematological agents, not elsewhere classified;Poisoning by agents primarily affecting the cardiovascular system;Poisoning by agents primarily affecting the gastrointestinal system;Poisoning by agents primarily acting on smooth and skeletal muscles and the respiratory system;Poisoning by topical agents primarily affecting skin and mucous membrane and by ophthalmological, otorhinolaryngological and dental drugs;Poisoning by diuretics and other and unspecified drugs, medicaments and biological substances",
            "Ranking": 2,
            "ProfName": "Intoxication",
            "Name": "Poisoning",
            "Accuracy": 84
        }
    },
    "444": {
        "symptomList": [
            "going black before the eyes",
            "nervousness",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Name": "Shock",
            "Accuracy": 90,
            "Icd": "F43.0",
            "ID": 444,
            "IcdName": "Acute stress reaction",
            "Ranking": 1,
            "ProfName": "Acute stress disorder"
        }
    },
    "445": {
        "symptomList": [
            "increased urine quantity",
            "increased thirst",
            "difficult defecation",
            "less than 3 defecations per week",
            "cramps",
            "forgetfulness",
            "difficulty in finding words",
            "pain in the calves",
            "leg cramps",
            "absence of a pulse"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            }
        ],
        "details": {
            "Name": "Imbalance of body minerals",
            "Accuracy": 85.71428,
            "Icd": "E87",
            "ID": 445,
            "IcdName": "Other disorders of fluid, electrolyte and acid-base balance",
            "Ranking": 3,
            "ProfName": "Electrolyte imbalance"
        }
    },
    "447": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "feeling of foreign body in the eye",
            "oversensitivity to light"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "Icd": "H16",
            "ID": 447,
            "IcdName": "Keratitis",
            "Ranking": 3,
            "ProfName": "Keratitis",
            "Name": "Inflammation of the cornea",
            "Accuracy": 28.125
        }
    },
    "448": {
        "symptomList": [
            "yellow colored skin",
            "yellowish discoloration of the white part of the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Gilbert's disease",
            "Accuracy": 30,
            "Icd": "E80.4",
            "ID": 448,
            "IcdName": "Gilbert syndrome",
            "Ranking": 2,
            "ProfName": "Gilbert's syndrome"
        }
    },
    "449": {
        "symptomList": [
            "headache",
            "lip swelling",
            "earache",
            "mouth pain",
            "swollen glands on the neck",
            "cheek swelling",
            "face pain",
            "pain when chewing",
            "facial swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 71,
                "Name": "Dentistry",
                "ID": 43
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 449,
            "IcdName": "Periapical abscess with sinus;Periapical abscess without sinus",
            "Ranking": 5,
            "ProfName": "Dental abscess",
            "Name": "Tooth abscess",
            "Accuracy": 18.0120087,
            "Icd": "K04.6;K04.7"
        }
    },
    "450": {
        "symptomList": [
            "eye lid swelling",
            "eye lids sticking together",
            "eye pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Hordeolum",
            "Name": "Stye",
            "Accuracy": 16.363636,
            "Icd": "H00.0",
            "ID": 450,
            "IcdName": "Hordeolum and other deep inflammation of eyelid",
            "Ranking": 4
        }
    },
    "451": {
        "symptomList": [
            "eye lid swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Ulcer of the skin of the eyelid",
            "Accuracy": 67.5,
            "Icd": "H00.1",
            "ID": 451,
            "IcdName": "Chalazion",
            "Ranking": 3,
            "ProfName": "Chalazion"
        }
    },
    "452": {
        "symptomList": [
            "problems with the sense of touch in the face",
            "facial paralysis"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Bell palsy",
            "Ranking": 1,
            "ProfName": "Facial nerve paralysis",
            "Name": "Facial paralysis",
            "Accuracy": 90,
            "Icd": "G51.0",
            "ID": 452
        }
    },
    "453": {
        "symptomList": [
            "cough"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 28,
                "Name": "Infectiology",
                "ID": 23
            },
            {
                "SpecialistID": 6,
                "Name": "Pulmonology",
                "ID": 35
            }
        ],
        "details": {
            "ID": 453,
            "IcdName": "Respiratory tuberculosis, bacteriologically and histologically confirmed;Respiratory tuberculosis, not confirmed bacteriologically or histologically;Tuberculosis of nervous system;Tuberculosis of other organs;Miliary tuberculosis",
            "Ranking": 21,
            "ProfName": "Mycobacterium tuberculosis infection",
            "Name": "Tuberculosis",
            "Accuracy": 11.76923,
            "Icd": "A15;A16;A17;A18;A19"
        }
    },
    "454": {
        "symptomList": [
            "nausea",
            "ringing in the ear",
            "sensitivity to noise",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "ID": 454,
            "IcdName": "Ménière disease",
            "Ranking": 7,
            "ProfName": "Ménière's disease",
            "Name": "Auditory vertigo",
            "Accuracy": 30.5999985,
            "Icd": "H81.0"
        }
    },
    "455": {
        "symptomList": [
            "eye redness",
            "eye pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "IcdName": "Foreign body on external eye;Foreign body entering into or through eye or natural orifice",
            "Ranking": 2,
            "ProfName": "Foreign body in the eye",
            "Name": "Foreign object in the eye",
            "Accuracy": 81.8181839,
            "Icd": "T15;W44",
            "ID": 455
        }
    },
    "460": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "wheezing",
            "swollen glands on the neck"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 460,
            "IcdName": "Acute laryngotracheitis;Acute obstructive laryngitis [croup]",
            "Ranking": 8,
            "ProfName": "Laryngotracheobronchitis",
            "Name": "Infection of upper airways",
            "Accuracy": 10.7999992,
            "Icd": "J04.2;J05.0"
        }
    },
    "461": {
        "symptomList": [
            "ringing in the ear"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Name": "Foreign object in the ear",
            "Accuracy": 12,
            "Icd": "T16",
            "ID": 461,
            "IcdName": "Foreign body in ear",
            "Ranking": 6,
            "ProfName": "Foreign body in ear"
        }
    },
    "462": {
        "symptomList": [
            "nosebleed",
            "burning nose"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Icd": "J31.0",
            "ID": 462,
            "IcdName": "Chronic rhinitis",
            "Ranking": 3,
            "ProfName": "Rhinitis sicca",
            "Name": "Dry nasal mucosa",
            "Accuracy": 11.25
        }
    },
    "465": {
        "symptomList": [
            "muscular weakness in the arm",
            "muscular atrophy of the arm"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Narrowing of the spinal canal in the neck",
            "Accuracy": 58.5,
            "Icd": "M48.0",
            "ID": 465,
            "IcdName": "Spinal stenosis",
            "Ranking": 3,
            "ProfName": "Cervical spinal stenosis"
        }
    },
    "467": {
        "symptomList": [
            "numbness of the hands"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Nerve root irritation of the cervical spine",
            "Accuracy": 54,
            "Icd": "G54",
            "ID": 467,
            "IcdName": "Nerve root and plexus disorders",
            "Ranking": 5,
            "ProfName": "Cervical radiculopathy"
        }
    },
    "469": {
        "symptomList": [
            "earache",
            "lockjaw",
            "face pain",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "IcdName": "Temporomandibular joint disorders",
            "Ranking": 5,
            "ProfName": "TMJ syndrome",
            "Name": "Temporomandibular joint dysfunction",
            "Accuracy": 22.5,
            "Icd": "K07.6",
            "ID": 469
        }
    },
    "470": {
        "symptomList": [
            "cough",
            "shortness of breath",
            "wheezing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Pulmonary aspiration",
            "Name": "Foreign object in the airways",
            "Accuracy": 18.75,
            "Icd": "T17",
            "ID": 470,
            "IcdName": "Foreign body in respiratory tract",
            "Ranking": 5
        }
    },
    "472": {
        "symptomList": [
            "bloated feeling in the stomach",
            "reduced appetite",
            "distended abdomen"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 472,
            "IcdName": "Functional dyspepsia",
            "Ranking": 3,
            "ProfName": "Functional dyspepsia",
            "Name": "Stomach irritation",
            "Accuracy": 75.375,
            "Icd": "K30"
        }
    },
    "473": {
        "symptomList": [
            "mouth ulcers",
            "mouth pain",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Other Vincent infections;Herpesviral gingivostomatitis and pharyngotonsillitis",
            "Ranking": 9,
            "ProfName": "Herpetic gingivostomatitis",
            "Name": "Gingivostomatitis",
            "Accuracy": 18,
            "Icd": "A69.1;B00.2",
            "ID": 473
        }
    },
    "474": {
        "symptomList": [
            "mouth ulcers",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 71,
                "Name": "Dentistry",
                "ID": 43
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 474,
            "IcdName": "Acute gingivitis;Chronic gingivitis",
            "Ranking": 4,
            "ProfName": "Gingivitis",
            "Name": "Inflammation of gingiva",
            "Accuracy": 45,
            "Icd": "K05.0;K05.1"
        }
    },
    "475": {
        "symptomList": [
            "weight gain",
            "cravings",
            "increased appetite",
            "distended abdomen"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ID": 475,
            "IcdName": "Eating disorders",
            "Ranking": 4,
            "ProfName": "Psychogenic eating disorders",
            "Name": "Eating disorder",
            "Accuracy": 22.5,
            "Icd": "F50"
        }
    },
    "476": {
        "symptomList": [
            "going black before the eyes",
            "dizziness",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 476,
            "IcdName": "Gastrointestinal haemorrhage, unspecified",
            "Ranking": 17,
            "ProfName": "Gastrointestinal bleeding",
            "Name": "Stomach bleeding",
            "Accuracy": 9,
            "Icd": "K92.2"
        }
    },
    "477": {
        "symptomList": [
            "black stools"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Oesophageal varices",
            "Ranking": 8,
            "ProfName": "Esophageal varices",
            "Name": "Enlarged veins of the esophagus",
            "Accuracy": 45,
            "Icd": "I85",
            "ID": 477
        }
    },
    "478": {
        "symptomList": [
            "mouth pain",
            "lockjaw",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 71,
                "Name": "Dentistry",
                "ID": 43
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 478,
            "IcdName": "Disturbances in tooth eruption;Teething syndrome",
            "Ranking": 10,
            "ProfName": "Pericoronitis",
            "Name": "Difficult dentition",
            "Accuracy": 18,
            "Icd": "K00.6;K00.7"
        }
    },
    "479": {
        "symptomList": [
            "lockjaw",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 76,
                "Name": "Orthodontics",
                "ID": 44
            }
        ],
        "details": {
            "ID": 479,
            "IcdName": "Fracture of mandible",
            "Ranking": 11,
            "ProfName": "Mandibular fracture",
            "Name": "Jaw fracture",
            "Accuracy": 9,
            "Icd": "S02.6"
        }
    },
    "480": {
        "symptomList": [
            "difficulty in swallowing"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Outpouching of the esophagus",
            "Accuracy": 90,
            "Icd": "K22.5;Q39.6",
            "ID": 480,
            "IcdName": "Diverticulum of oesophagus, acquired;Diverticulum of oesophagus",
            "Ranking": 1,
            "ProfName": "Diverticulum of the esophagus"
        }
    },
    "481": {
        "symptomList": [
            "difficulty in swallowing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Foreign body in pharynx",
            "Ranking": 2,
            "ProfName": "Foreign body in the throat",
            "Name": "Foreign object in the throat",
            "Accuracy": 83.07692,
            "Icd": "T17.2",
            "ID": 481
        }
    },
    "482": {
        "symptomList": [
            "increased urine quantity",
            "increased thirst",
            "frequent urination"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Disorder causing imbalance of water in the body",
            "Accuracy": 30.681818,
            "Icd": "E23.2;N25.1",
            "ID": 482,
            "IcdName": "Diabetes insipidus;Nephrogenic diabetes insipidus",
            "Ranking": 5,
            "ProfName": "Diabetes insipidus"
        }
    },
    "483": {
        "symptomList": [
            "difficulty in finding words"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Icd": "G93.4",
            "ID": 483,
            "IcdName": "Encephalopathy, unspecified",
            "Ranking": 3,
            "ProfName": "Metabolic encephalopathy",
            "Name": "Brain damage caused by metabolic disorders",
            "Accuracy": 13.605442
        }
    },
    "484": {
        "symptomList": [
            "chest pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 484,
            "IcdName": "Injury of muscle and tendon at thorax level",
            "Ranking": 1,
            "ProfName": "Tenseness of the regional pectoral tissue",
            "Name": "Strain of the regional supporting tissue",
            "Accuracy": 90,
            "Icd": "S29.0"
        }
    },
    "485": {
        "symptomList": [
            "shortness of breath",
            "night cough",
            "dizziness",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 485,
            "IcdName": "Rheumatic mitral valve diseases;Rheumatic aortic valve diseases;Rheumatic tricuspid valve diseases;Multiple valve diseases;Nonrheumatic mitral valve disorders;Nonrheumatic aortic valve disorders;Nonrheumatic tricuspid valve disorders;Pulmonary valve disorders;Congenital malformations of pulmonary and tricuspid valves;Congenital malformations of aortic and mitral valves",
            "Ranking": 5,
            "ProfName": "Valvulopathies",
            "Name": "Diseases of the heart valves",
            "Accuracy": 53.9999924,
            "Icd": "I05;I06;I07;I08;I34;I35;I36;I37;Q22;Q23"
        }
    },
    "486": {
        "symptomList": [
            "pain radiating to the leg",
            "back pain",
            "limited mobility of the back",
            "stress-related leg pain",
            "muscular atrophy in the leg",
            "muscular weakness in the leg",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Narrowing of spinal canals of the thoracic or lumbar spine",
            "Accuracy": 16.2,
            "Icd": "M48.0",
            "ID": 486,
            "IcdName": "Spinal stenosis",
            "Ranking": 6,
            "ProfName": "Thoracic or lumbar spinal stenosis"
        }
    },
    "487": {
        "symptomList": [
            "back pain",
            "limited mobility of the back",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 487,
            "IcdName": "Low back pain",
            "Ranking": 1,
            "ProfName": "Lumbago",
            "Name": "Low back pain",
            "Accuracy": 90,
            "Icd": "M54.5"
        }
    },
    "488": {
        "symptomList": [
            "back pain",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Strain of the back muscles",
            "Accuracy": 22.2,
            "Icd": "T09.2;M54.5;S39.9",
            "ID": 488,
            "IcdName": "Dislocation, sprain and strain of unspecified joint and ligament of trunk;Low back pain;Unspecified injury of abdomen, lower back and pelvis",
            "Ranking": 3,
            "ProfName": "Muscle tightness in back"
        }
    },
    "490": {
        "symptomList": [
            "pain radiating to the leg",
            "limited mobility of the leg",
            "muscular atrophy in the leg",
            "muscular weakness in the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Irritation of the sciatic nerve",
            "Accuracy": 13.5,
            "Icd": "G57.0",
            "ID": 490,
            "IcdName": "Lesion of sciatic nerve",
            "Ranking": 6,
            "ProfName": "Piriformis syndrome"
        }
    },
    "492": {
        "symptomList": [
            "back pain",
            "lower-back pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "Icd": "R52.1;R52.2",
            "ID": 492,
            "IcdName": "Chronic intractable pain;Other chronic pain",
            "Ranking": 5,
            "ProfName": "Chronic pain syndrome",
            "Name": "Chronic pain disorder",
            "Accuracy": 18
        }
    },
    "494": {
        "symptomList": [
            "abdominal pain",
            "lower abdominal pain",
            "abdominal guarding",
            "rebound tenderness"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 494,
            "IcdName": "Diverticular disease of intestine",
            "Ranking": 2,
            "ProfName": "Diverticulitis",
            "Name": "Inflammation of a diverticulum",
            "Accuracy": 86.4,
            "Icd": "K57"
        }
    },
    "495": {
        "symptomList": [
            "abdominal pain",
            "flatulence",
            "distended abdomen"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 495,
            "IcdName": "Flatulence and related conditions",
            "Ranking": 2,
            "ProfName": "Meteorism",
            "Name": "Bloated belly",
            "Accuracy": 80.99999,
            "Icd": "R14"
        }
    },
    "498": {
        "symptomList": [
            "diarrhea",
            "fatty defecation",
            "foul smelling defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Other specified diseases of pancreas",
            "Ranking": 4,
            "ProfName": "Pancreatic insufficiency",
            "Name": "Pancreas insufficiency",
            "Accuracy": 39,
            "Icd": "K86.8",
            "ID": 498
        }
    },
    "501": {
        "symptomList": [
            "abdominal pain",
            "abdominal guarding",
            "rebound tenderness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Inflammation of the peritoneum",
            "Accuracy": 54,
            "Icd": "K65",
            "ID": 501,
            "IcdName": "Peritonitis",
            "Ranking": 3,
            "ProfName": "Peritonitis"
        }
    },
    "504": {
        "symptomList": [
            "burning sensation when urinating",
            "dribbling after urination",
            "feeling of residual urine",
            "purulent discharge from the urethra"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ID": 504,
            "IcdName": "Inflammatory diseases of prostate",
            "Ranking": 5,
            "ProfName": "Prostatitis",
            "Name": "Inflammation of the prostate",
            "Accuracy": 13.8461542,
            "Icd": "N41"
        }
    },
    "505": {
        "symptomList": [
            "purulent discharge from the urethra",
            "itching or burning in the genital area"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ProfName": "Chlamydia infection in men",
            "Name": "Chlamydia infection",
            "Accuracy": 9,
            "Icd": "A55;A56;A56.0;A56.1;A56.2;A56.3;A56.4;A56.8",
            "ID": 505,
            "IcdName": "Chlamydial lymphogranuloma (venereum);Other sexually transmitted chlamydial diseases;Chlamydial infection of lower genitourinary tract;Chlamydial infection of pelviperitoneum and other genitourinary organs;Chlamydial infection of genitourinary tract, unspecified;Chlamydial infection of anus and rectum;Chlamydial infection of pharynx;Sexually transmitted chlamydial infection of other sites",
            "Ranking": 3
        }
    },
    "506": {
        "symptomList": [
            "dribbling after urination",
            "feeling of residual urine",
            "delayed start to urination"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Name": "Nerve-related bladder dysfunction",
            "Accuracy": 56.25,
            "Icd": "N31.9",
            "ID": 506,
            "IcdName": "Neuromuscular dysfunction of bladder, unspecified",
            "Ranking": 2,
            "ProfName": "Neurogenic bladder dysfunction in men"
        }
    },
    "508": {
        "symptomList": [
            "genital warts"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 508,
            "IcdName": "Other specified disorders of penis",
            "Ranking": 2,
            "ProfName": "Hirsuties papillaris genitalis",
            "Name": "Hirsuties coronae glandis",
            "Accuracy": 72,
            "Icd": "N48.8"
        }
    },
    "511": {
        "symptomList": [
            "increased urine quantity",
            "increased thirst",
            "leg swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            }
        ],
        "details": {
            "ID": 511,
            "IcdName": "Acute renal failure;Chronic kidney disease;Unspecified kidney failure",
            "Ranking": 13,
            "ProfName": "Renal insufficiency in men",
            "Name": "Renal failure",
            "Accuracy": 9.6,
            "Icd": "N17;N18;N19"
        }
    },
    "512": {
        "symptomList": [
            "limited mobility of the leg",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ProfName": "Femoroacetabular impingement",
            "Name": "Hip entrapment",
            "Accuracy": 20.2499981,
            "Icd": "M25.8",
            "ID": 512,
            "IcdName": "Other specified joint disorders",
            "Ranking": 5
        }
    },
    "513": {
        "symptomList": [
            "limited mobility of the leg",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Pelvic fracture",
            "Accuracy": 18,
            "Icd": "S32.1;S32.2;S32.3;S32.4;S32.5;S32.7;S32.8",
            "ID": 513,
            "IcdName": "Fracture of sacrum;Fracture of coccyx;Fracture of ilium;Fracture of acetabulum;Fracture of pubis;Multiple fractures of lumbar spine and pelvis;Fracture of other and unspecified parts of lumbar spine and pelvis",
            "Ranking": 7,
            "ProfName": "Fracture of the pelvic ring"
        }
    },
    "514": {
        "symptomList": [
            "bone fracture"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 514,
            "IcdName": "Hyperparathyroidism and other disorders of parathyroid gland",
            "Ranking": 16,
            "ProfName": "Hyperparathyroidism",
            "Name": "Overactivity of the parathyroid glands",
            "Accuracy": 27,
            "Icd": "E21"
        }
    },
    "516": {
        "symptomList": [
            "pain in the bones"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "IcdName": "Osteomyelitis",
            "Ranking": 5,
            "ProfName": "Osteomyelitis",
            "Name": "Inflammation of the bone marrow",
            "Accuracy": 21.4285717,
            "Icd": "M86",
            "ID": 516
        }
    },
    "517": {
        "symptomList": [
            "pain in the bones"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 517,
            "IcdName": "Periostitis in other infectious diseases classified elsewhere",
            "Ranking": 3,
            "ProfName": "Periostitis",
            "Name": "Inflammation of outer tissue layer around bone",
            "Accuracy": 42.8571434,
            "Icd": "M90.1"
        }
    },
    "518": {
        "symptomList": [
            "painful defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Cryptitis",
            "Name": "Inflammation of the anal glands",
            "Accuracy": 53.18182,
            "Icd": "K62.8",
            "ID": 518,
            "IcdName": "Other specified diseases of anus and rectum",
            "Ranking": 6
        }
    },
    "519": {
        "symptomList": [
            "painful defecation"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Anorectal abscess",
            "Name": "Anal abscess",
            "Accuracy": 28.636364,
            "Icd": "K61",
            "ID": 519,
            "IcdName": "Abscess of anal and rectal regions",
            "Ranking": 7
        }
    },
    "520": {
        "symptomList": [
            "tremor on movement",
            "pain in the calves",
            "muscle pain",
            "limited mobility of the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 520,
            "IcdName": "Myalgia",
            "Ranking": 1,
            "ProfName": "Delayed onset muscle soreness",
            "Name": "Muscle soreness",
            "Accuracy": 90,
            "Icd": "M79.1"
        }
    },
    "522": {
        "symptomList": [
            "muscle pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "IcdName": "Neuralgia and neuritis, unspecified",
            "Ranking": 3,
            "ProfName": "Neuralgia",
            "Name": "Nerve pain",
            "Accuracy": 42,
            "Icd": "M79.2",
            "ID": 522
        }
    },
    "523": {
        "symptomList": [
            "pain in the bones",
            "muscle pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "ID": 523,
            "IcdName": "Other specified disorders of bone",
            "Ranking": 4,
            "ProfName": "Ostalgia",
            "Name": "Bone pain",
            "Accuracy": 42,
            "Icd": "M89.8"
        }
    },
    "524": {
        "symptomList": [
            "cramps"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Benign muscle twitching",
            "Accuracy": 41.1428566,
            "Icd": "R25.3",
            "ID": 524,
            "IcdName": "Fasciculation",
            "Ranking": 3,
            "ProfName": "Fasciculation"
        }
    },
    "526": {
        "symptomList": [
            "stress-related leg pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Icd": "M65",
            "ID": 526,
            "IcdName": "Synovitis and tenosynovitis",
            "Ranking": 3,
            "ProfName": "Tenosynovitis",
            "Name": "Tendon sheath inflammation",
            "Accuracy": 33.75
        }
    },
    "528": {
        "symptomList": [
            "changes in the nails"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Nail growth disorder",
            "Accuracy": 78.75,
            "Icd": "L60;Q84.3;Q84.4;Q84.5;Q84.6",
            "ID": 528,
            "IcdName": "Nail disorders;Anonychia;Congenital leukonychia;Enlarged and hypertrophic nails;Other congenital malformations of nails",
            "Ranking": 3,
            "ProfName": "Nail growth dysfunction"
        }
    },
    "529": {
        "symptomList": [
            "hair loss",
            "bold area among hair on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Circular hair loss",
            "Accuracy": 90,
            "Icd": "L63;L64;L65.2;L65.8;L65.9",
            "ID": 529,
            "IcdName": "Alopecia areata;Androgenic alopecia;Alopecia mucinosa;Other specified nonscarring hair loss;Nonscarring hair loss, unspecified",
            "Ranking": 1,
            "ProfName": "Alopecia areata"
        }
    },
    "530": {
        "symptomList": [
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "Name": "Inflammation of inner ear labyrinth",
            "Accuracy": 10.7999992,
            "Icd": "H83.0",
            "ID": 530,
            "IcdName": "Labyrinthitis",
            "Ranking": 17,
            "ProfName": "Labyrinthitis"
        }
    },
    "531": {
        "symptomList": [
            "eye blinking"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ID": 531,
            "IcdName": "Combined vocal and multiple motor tic disorder [de la Tourette]",
            "Ranking": 2,
            "ProfName": "Gilles de la Tourette syndrome",
            "Name": "Tourette's syndrome",
            "Accuracy": 60,
            "Icd": "F95.2"
        }
    },
    "532": {
        "symptomList": [
            "vision impairment",
            "blurred vision"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "Name": "Corneal distorsion",
            "Accuracy": 22.5,
            "Icd": "H52.2",
            "ID": 532,
            "IcdName": "Astigmatism",
            "Ranking": 6,
            "ProfName": "Astigmatism"
        }
    },
    "533": {
        "symptomList": [
            "back pain",
            "difficulty with movement",
            "limited mobility of the back",
            "hand pain",
            "limited mobility of the leg",
            "joint instability",
            "morning stiffness",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 533,
            "IcdName": "Dislocation, sprain and strain of unspecified body region",
            "Ranking": 5,
            "ProfName": "Strain or sprain injury of the muscle tendon unit and ligaments",
            "Name": "Strain, sprain or weakness of the muscle tendon unit and ligaments",
            "Accuracy": 31.5,
            "Icd": "T14.3"
        }
    },
    "534": {
        "symptomList": [
            "joint instability",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Muscular weakness",
            "Accuracy": 90,
            "Icd": "M62.9",
            "ID": 534,
            "IcdName": "Disorder of muscle, unspecified",
            "Ranking": 1,
            "ProfName": "General muscle weakness"
        }
    },
    "536": {
        "symptomList": [
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 536,
            "IcdName": "Varus deformity, not elsewhere classified;Other congenital deformities of hip",
            "Ranking": 9,
            "ProfName": "Coxa vara and valga",
            "Name": "Deformity of the hip joint",
            "Accuracy": 11.25,
            "Icd": "M21.1;Q65.8"
        }
    },
    "537": {
        "symptomList": [
            "ankle swelling",
            "joint instability",
            "blue spot on skin",
            "foot pain",
            "limited mobility of the ankle",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Sprained ankle",
            "Accuracy": 18,
            "Icd": "S93.4",
            "ID": 537,
            "IcdName": "Sprain and strain of ankle",
            "Ranking": 6,
            "ProfName": "Ankle sprain"
        }
    },
    "538": {
        "symptomList": [
            "pain in the calves",
            "foot pain",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 538,
            "IcdName": "Enthesopathy, unspecified",
            "Ranking": 10,
            "ProfName": "Tendinitis",
            "Name": "Inflammation of the tendon",
            "Accuracy": 9,
            "Icd": "M77.9"
        }
    },
    "539": {
        "symptomList": [
            "muscular atrophy in the leg",
            "muscular weakness in the leg",
            "numbness in the leg",
            "foot pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 539,
            "IcdName": "Tarsal tunnel syndrome",
            "Ranking": 9,
            "ProfName": "Posterior tibial neuralgia",
            "Name": "Tarsal tunnel syndrome",
            "Accuracy": 26.4705887,
            "Icd": "G57.5"
        }
    },
    "540": {
        "symptomList": [
            "disorientation regarding time or place",
            "tongue burning"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 540,
            "IcdName": "Deficiency of other specified B group vitamins",
            "Ranking": 2,
            "ProfName": "Vitamin B12 deficiency",
            "Name": "Lack of vitamin B12",
            "Accuracy": 84.37499,
            "Icd": "E53.8"
        }
    },
    "541": {
        "symptomList": [
            "leg cramps",
            "foot pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Cramp and spasm",
            "Ranking": 1,
            "ProfName": "Benign muscle spasms",
            "Name": "Benign muscle cramps",
            "Accuracy": 90,
            "Icd": "R25.2",
            "ID": 541
        }
    },
    "542": {
        "symptomList": [
            "formation of blisters on a skin area"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Blistering disease",
            "Accuracy": 16.0714283,
            "Icd": "L10.0",
            "ID": 542,
            "IcdName": "Pemphigus vulgaris",
            "Ranking": 6,
            "ProfName": "Pemphigus vulgaris"
        }
    },
    "543": {
        "symptomList": [
            "formation of blisters on a skin area",
            "crusting"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "School sores",
            "Accuracy": 90,
            "Icd": "L01",
            "ID": 543,
            "IcdName": "Impetigo",
            "Ranking": 2,
            "ProfName": "Impetigo"
        }
    },
    "544": {
        "symptomList": [
            "yellow colored skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 544,
            "IcdName": "Abnormal level of blood mineral",
            "Ranking": 6,
            "ProfName": "Hemochromatosis",
            "Name": "Iron storage disease",
            "Accuracy": 11.999999,
            "Icd": "R79.0"
        }
    },
    "545": {
        "symptomList": [
            "itching of skin",
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Itchy skin nodule",
            "Accuracy": 15.36,
            "Icd": "L28.2",
            "ID": 545,
            "IcdName": "Other prurigo",
            "Ranking": 7,
            "ProfName": "Prurigo"
        }
    },
    "546": {
        "symptomList": [
            "itching of skin",
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Lichen planus",
            "Ranking": 6,
            "ProfName": "Lichen planus",
            "Name": "Lichenoid lesion",
            "Accuracy": 24.96,
            "Icd": "L43",
            "ID": 546
        }
    },
    "547": {
        "symptomList": [
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 547,
            "IcdName": "Follicular disorder, unspecified",
            "Ranking": 3,
            "ProfName": "Folliculitis",
            "Name": "Inflammation of hair follicles",
            "Accuracy": 38.4,
            "Icd": "L73.9"
        }
    },
    "548": {
        "symptomList": [
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 548,
            "IcdName": "Mixed hyperlipidaemia;Granuloma and granuloma-like lesions of oral mucosa",
            "Ranking": 8,
            "ProfName": "Xanthoma",
            "Name": "Yellow skin bumps",
            "Accuracy": 13.44,
            "Icd": "E78.2;K13.4"
        }
    },
    "549": {
        "symptomList": [
            "skin nodules"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Icd": "L11.0;L87.0;L85.8;Q82.8",
            "ID": 549,
            "IcdName": "Acquired keratosis follicularis;Keratosis follicularis et parafollicularis in cutem penetrans [Kyrle];Other specified epidermal thickening;Other specified congenital malformations of skin",
            "Ranking": 2,
            "ProfName": "Keratosis pilaris",
            "Name": "Chicken skin",
            "Accuracy": 57.6
        }
    },
    "550": {
        "symptomList": [
            "skin nodules",
            "skin rash",
            "hardening of the skin",
            "skin thickening"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Sun-related keratosis",
            "Accuracy": 90,
            "Icd": "L57.0",
            "ID": 550,
            "IcdName": "Actinic keratosis",
            "Ranking": 1,
            "ProfName": "Actinic keratosis"
        }
    },
    "551": {
        "symptomList": [
            "skin lesion",
            "skin redness",
            "skin rash"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 551,
            "IcdName": "Rosacea",
            "Ranking": 14,
            "ProfName": "Rosacea",
            "Name": "Redness causing skin condition",
            "Accuracy": 21,
            "Icd": "L71"
        }
    },
    "552": {
        "symptomList": [
            "hardening of the skin",
            "skin thickening",
            "scar"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 552,
            "IcdName": "Hypertrophic scar",
            "Ranking": 5,
            "ProfName": "Keloid",
            "Name": "Keloidal scar",
            "Accuracy": 9.45,
            "Icd": "L91.0"
        }
    },
    "553": {
        "symptomList": [
            "hardening of the skin",
            "skin thickening"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Benign skin tag",
            "Accuracy": 50.4,
            "Icd": "D10;D11;D12;D13;D14;D15;D16;D17;D18;D19;D20;D21;D22;D23;D24;D25;D26;D27;D28;D29;D30;D31;D32;D33;D34;D35;D36",
            "ID": 553,
            "IcdName": "Benign neoplasm of mouth and pharynx;Benign neoplasm of major salivary glands;Benign neoplasm of colon, rectum, anus and anal canal;Benign neoplasm of other and ill-defined parts of digestive system;Benign neoplasm of middle ear and respiratory system;Benign neoplasm of other and unspecified intrathoracic organs;Benign neoplasm of bone and articular cartilage;Benign lipomatous neoplasm;Haemangioma and lymphangioma, any site;Benign neoplasm of mesothelial tissue;Benign neoplasm of soft tissue of retroperitoneum and peritoneum;Other benign neoplasms of connective and other soft tissue;Melanocytic naevi;Other benign neoplasms of skin;Benign neoplasm of breast;Leiomyoma of uterus;Other benign neoplasms of uterus;Benign neoplasm of ovary;Benign neoplasm of other and unspecified female genital organs;Benign neoplasm of male genital organs;Benign neoplasm of urinary organs;Benign neoplasm of eye and adnexa;Benign neoplasm of meninges;Benign neoplasm of brain and other parts of central nervous system;Benign neoplasm of thyroid gland;Benign neoplasm of other and unspecified endocrine glands;enign neoplasm of other and unspecified sites",
            "Ranking": 5,
            "ProfName": "Fibroma"
        }
    },
    "554": {
        "symptomList": [
            "going black before the eyes",
            "disorientation regarding time or place",
            "cold sweats",
            "dizziness",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 554,
            "IcdName": "Drug-induced hypoglycaemia without coma;Other hypoglycaemia;Hypoglycaemia, unspecified",
            "Ranking": 3,
            "ProfName": "Hypoglycaemia",
            "Name": "Low blood sugar",
            "Accuracy": 80.99999,
            "Icd": "E16.0;E16.1;E16.2"
        }
    },
    "556": {
        "symptomList": [
            "sensitivity to cold"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 556,
            "IcdName": "Hypopituitarism;Postprocedural hypopituitarism",
            "Ranking": 5,
            "ProfName": "Hypopituitarism",
            "Name": "Hypofunction of pituitary gland",
            "Accuracy": 30,
            "Icd": "E23.0;E89.3"
        }
    },
    "557": {
        "symptomList": [
            "sleepiness with spontaneous falling asleep"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 557,
            "IcdName": "Narcolepsy and cataplexy",
            "Ranking": 4,
            "ProfName": "Narcolepsy",
            "Name": "Extreme tendency to fall asleep",
            "Accuracy": 12,
            "Icd": "G47.4"
        }
    },
    "558": {
        "symptomList": [
            "drooping eyelid"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Congenital eyelid levator weakness",
            "Accuracy": 90,
            "Icd": "Q10.0",
            "ID": 558,
            "IcdName": "Congenital ptosis",
            "Ranking": 1,
            "ProfName": "Congenital ptosis"
        }
    },
    "559": {
        "symptomList": [
            "drooping eyelid"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "Icd": "H02.4",
            "ID": 559,
            "IcdName": "Ptosis of eyelid",
            "Ranking": 2,
            "ProfName": "Paralytic ptosis",
            "Name": "Damage to the eye muscle nerves",
            "Accuracy": 67.5
        }
    },
    "561": {
        "symptomList": [
            "eye blinking"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Icd": "F42",
            "ID": 561,
            "IcdName": "Obsessive-compulsive disorder",
            "Ranking": 1,
            "ProfName": "Obsessive-compulsive personality disorder",
            "Name": "Obsessive-compulsive disorder",
            "Accuracy": 90
        }
    },
    "562": {
        "symptomList": [
            "chest pain",
            "breathing-related pains"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Broken rib",
            "Accuracy": 37.5,
            "Icd": "S22.3;S22.4",
            "ID": 562,
            "IcdName": "Fracture of rib;Multiple fractures of ribs",
            "Ranking": 5,
            "ProfName": "Rib fracture"
        }
    },
    "563": {
        "symptomList": [
            "night cough"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 563,
            "IcdName": "Aortic (valve) insufficiency;Rheumatic aortic insufficiency;Congenital insufficiency of aortic valve",
            "Ranking": 7,
            "ProfName": "Aortic insufficiency",
            "Name": "Inadequate closure of the aortic valve",
            "Accuracy": 18,
            "Icd": "I35.1;I06.1;Q23.1"
        }
    },
    "564": {
        "symptomList": [
            "early satiety"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Achalasia of cardia",
            "Ranking": 3,
            "ProfName": "Achalasia",
            "Name": "Dysfunction of the esophagus",
            "Accuracy": 67.5,
            "Icd": "K22.0",
            "ID": 564
        }
    },
    "565": {
        "symptomList": [
            "early satiety"
        ],
        "specialisation": [
            {
                "SpecialistID": 40,
                "Name": "Gastroenterology",
                "ID": 14
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 565,
            "IcdName": "Malignant neoplasm of oesophagus;Malignant neoplasm of stomach;Malignant neoplasm of small intestine;Malignant neoplasm of liver and intrahepatic bile ducts;Malignant neoplasm of gallbladder;Malignant neoplasm of other and unspecified parts of biliary tract;Malignant neoplasm of pancreas;Benign neoplasm of other and ill-defined parts of digestive system",
            "Ranking": 5,
            "ProfName": "Neoplasia of the upper gastro-intestinal tract",
            "Name": "Neoplasia of the upper digestive tract",
            "Accuracy": 18,
            "Icd": "C15;C16;C17;C22;C23;C24;C25;C26;D12;D13"
        }
    },
    "566": {
        "symptomList": [
            "back pain",
            "bone fracture",
            "back deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Vertebral fracture",
            "Accuracy": 45,
            "Icd": "S12;S22;S32",
            "ID": 566,
            "IcdName": "Fracture of neck;Fracture of rib(s), sternum and thoracic spine;Fracture of lumbar spine and pelvis",
            "Ranking": 2,
            "ProfName": "Vertebral body fracture"
        }
    },
    "568": {
        "symptomList": [
            "pain radiating to the leg"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "Name": "Nerve root irritation of the lumbar spine",
            "Accuracy": 72,
            "Icd": "M54.3;M54.4",
            "ID": 568,
            "IcdName": "Sciatica;Lumbago with sciatica",
            "Ranking": 2,
            "ProfName": "Lumbar radiculopathy"
        }
    },
    "572": {
        "symptomList": [
            "increased thirst",
            "going black before the eyes",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Hypotension",
            "Ranking": 3,
            "ProfName": "Hypotension",
            "Name": "Low blood pressure",
            "Accuracy": 45,
            "Icd": "I95",
            "ID": 572
        }
    },
    "574": {
        "symptomList": [
            "hair loss",
            "bold area among hair on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 574,
            "IcdName": "Follicular disorder, unspecified;Cutaneous abscess, furuncle and carbuncle;Seborrhoea capitis;Tinea barbae and tinea capitis;Zoster [herpes zoster]",
            "Ranking": 5,
            "ProfName": "Bacterial, fungal or viral scalp infection",
            "Name": "Scalp infection",
            "Accuracy": 9,
            "Icd": "L73.9;L02;L21.0;B35.0;B02"
        }
    },
    "575": {
        "symptomList": [
            "going black before the eyes",
            "feeling faint"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            }
        ],
        "details": {
            "ID": 575,
            "IcdName": "Syncope and collapse",
            "Ranking": 6,
            "ProfName": "Syncope",
            "Name": "Fainting",
            "Accuracy": 45,
            "Icd": "R55"
        }
    },
    "579": {
        "symptomList": [
            "disorientation regarding time or place",
            "absence of a pulse",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Icd": "F05",
            "ID": 579,
            "IcdName": "Delirium, not induced by alcohol and other psychoactive substances",
            "Ranking": 3,
            "ProfName": "Delirium",
            "Name": "Confusional state",
            "Accuracy": 66
        }
    },
    "580": {
        "symptomList": [
            "difficulty to concentrate",
            "going black before the eyes",
            "difficulty in speaking",
            "forgetfulness",
            "disorientation regarding time or place",
            "sadness",
            "hallucination",
            "agitation",
            "feeling faint",
            "trouble understanding speech"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "ProfName": "Excessive alcohol consumption",
            "Name": "Alcohol consumption",
            "Accuracy": 90,
            "Icd": "F10.0;T51",
            "ID": 580,
            "IcdName": "Mental and behavioural disorders due to use of alcohol;Toxic effect of alcohol",
            "Ranking": 1
        }
    },
    "581": {
        "symptomList": [
            "eye redness",
            "burning eyes",
            "feeling of foreign body in the eye"
        ],
        "specialisation": [
            {
                "SpecialistID": 1,
                "Name": "Allergology",
                "ID": 5
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 8,
                "Name": "Ophthalmology",
                "ID": 30
            }
        ],
        "details": {
            "ProfName": "Allergic conjunctivitis",
            "Name": "Eye allergy",
            "Accuracy": 67.5,
            "Icd": "H10",
            "ID": 581,
            "IcdName": "Conjunctivitis",
            "Ranking": 2
        }
    },
    "584": {
        "symptomList": [
            "chest pain",
            "changes in the nails",
            "bone fracture",
            "bleeding in the conjunctiva of the eye",
            "wound",
            "rebound tenderness",
            "blue spot on skin",
            "scar",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 584,
            "IcdName": "Certain early complications of trauma, not elsewhere classified",
            "Ranking": 9,
            "ProfName": "Trauma",
            "Name": "Accident injury",
            "Accuracy": 12.6,
            "Icd": "T79"
        }
    },
    "585": {
        "symptomList": [
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 67,
                "Name": "Rheumatology",
                "ID": 41
            }
        ],
        "details": {
            "IcdName": "Immunodeficiency, unspecified;Systemic involvement of connective tissue, unspecified",
            "Ranking": 12,
            "ProfName": "Autoimmune disorders",
            "Name": "Autoimmune disease",
            "Accuracy": 9.562499,
            "Icd": "D84.9;M35.9",
            "ID": 585
        }
    },
    "586": {
        "symptomList": [
            "disorientation regarding time or place"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Icd": "A40;A41",
            "ID": 586,
            "IcdName": "Streptococcal sepsis;Other sepsis",
            "Ranking": 9,
            "ProfName": "Sepsis",
            "Name": "Blood poisoning",
            "Accuracy": 19.2857113
        }
    },
    "587": {
        "symptomList": [
            "difficulty in swallowing",
            "mouth pain",
            "dry mouth"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 587,
            "IcdName": "Candidiasis",
            "Ranking": 5,
            "ProfName": "Candidiasis",
            "Name": "Yeast infection",
            "Accuracy": 45,
            "Icd": "B37"
        }
    },
    "596": {
        "symptomList": [
            "agitation"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 596,
            "IcdName": "Mental and behavioural disorders due to use of other stimulants, including caffeine",
            "Ranking": 5,
            "ProfName": "Caffeine dependence",
            "Name": "Caffeine withdrawal",
            "Accuracy": 45,
            "Icd": "F15"
        }
    },
    "599": {
        "symptomList": [
            "difficulty with movement",
            "aggressiveness",
            "sadness",
            "hallucination",
            "agitation"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Icd": "F09;F23.8;F23.9",
            "ID": 599,
            "IcdName": "Unspecified organic or symptomatic mental disorder;Other acute and transient psychotic disorders;Acute and transient psychotic disorder, unspecified",
            "Ranking": 2,
            "ProfName": "Psychogenic disorder",
            "Name": "Psychogenic issues",
            "Accuracy": 90
        }
    },
    "600": {
        "symptomList": [
            "nausea",
            "dizziness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ID": 600,
            "IcdName": "Motion sickness",
            "Ranking": 9,
            "ProfName": "Kinetosis",
            "Name": "Motion sickness",
            "Accuracy": 25.2,
            "Icd": "T75.3"
        }
    },
    "602": {
        "symptomList": [
            "fast, deepened breathing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 45,
                "Name": "Neurology",
                "ID": 27
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Name": "Pain",
            "Accuracy": 12,
            "Icd": "R52",
            "ID": 602,
            "IcdName": "Pain, not elsewhere classified",
            "Ranking": 9,
            "ProfName": "Pain-related issues"
        }
    },
    "604": {
        "symptomList": [
            "burning sensation when urinating",
            "purulent discharge from the urethra",
            "purulent discharge from the vagina",
            "swollen glands in the groin",
            "itching or burning in the genital area"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "ProfName": "Sexually transmitted infections",
            "Name": "Sexually transmitted diseases",
            "Accuracy": 36,
            "Icd": "A64",
            "ID": 604,
            "IcdName": "Unspecified sexually transmitted disease",
            "Ranking": 2
        }
    },
    "606": {
        "symptomList": [
            "weight loss",
            "weight gain",
            "reduced appetite",
            "nervousness",
            "forgetfulness",
            "increased appetite",
            "hair loss",
            "bold area among hair on the head"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "IcdName": "Other reactions to severe stress;Reaction to severe stress, unspecified",
            "Ranking": 6,
            "ProfName": "Stress",
            "Name": "State of stress",
            "Accuracy": 9,
            "Icd": "F43.8;F43.9",
            "ID": 606
        }
    },
    "608": {
        "symptomList": [
            "ringing in the ear"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 49,
                "Name": "Otolaryngology",
                "ID": 32
            }
        ],
        "details": {
            "IcdName": "Exposure to noise;Occupational exposure to noise;Exposure to noise",
            "Ranking": 3,
            "ProfName": "Excessive exposure to noise",
            "Name": "Excessive noise exposure",
            "Accuracy": 48,
            "Icd": "W42;Z57.0;Z58.0",
            "ID": 608
        }
    },
    "612": {
        "symptomList": [
            "face pain",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 62,
                "Name": "Psychiatry",
                "ID": 36
            }
        ],
        "details": {
            "Icd": "F45.8",
            "ID": 612,
            "IcdName": "Other somatoform disorders",
            "Ranking": 12,
            "ProfName": "Bruxism",
            "Name": "Grinding of teeth",
            "Accuracy": 9
        }
    },
    "613": {
        "symptomList": [
            "mouth pain",
            "face pain",
            "pain when chewing"
        ],
        "specialisation": [
            {
                "SpecialistID": 71,
                "Name": "Dentistry",
                "ID": 43
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "IcdName": "Dental caries",
            "Ranking": 2,
            "ProfName": "Dental caries",
            "Name": "Caries",
            "Accuracy": 90,
            "Icd": "K02",
            "ID": 613
        }
    },
    "654": {
        "symptomList": [
            "dizziness",
            "leg swelling",
            "foot swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 25,
                "Name": "Cardiology",
                "ID": 1
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ProfName": "Cardiomyopathies",
            "Name": "Heart muscle disease",
            "Accuracy": 9.449999,
            "Icd": "I25.5;I42;I43",
            "ID": 654,
            "IcdName": "Ischaemic cardiomyopathy;Cardiomyopathy;Cardiomyopathy in diseases classified elsewhere",
            "Ranking": 10
        }
    },
    "655": {
        "symptomList": [
            "hand pain",
            "leg swelling",
            "arm swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "ID": 655,
            "IcdName": "Lymphoedema, not elsewhere classified;Postmastectomy lymphoedema syndrome;Hereditary lymphoedema",
            "Ranking": 2,
            "ProfName": "Lymphedema",
            "Name": "Lymphatic obstruction",
            "Accuracy": 90,
            "Icd": "I89.0;I97.2;Q82.0"
        }
    },
    "656": {
        "symptomList": [
            "abdominal pain",
            "chest pain",
            "back pain",
            "skin rash",
            "side pain",
            "face pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            }
        ],
        "details": {
            "Name": "Shingles",
            "Accuracy": 22.0588226,
            "Icd": "B02",
            "ID": 656,
            "IcdName": "",
            "Ranking": 10,
            "ProfName": "Herpes zoster"
        }
    },
    "658": {
        "symptomList": [
            "abdominal pain",
            "increased urine quantity",
            "frequent urination",
            "burning sensation when urinating",
            "dark urine",
            "urge to urinate",
            "dribbling after urination",
            "feeling of residual urine",
            "lower abdominal pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 47,
                "Name": "Nephrology",
                "ID": 26
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Icd": "N39.0",
            "ID": 658,
            "IcdName": "Urinary tract infection, site not specified",
            "Ranking": 2,
            "ProfName": "Urinary tract infection in men",
            "Name": "Urinary tract infection",
            "Accuracy": 22.5
        }
    },
    "659": {
        "symptomList": [
            "burning sensation when urinating",
            "purulent discharge from the urethra",
            "itching or burning in the genital area"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 4,
                "Name": "Internal medicine",
                "ID": 19
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "ID": 659,
            "IcdName": "Urethritis and urethral syndrome",
            "Ranking": 1,
            "ProfName": "Urethritis in men",
            "Name": "Inflammation of the urethra",
            "Accuracy": 90,
            "Icd": "N34"
        }
    },
    "660": {
        "symptomList": [
            "genital warts"
        ],
        "specialisation": [
            {
                "SpecialistID": 22,
                "Name": "Dermatology",
                "ID": 11
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 9,
                "Name": "Urology",
                "ID": 42
            }
        ],
        "details": {
            "Name": "Genital warts",
            "Accuracy": 90,
            "Icd": "A63.0",
            "ID": 660,
            "IcdName": "Anogenital (venereal) warts",
            "Ranking": 1,
            "ProfName": "Condyloma acuminatum in men"
        }
    },
    "661": {
        "symptomList": [
            "lump in the breast"
        ],
        "specialisation": [
            {
                "SpecialistID": 26,
                "Name": "Endocrinology",
                "ID": 12
            },
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "Name": "Inflammation of the breast tissue",
            "Accuracy": 90,
            "Icd": "N61",
            "ID": 661,
            "IcdName": "Inflammatory disorders of breast",
            "Ranking": 1,
            "ProfName": "Mastitis in men"
        }
    },
    "673": {
        "symptomList": [
            "muscle stiffness",
            "muscular weakness in the arm",
            "muscular atrophy of the arm",
            "muscular atrophy in the leg",
            "muscular weakness in the leg",
            "muscle weakness"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            }
        ],
        "details": {
            "Name": "Progressive muscle weakness",
            "Accuracy": 13.2,
            "Icd": "G71.0",
            "ID": 673,
            "IcdName": "Muscular dystrophy",
            "Ranking": 6,
            "ProfName": "Muscular dystrophy"
        }
    },
    "674": {
        "symptomList": [
            "lump in the breast"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 15,
                "Name": "Gynecology",
                "ID": 18
            },
            {
                "SpecialistID": 57,
                "Name": "Plastic surgery",
                "ID": 10
            },
            {
                "SpecialistID": 13,
                "Name": "Surgery",
                "ID": 39
            }
        ],
        "details": {
            "ID": 674,
            "IcdName": "Malignant neoplasm of breast",
            "Ranking": 2,
            "ProfName": "Carcinoma of the breast in men",
            "Name": "Breast cancer",
            "Accuracy": 10.3679991,
            "Icd": "C50"
        }
    },
    "675": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "joint swelling",
            "blue spot on skin",
            "arm swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 675,
            "IcdName": "Fracture of shoulder and upper arm;Fracture of forearm;Fracture of upper limb, level unspecified",
            "Ranking": 3,
            "ProfName": "Bone trauma of arm",
            "Name": "Accident-related bone fracture of arm",
            "Accuracy": 76.49999,
            "Icd": "S42;S52;T10"
        }
    },
    "676": {
        "symptomList": [
            "hand swelling",
            "pain in the bones",
            "bone fracture",
            "joint swelling",
            "joint instability",
            "blue spot on skin",
            "finger deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 676,
            "IcdName": "Fracture at wrist and hand level",
            "Ranking": 1,
            "ProfName": "Bone trauma of finger",
            "Name": "Accident-related bone fracture of finger",
            "Accuracy": 90,
            "Icd": "S62"
        }
    },
    "677": {
        "symptomList": [
            "hand swelling",
            "pain in the bones",
            "bone fracture",
            "hand pain",
            "joint swelling",
            "blue spot on skin",
            "finger deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Accident-related bone fracture of hand",
            "Accuracy": 90,
            "Icd": "S62",
            "ID": 677,
            "IcdName": "Fracture at wrist and hand level",
            "Ranking": 2,
            "ProfName": "Bone trauma of hand"
        }
    },
    "678": {
        "symptomList": [
            "hand swelling",
            "pain in the bones",
            "bone fracture",
            "hand pain",
            "joint swelling",
            "joint instability",
            "blue spot on skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Accident-related bone fracture of wrist",
            "Accuracy": 45,
            "Icd": "S62",
            "ID": 678,
            "IcdName": "Fracture at wrist and hand level",
            "Ranking": 16,
            "ProfName": "Bone trauma of wrist"
        }
    },
    "679": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "joint swelling",
            "joint instability",
            "blue spot on skin",
            "arm swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Accident-related bone fracture of elbow",
            "Accuracy": 76.49999,
            "Icd": "S52",
            "ID": 679,
            "IcdName": "Fracture of forearm",
            "Ranking": 4,
            "ProfName": "Bone trauma of elbow"
        }
    },
    "680": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "joint swelling",
            "joint instability",
            "blue spot on skin",
            "arm swelling"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Icd": "S42",
            "ID": 680,
            "IcdName": "Fracture of shoulder and upper arm",
            "Ranking": 5,
            "ProfName": "Bone trauma of shoulder",
            "Name": "Accident-related bone fracture of shoulder",
            "Accuracy": 76.49999
        }
    },
    "681": {
        "symptomList": [
            "ankle swelling",
            "pain in the bones",
            "bone fracture",
            "limited mobility of the leg",
            "leg swelling",
            "blue spot on skin",
            "ankle deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Accident-related bone fracture of leg",
            "Accuracy": 37.5,
            "Icd": "S72;S82;T12",
            "ID": 681,
            "IcdName": "Fracture of femur;Fracture of lower leg, including ankle;Fracture of lower limb, level unspecified",
            "Ranking": 3,
            "ProfName": "Bone trauma of leg"
        }
    },
    "682": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "blue spot on skin",
            "foot pain",
            "toe deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 682,
            "IcdName": "Fracture of foot, except ankle",
            "Ranking": 2,
            "ProfName": "Bone trauma of toe",
            "Name": "Accident-related bone fracture of toe",
            "Accuracy": 45,
            "Icd": "S92"
        }
    },
    "683": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "blue spot on skin",
            "foot pain"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 683,
            "IcdName": "Fracture of foot, except ankle",
            "Ranking": 5,
            "ProfName": "Bone trauma of foot",
            "Name": "Accident-related bone fracture of foot",
            "Accuracy": 66.70588,
            "Icd": "S92"
        }
    },
    "684": {
        "symptomList": [
            "ankle swelling",
            "pain in the bones",
            "bone fracture",
            "joint instability",
            "blue spot on skin",
            "foot pain",
            "limited mobility of the ankle",
            "ankle deformity"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 684,
            "IcdName": "Fracture of lower leg, including ankle",
            "Ranking": 2,
            "ProfName": "Bone trauma of ankle",
            "Name": "Accident-related bone fracture of ankle",
            "Accuracy": 75,
            "Icd": "S82"
        }
    },
    "685": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "limited mobility of the leg",
            "joint instability",
            "blue spot on skin"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "Name": "Accident-related bone fracture of knee",
            "Accuracy": 45,
            "Icd": "S82;T12",
            "ID": 685,
            "IcdName": "Fracture of lower leg, including ankle;Fracture of lower limb, level unspecified",
            "Ranking": 12,
            "ProfName": "Bone trauma of knee"
        }
    },
    "686": {
        "symptomList": [
            "pain in the bones",
            "bone fracture",
            "joint instability",
            "blue spot on skin",
            "limited mobility of the hip"
        ],
        "specialisation": [
            {
                "SpecialistID": 3,
                "Name": "General practice",
                "ID": 15
            },
            {
                "SpecialistID": 77,
                "Name": "Orthopedics",
                "ID": 31
            }
        ],
        "details": {
            "ID": 686,
            "IcdName": "Fracture of femur",
            "Ranking": 8,
            "ProfName": "Bone trauma of hip",
            "Name": "Accident-related bone fracture of hip",
            "Accuracy": 13.500001,
            "Icd": "S72"
        }
    }
}

export const symptomIDToName = {
    "9": "headache",
    "10": "abdominal pain",
    "11": "fever",
    "12": "pain in the limbs",
    "13": "sore throat",
    "14": "runny nose",
    "15": "cough",
    "16": "tiredness",
    "17": "chest pain",
    "21": "itching of skin",
    "22": "weight loss",
    "23": "weight gain",
    "24": "blackhead",
    "25": "skin nodules",
    "26": "skin lesion",
    "27": "joint pain",
    "28": "stuffy nose",
    "29": "shortness of breath",
    "30": "wheezing",
    "31": "chest tightness",
    "33": "eye redness",
    "34": "skin wheal",
    "35": "lip swelling",
    "37": "palpitations",
    "38": "nosebleed",
    "39": "increased urine quantity",
    "40": "increased thirst",
    "43": "stupor",
    "44": "nausea",
    "45": "heartburn",
    "46": "burning in the throat",
    "47": "joylessness",
    "48": "bloated feeling in the stomach",
    "49": "cravings",
    "50": "diarrhea",
    "52": "sleeplessness",
    "53": "difficulty to concentrate",
    "54": "reduced appetite",
    "57": "going black before the eyes",
    "59": "frequent urination",
    "60": "sensitivity to cold",
    "61": "skin redness",
    "62": "formation of blisters on a skin area",
    "63": "non-healing skin wound",
    "64": "sputum",
    "65": "irregular mole",
    "66": "visual field loss",
    "68": "vision impairment",
    "69": "sensitivity to glare",
    "70": "impaired light-dark adaptation",
    "71": "double vision",
    "72": "halo",
    "73": "itching eyes",
    "75": "burning eyes",
    "76": "feeling of foreign body in the eye",
    "77": "blurred vision",
    "78": "ringing in the ear",
    "79": "difficult defecation",
    "80": "hard defecation",
    "81": "incomplete defecation",
    "82": "less than 3 defecations per week",
    "83": "fatty defecation",
    "84": "foul smelling defecation",
    "85": "mood swings",
    "86": "feeling of pressure in the ear",
    "87": "earache",
    "88": "itching in the ear",
    "89": "cold feet",
    "90": "impaired hearing",
    "91": "changes in the nails",
    "92": "early satiety",
    "93": "difficulty in swallowing",
    "94": "cramps",
    "95": "sneezing",
    "96": "itching in the nose",
    "97": "mouth ulcers",
    "98": "difficulty in speaking",
    "101": "vomiting",
    "102": "sensitivity to noise",
    "103": "pain radiating to the leg",
    "104": "back pain",
    "105": "yellow colored skin",
    "106": "yellowish discoloration of the white part of the eye",
    "107": "burning sensation when urinating",
    "108": "dark urine",
    "109": "painful urination",
    "110": "genital warts",
    "112": "menstruation disorder",
    "113": "impairment of male potency",
    "114": "nervousness",
    "115": "tremor at rest",
    "116": "underweight",
    "118": "difficulty with movement",
    "119": "muscle stiffness",
    "120": "impaired balance",
    "121": "hoarseness",
    "122": "hiccups",
    "123": "missed period",
    "124": "skin rash",
    "125": "forgetfulness",
    "126": "difficulty in finding words",
    "128": "disorientation regarding time or place",
    "129": "problems with the sense of touch in the face",
    "130": "problems with the sense of touch in the feet",
    "131": "increased appetite",
    "132": "tremor on movement",
    "133": "night cough",
    "134": "crusting",
    "135": "mouth pain",
    "136": "neck pain",
    "137": "oversensitivity to light",
    "138": "sweating",
    "139": "cold sweats",
    "140": "paralysis",
    "142": "pain in the calves",
    "143": "leg ulcer",
    "144": "unconsciousness, short",
    "145": "feeling of tension in the legs",
    "146": "leg cramps",
    "147": "ankle swelling",
    "148": "hand swelling",
    "149": "hot flushes",
    "150": "pallor",
    "151": "dry skin",
    "152": "hair loss",
    "153": "fast, deepened breathing",
    "154": "flatulence",
    "155": "pain in the bones",
    "156": "bone fracture",
    "157": "overweight",
    "160": "urge to urinate",
    "161": "urination during the night",
    "162": "dribbling after urination",
    "163": "decreased urine stream",
    "164": "feeling of residual urine",
    "165": "delayed start to urination",
    "166": "vision impairment for near objects",
    "167": "limited mobility of the back",
    "168": "muscular weakness in the arm",
    "169": "swollen glands on the neck",
    "170": "cheek swelling",
    "172": "purulent discharge from the urethra",
    "173": "purulent discharge from the vagina",
    "174": "lower abdominal pain",
    "175": "chills",
    "176": "bleeding in the conjunctiva of the eye",
    "177": "muscle pain",
    "178": "limited mobility of the fingers",
    "179": "stomach burning",
    "180": "black stools",
    "181": "vomiting blood",
    "183": "side pain",
    "184": "hardening of the skin",
    "185": "stress-related leg pain",
    "186": "hand pain",
    "187": "wound",
    "188": "abdominal guarding",
    "189": "painful defecation",
    "190": "blood in stool",
    "191": "rebound tenderness",
    "192": "bulging abdominal wall",
    "193": "joint swelling",
    "194": "joint effusion",
    "195": "limited mobility of the leg",
    "196": "hip pain",
    "197": "immobilization",
    "198": "joint instability",
    "200": "numbness of the hands",
    "201": "tingling",
    "202": "muscular atrophy of the arm",
    "203": "pain on swallowing",
    "204": "increased salivation",
    "205": "lockjaw",
    "206": "hearing loss",
    "207": "dizziness",
    "208": "eye lid swelling",
    "209": "eye lids sticking together",
    "210": "loss of eye lashes",
    "211": "tears",
    "213": "vision impairment for far objects",
    "214": "flaking skin",
    "215": "moist and softened skin",
    "216": "discoloration of nails",
    "217": "skin thickening",
    "218": "coarsening of the skin structure",
    "219": "face pain",
    "220": "increased touch sensitivity",
    "221": "numbness in the arm",
    "222": "testicular pain",
    "223": "abdominal pain associated with menstruation",
    "228": "cough with sputum",
    "230": "joint redness",
    "231": "leg swelling",
    "232": "marked veins",
    "233": "bloody cough",
    "234": "stiff neck",
    "235": "memory gap",
    "236": "swelling in the genital area",
    "238": "anxiety",
    "239": "bold area among hair on the head",
    "240": "blue spot on skin",
    "241": "sleepiness with spontaneous falling asleep",
    "242": "eye blinking",
    "243": "tick",
    "244": "drooping eyelid",
    "245": "flaking skin on the head",
    "246": "facial paralysis",
    "247": "itching on head",
    "248": "swollen glands in the armpits",
    "249": "swollen glands in the groin",
    "250": "breathing-related pains",
    "251": "pain radiating to the arm",
    "252": "muscular atrophy in the leg",
    "253": "muscular weakness in the leg",
    "254": "numbness in the leg",
    "255": "foot pain",
    "256": "knee pain",
    "257": "involuntary movements",
    "258": "protrusion of the eyes",
    "260": "curvature of the spine",
    "261": "lump in the breast",
    "262": "increased drive",
    "263": "lower-back pain",
    "264": "shiny red tongue",
    "265": "uncontrolled defecation",
    "266": "malposition of the testicles",
    "267": "swelling of the testicles",
    "268": "itching or burning in the genital area",
    "269": "scalp redness",
    "270": "double vision, acute-onset",
    "272": "dry mouth",
    "273": "dry eyes",
    "284": "bleeding from vagina",
    "286": "pain when chewing",
    "287": "eye pain",
    "288": "burning nose",
    "970": "facial swelling",
    "971": "arm swelling",
    "972": "weakness or numbness on right or left side of body",
    "973": "itching in the mouth or throat",
    "974": "aggressiveness",
    "975": "sadness",
    "976": "hallucination",
    "977": "tongue swelling",
    "978": "cold hands",
    "979": "brittleness of nails",
    "980": "tongue burning",
    "981": "agitation",
    "982": "feeling faint",
    "983": "morning stiffness",
    "984": "absence of a pulse",
    "985": "heart murmur",
    "986": "irregular heartbeat",
    "987": "muscle weakness",
    "988": "trouble understanding speech",
    "989": "distended abdomen",
    "990": "pain of the anus",
    "991": "blue colored skin",
    "992": "limited mobility of the ankle",
    "993": "hip deformity",
    "994": "knee deformity",
    "995": "finger deformity",
    "996": "ankle deformity",
    "997": "toe deformity",
    "998": "back deformity",
    "999": "itching of the anus",
    "1000": "limited mobility of the hip",
    "1001": "scar",
    "1002": "foot swelling",
    "1003": "toe swelling"
}