import json
import sys

def inject_json(file_path, key, data):
    with open(file_path, "r", encoding="utf-8") as f:
        content = json.load(f)
    
    content[key] = data
    
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)

en_data = {
    "concreteSlabFormworks": {
      "pageTitle": "Concrete Slab Formworks",
      "preInspection": {
        "title": "Reinforced Concrete Column Reinforcement Pre-Inspection Checklist",
        "items": [
          "Verify approval of the materials used in the execution of the work.",
          "Verify approval of the drawings required for the execution of the work.",
          "Verify approval of the method statement for the execution of this work.",
          "Verify the completion of required tests in accordance with the item specifications.",
          "Verify the inspection and acceptance of all prerequisite foundational works.",
          "Verify the review of design drawings, technical specifications, and other relevant project documents.",
          "Verify compliance with occupational health and safety requirements prior to inspection.",
          "Verify the removal of all waste and debris generated from the execution of the work."
        ]
      },
      "aboveSlab": {
        "title": "Reinforced Concrete Slab Formwork Inspection Checklist (Above Slab)",
        "items": [
          "Review the slab boundaries using a Total Station, if applicable.",
          "Review the external dimensions and verify that beam axes align correctly with the approved structural axes.",
          "Review the levels, locations, and elevations of various slab sections.",
          "Review the dimensions and the squareness of the roof panels (ensuring they are perfectly squared).",
          "Review the level of the formwork surface relative to the benchmark (TBM) and verify its compliance with the architectural soffit levels.",
          "Review the dimensions, depth, and verticality of the beam sides.",
          "Review the height of the external roof sides and the total slab thickness (depth).",
          "Review the recessed levels for bathroom slabs relative to the rest of the floor, if any.",
          "Review the sealing between timber panels and the application of joints between the roof surface and beam sides, as well as the junctions between beams, columns, and beam bottoms.",
          "Review the locations and dimensions of shafts, elevators, and openings for plumbing, electrical, and HVAC.",
          "Review the locations of walls and ensure they are properly fixed."
        ]
      },
      "belowSlab": {
        "title": "Reinforced Concrete Slab Formwork Inspection Checklist (Below Slab/Soffit)",
        "items": [
          "Review the vertical props (shores) and verify that the spacing between them is between 60 cm to 80 cm.",
          "Review the locations of timber joins/extensions for high elevations and ensure the strength and stability of the connections.",
          "Review the quality of the horizontal timber supports (joists) secured to the beams.",
          "Review the bracing/reinforcement of the beam bottoms (using \"Habs\" or clamps) to ensure stability.",
          "Review the bracing of column necks and ensure the sealing is sound to prevent concrete leakage and ensure the verticality of the corners.",
          "Review the recessed levels for bathroom slabs relative to the rest of the floor, if any.",
          "Review the reinforcement/bracing of the timber panel connections and verify that the joints are executed correctly.",
          "Verify the overall cleanliness of the formwork surface (decking) and the beams prior to proceeding."
        ]
      }
    },
    "rebarInstallation": {
      "pageTitle": "Rebar installation for reinforced concrete slabs",
      "preInspection": {
        "title": "General Pre-Inspection Verification Checklist",
        "items": [
          "Verify approval of the materials used in the execution of the work.",
          "Verify approval of the shop drawings required for the execution of the work.",
          "Verify approval of the method statement for the execution of this work.",
          "Verify the completion of required tests in accordance with the item specifications.",
          "Verify the inspection and acceptance of all prerequisite foundational works.",
          "Verify the review of design drawings, technical specifications, and other relevant project documents.",
          "Verify compliance with occupational health and safety (HSE) requirements prior to inspection.",
          "Verify the removal of all waste and debris generated from the execution of the work."
        ]
      },
      "rebarInspection": {
        "title": "Inspection Checklist: Reinforced Concrete Slab Reinforcement",
        "items": [
          "Verify cleanliness of reinforcement steel and ensure it is free from rust.",
          "Review reinforcement steel types, diameters, quantities, and lengths.",
          "Review overlap locations, lap lengths, and rebar lengths according to approved drawings.",
          "Verify beam stirrup dimensions, quantities, and spacing (equal or as per drawings).",
          "Ensure top and bottom beam reinforcement is properly tied to stirrups with galvanized binding wire.",
          "Verify bent-up bars (cranked bars) in beams and ensure execution accuracy per drawings.",
          "Verify installation of concrete spacers (biscuits) for slabs, beams, and stairs.",
          "Review starter bars (dowels) for planted columns, if applicable, and verify their locations.",
          "Verify the cranking/offset of column starter bars for the final floor or columns terminating at this level within the slab thickness.",
          "Ensure the continuity of column stirrups through the beam depth and at the column neck below the beams.",
          "Review stairs and landing reinforcement and ensure starter bars (dowels) are provided (for typical floors)."
        ]
      }
    },
    "electricalWorks": {
      "pageTitle": "Electrical works inspection for concrete slabs",
      "preInspection": {
        "title": "Electrical/Mechanical Works Pre-Inspection Verification Checklist",
        "items": [
          "Verify approval of the materials used in the execution of the work.",
          "Verify approval of the drawings required for the execution of the work.",
          "Verify approval of the method statement for the execution of this work.",
          "Verify the completion of required tests in accordance with the item specifications.",
          "Verify the inspection and acceptance of all prerequisite foundational works.",
          "Verify the review of design drawings, technical specifications, and other relevant project documents.",
          "Verify compliance with occupational health and safety requirements prior to inspection.",
          "Verify the removal of all waste and debris generated from the execution of the work."
        ]
      },
      "electricalInspection": {
        "title": "Electrical Works Inspection Checklist (Concrete Slabs)",
        "items": [
          "Verify that the locations of outlets and points match the approved drawings.",
          "Verify that conduit sizes comply with the project specifications.",
          "Verify the secure connection of all outlet boxes.",
          "Verify that outlets are correctly linked to the specific distribution board for each floor.",
          "Verify that all outlets within the rooms are cleaned and clear of debris.",
          "Verify the routing of conduits within the slab to ensure they are not bundled/grouped within a single beam.",
          "Verify the connection of light-current outlets to their designated collection points.",
          "Verify that outlets for AC units, water heaters, and washing machines are not connected to any other outlets and are fed directly from the distribution board.",
          "Ensure AC, heater, and washing machine conduits are 23 mm, while other conduits (lighting) are 16 mm, or as per the design drawings.",
          "Verify the number of riser pipes according to the design drawings."
        ]
      }
    },
    "castingPre": {
      "pageTitle": "Pre-casting Work",
      "preCastingInspection": {
        "title": "Pre-Pouring Concrete Inspection Checklist",
        "items": [
          "Review the availability of batching standards for sand and gravel (concrete mix).",
          "Verify the operational condition and readiness of the concrete mixer and vibrators.",
          "Review the quality and adequacy of concrete pouring materials (sand, gravel, cement, water).",
          "Verify the presence of the Slump Test cone and its readiness for testing.",
          "Verify that a sufficient number of concrete test cubes are available.",
          "Review the pre-wetting of wooden formwork with water before pouring.",
          "Review the organization of pouring stages with the site supervisor (the \"Foreman\").",
          "Review and identify the locations of expansion, contraction, and settlement joints.",
          "Review the availability of a specific water source for the concrete.",
          "Verify the placement of concrete spacers (biscuits) beneath the reinforcement steel and at the sides.",
          "Install suitable pouring runways/tracks at appropriate heights.",
          "Establish and fix pouring levels clearly for each element individually.",
          "Verify that the free-fall height of the concrete does not exceed 3 meters maximum."
        ]
      }
    },
    "castingDuring": {
      "pageTitle": "During Casting Work",
      "duringCastingInspection": {
        "title": "During Concrete Pouring Inspection Checklist",
        "items": [
          "Verify the concrete mix proportions, with particular attention to the water-cement ratio.",
          "Verify that each section of the pour is thoroughly and properly compacted.",
          "Verify the proper completion and finishing of the concrete surface.",
          "Continuously measure levels and verify their consistency in accordance with the specifications.",
          "Remove and clean any excess concrete immediately before the initial set occurs.",
          "Verify the cleanliness of all surfaces following the completion of the pouring process."
        ]
      }
    },
    "castingPost": {
      "pageTitle": "Post Casting Work",
      "postCastingInspection": {
        "title": "Post-Concrete Pouring Inspection Checklist",
        "items": [
          "Verify that curing continues for a minimum of seven days after pouring.",
          "Verify that formwork removal (stripping) is performed using the correct methods.",
          "Ensure the formwork is thoroughly sprayed with water prior to removal.",
          "Use pry bars carefully during stripping to maintain the integrity of the concrete surfaces and corners.",
          "Track and monitor concrete cube compressive strength test results in a regular schedule organized by date."
        ]
      }
    }
}

ar_data = {
    "concreteSlabFormworks": {
      "pageTitle": "خنزيرة البلاطة الخرسانية",
      "preInspection": {
        "title": "قائمة الفحص المسبق لحديد تسليح الأعمدة الخرسانية",
        "items": [
          "التأكد من اعتماد المواد المستخدمة في تنفيذ الأعمال.",
          "التأكد من اعتماد المخططات اللازمة لتنفيذ الأعمال.",
          "التأكد من اعتماد طريقة تنفيذ هذا العمل.",
          "التأكد من اكتمال الاختبارات المطلوبة وفقاً لمواصفات البند.",
          "التأكد من فحص وقبول جميع الأعمال التأسيسية المسبقة.",
          "التأكد من مراجعة المخططات التصميمية والمواصفات الفنية ومستندات المشروع الأخرى ذات الصلة.",
          "التأكد من الالتزام بمتطلبات الصحة والسلامة المهنية قبل إجراء الفحص.",
          "التأكد من إزالة جميع المخلفات والأنقاض الناتجة عن تنفيذ العمل."
        ]
      },
      "aboveSlab": {
        "title": "قائمة فحص نجارة البلاطة الخرسانية المسلحة (أعلى البلاطة)",
        "items": [
          "مراجعة حدود البلاطة باستخدام جهاز المساحة (Total Station) إذا لزم الأمر.",
          "مراجعة الأبعاد الخارجية والتأكد من تطابق محاور الكمرات بشكل صحيح مع المساقط الإنشائية المعتمدة.",
          "مراجعة المناسيب، المواقع، وارتفاعات الأقسام المختلفة للبلاطة.",
          "مراجعة الأبعاد وتربيع زوايا الأسقف (التأكد من تربيعها بشكل مثالي).",
          "مراجعة منسوب سطح النجارة بالنسبة لنقطة مرجعية (TBM) والتأكد من مطابقتها لمناسيب السقف المعمارية.",
          "مراجعة الأبعاد، السقوط (العمق)، والاستقامة الرأسية لجوانب الكمرات.",
          "مراجعة ارتفاع الجوانب الخارجية للسقف وإجمالي سماكة البلاطة.",
          "مراجعة مناسيب الهبوط (التهبيط) الخاصة ببلاطات الحمامات مقارنة بباقي السقف، إن وجدت.",
          "مراجعة التقفيل بين ألواح النجارة، وسد فواصل الاستمرار بين سطح البلاطة وجوانب الكمرات، بالإضافة لمناطق التقاء الكمرات والأعمدة وقعر الكمرات.",
          "مراجعة مواقع وأبعاد المناور (Shafts)، المصاعد، وفتحات أعمال السباكة والكهرباء والتكييف.",
          "مراجعة مواقع الجدران (حوائط التقسيم) والتأكد من تثبيتها بالشكل الصحيح."
        ]
      },
      "belowSlab": {
        "title": "قائمة فحص نجارة البلاطة الخرسانية المسلحة (أسفل البلاطة/التدعيم)",
        "items": [
          "مراجعة الدعائم الرأسية (القوائم/الجكات) والتأكد من أن المسافات بينها تتراوح بين 60 إلى 80 سم.",
          "مراجعة مواقع وصل الأخشاب في الارتفاعات العالية والتأكد من قوة واستقرار الوصلات.",
          "مراجعة جودة العروق/المدادات الخشبية الأفقية المتصلة بالكمرات.",
          "مراجعة تدعيم أسفل الكمرات (بواسطة \"الحبس\" أو الملازم) لضمان الاستقرار والثبات.",
          "مراجعة تدعيم رقاب الأعمدة والتأكد من سلامة التقفيل لمنع تسرب الخرسانة (الروبة) مع التأكد من رأسية الزوايا (السوك).",
          "مراجعة التدعيم لمناطق الهبوط في بلاطات الحمامات إن وجدت.",
          "مراجعة تدعيم وصلات ألواح الخشب المتعاقبة (تطاريح/عراقات) والتأكد من تنفيذها بالشكل السليم.",
          "التأكد من النظافة العامة لسطح النجارة (التطبيق) والكمرات قبل الاستمرار."
        ]
      }
    },
    "rebarInstallation": {
      "pageTitle": "تركيب حديد التسليح للبلاطات الخرسانية المسلحة",
      "preInspection": {
        "title": "قائمة الفحص المسبق العامة",
        "items": [
          "التأكد من اعتماد المواد المستخدمة في تنفيذ الأعمال.",
          "التأكد من اعتماد المخططات التنفيذية اللازمة لتنفيذ الأعمال.",
          "التأكد من اعتماد طريقة التنفيد لهذا العمل.",
          "التأكد من اكتمال الاختبارات المطلوبة وفقاً لمواصفات البند.",
          "التأكد من فحص وقبول جميع الأعمال التأسيسية المسبقة.",
          "التأكد من مراجعة المخططات التصميمية والمواصفات الفنية ومستندات المشروع الأخرى ذات الصلة.",
          "التأكد من الالتزام بمتطلبات الصحة والسلامة المهنية قبل إجراء الفحص.",
          "التأكد من إزالة جميع المخلفات والأنقاض الناتجة عن تنفيذ العمل."
        ]
      },
      "rebarInspection": {
        "title": "قائمة الفحص: حديد تسليح البلاطة الخرسانية المسلحة",
        "items": [
          "التأكد من نظافة حديد التسليح وخلوه من الصدأ.",
          "مراجعة نوع وأقطار وعدد وأطوال حديد التسليح.",
          "مراجعة أماكن الوصلات، أطوال التراكب، وأطوال التسليح وفقًا للمخططات المعتمدة.",
          "تأكيد أبعاد وعدد ومسافات كانات الكمرات (متساوية أو كما هو موضح بالمخططات).",
          "التأكد من ربط تسليح الكمرات العلوي والسفلي بالكانات بشكل صحيح باستخدام سلك رباط مجلفن.",
          "تأكيد الأسياخ المكسحة (الكرافتات) في الكمرات والتأكد من دقة التنفيذ وفقًا للمخططات.",
          "تأكيد تركيب فواصل خرسانية (بسكويت) للبلاطات، الكمرات، والسلالم.",
          "مراجعة أشاير الأعمدة المزروعة، إن وجدت، والتأكد من مواقعها.",
          "التأكد من تكسيح/إزاحة أشاير الأعمدة للطابق الأخير أو الأعمدة المنتهية عند هذا المنسوب بحيث تكون داخل سماكة البلاطة.",
          "التأكد من استمرارية كانات الأعمدة داخل سقوط الكمرة وفي رقبة العمود أسفل الكمرات.",
          "مراجعة تسليح السلالم والبسطات والتأكد من توفير الأشاير (للأدوار المتكررة)."
        ]
      }
    },
    "electricalWorks": {
      "pageTitle": "فحص الأعمال الكهربائية للبلاطات الخرسانية",
      "preInspection": {
        "title": "قائمة الفحص المسبق للأعمال الكهربائية/الميكانيكية",
        "items": [
          "التأكد من اعتماد المواد المستخدمة في تنفيذ الأعمال.",
          "التأكد من اعتماد المخططات اللازمة لتنفيذ الأعمال.",
          "التأكد من اعتماد طريقة تنفيذ هذا العمل.",
          "التأكد من اكتمال الاختبارات المطلوبة وفقاً لمواصفات البند.",
          "التأكد من فحص وقبول جميع الأعمال التأسيسية المسبقة.",
          "التأكد من مراجعة المخططات التصميمية والمواصفات الفنية ومستندات المشروع الأخرى ذات الصلة.",
          "التأكد من الالتزام بمتطلبات الصحة والسلامة المهنية قبل إجراء الفحص.",
          "التأكد من إزالة جميع المخلفات والأنقاض الناتجة عن تنفيذ العمل."
        ]
      },
      "electricalInspection": {
        "title": "قائمة فحص الأعمال الكهربائية (البلاطات الخرسانية)",
        "items": [
          "التأكد من أن مواقع المخارج والنقاط تتوافق مع المخططات المعتمدة.",
          "التأكد من أن أحجام المواسير (Conduits) تتوافق مع مواصفات المشروع.",
          "التأكد من التوصيل الآمن والمحكم لجميع علب المخارج.",
          "التأكد من أن المخارج مربوطة بشكل صحيح بلوحة التوزيع الخاصة بكل دور.",
          "التأكد من أن جميع المخارج داخل الغرف نظيفة وخالية من المخلفات.",
          "التأكد من مسارات المواسير داخل البلاطة لضمان عدم تجميعها بكثافة داخل كمرة واحدة.",
          "التأكد من توصيل مخارج التيار الخفيف إلى نقاط التجميع المخصصة لها.",
          "التأكد من أن مخارج وحدات التكييف، سخانات المياه، والغسالات غير متصلة بأي مخارج أخرى وبأنها مغذاة مباشرة من لوحة التوزيع.",
          "التأكد من أن مواسير التكييف والسخان والغسالة بقطر 23 مم، بينما بقية المواسير (للإنارة) بقطر 16 مم، أو كما هو موضح بالمخططات التصميمية.",
          "تأكيد عدد المواسير الصاعدة (Risers) وفقًا للمخططات التصميمية."
        ]
      }
    },
    "castingPre": {
      "pageTitle": "أعمال ما قبل الصب",
      "preCastingInspection": {
        "title": "قائمة فحص ما قبل صب الخرسانة",
        "items": [
          "مراجعة توافر المعايير المعتمدة لخلط الرمل والزلط (الخلطة الخرسانية).",
          "التأكد من الحالة التشغيلية وجاهزية خلاطة الخرسانة والهزازات المعدنية.",
          "مراجعة جودة وكفاية مواد صب الخرسانة (الرمل، الزلط، الإسمنت، المياه).",
          "التأكد من وجود مخروط فحص الهبوط (Slump Test) وجاهزيته للاختبار.",
          "التأكد من توفر عدد كافٍ من مكعبات اختبار الخرسانة.",
          "مراجعة رش النجارة الخشبية بالماء قبل البدء بالصب.",
          "مراجعة تنظيم مراحل الصب مع مشرف الموقع (الفورمان).",
          "مراجعة وتحديد مواقع فواصل التمدد والانكماش والهبوط.",
          "مراجعة توافر مصدر مياه خاص لأعمال الخرسانة.",
          "التأكد من وضع البسكويت الخرساني تحت حديد التسليح وعلى الجوانب.",
          "تركيب مسارات صب (براويطات/سقالات) مناسبة على الارتفاعات المطلوبة.",
          "تحديد وتثبيت مستويات الصب بوضوح لكل عنصر على حدة.",
          "التأكد من أن مسافة السقوط الحر للخرسانة لا تتجاوز 3 أمتار كحد أقصى."
        ]
      }
    },
    "castingDuring": {
      "pageTitle": "خلال أعمال الصب",
      "duringCastingInspection": {
        "title": "قائمة فحص أثناء صب الخرسانة",
        "items": [
          "التحقق من نسب الخلط الخرساني، مع إيلاء اهتمام خاص لنسبة الماء إلى الإسمنت.",
          "التأكد من دمك (هز) الخرسانة في كل قسم يتم صبه بشكل كامل وصحيح.",
          "التأكد من استكمال وتشطيب سطح الخرسانة بالشكل المطلوب.",
          "القياس المستمر للمناسيب وتأكيد تطابقها مع المواصفات المعتمدة.",
          "إزالة وتنظيف أي خرسانة زائدة فوراً قبل حدوث الشك الابتدائي.",
          "التأكد من نظافة جميع الأسطح بعد اكتمال عملية الصب."
        ]
      }
    },
    "castingPost": {
      "pageTitle": "أعمال ما بعد الصب",
      "postCastingInspection": {
        "title": "قائمة فحص ما بعد صب الخرسانة",
        "items": [
          "التأكد من استمرار معالجة الخرسانة (الرش بالماء/الخيش المبلل) لمده لا تقل عن سبعة أيام بعد الصب.",
          "التأكد من أن إزالة النجارة (الشدات) تتم باستخدام الطرق الصحيحة.",
          "التأكد من رش النجارة بالماء بشكل كثيف قبل البدء في الفك.",
          "استخدام العتلات بحذر أثناء الفك للحفاظ على سلامة الأسطح والزوايا الخرسانية.",
          "تتبع ومراقبة نتائج اختبار مقاومة الضغط لمكعبات الخرسانة في جدول زمني منتظم وحسب التواريخ."
        ]
      }
    }
}

inject_json("src/locales/en.json", "ceilingChecklist", en_data)
inject_json("src/locales/ar.json", "ceilingChecklist", ar_data)
