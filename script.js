    $(document).ready(function()
    {
      buildValues(6);

      $('#button_calculate').click(function()
      {
        var age = parseInt($('#input_age').val());
        buildValues(age);
      });
    });

    function buildValues(age)
    {
      $('#female_age').html(age);
      $('#male_age').html(age);

      $('#class_female_1_a').html(buildWidthFemale(age, 1, 2));
      $('#class_female_2_a').html(buildWidthFemale(age, -1, 1));
      $('#class_female_3_a').html(buildWidthFemale(age, -2, -1));

      $('#class_male_1_a').html(buildWidthMale(age, 1, 2));
      $('#class_male_2_a').html(buildWidthMale(age, -1, 1));
      $('#class_male_3_a').html(buildWidthMale(age, -2, -1));

      $('#class_female_1_b').html(buildHeightFemale(age, 1, 2));
      $('#class_female_2_b').html(buildHeightFemale(age, -1, 1));
      $('#class_female_3_b').html(buildHeightFemale(age, -2, -1));

      $('#class_male_1_b').html(buildHeightMale(age, 1, 2));
      $('#class_male_2_b').html(buildHeightMale(age, -1, 1));
      $('#class_male_3_b').html(buildHeightMale(age, -2, -1));

      $('#class_female_1_c').html(buildLengthFemale(age, -1, -1));
      $('#class_female_2_c').html(buildLengthFemale(age, -1, -1));
      $('#class_female_3_c').html(buildLengthFemale(age, -2, -1));

      $('#class_male_1_c').html(buildLengthMale(age, 1, 2));
      $('#class_male_2_c').html(buildLengthMale(age, -1, 1));
      $('#class_male_3_c').html(buildLengthMale(age, -2, -1));

      $('#class_female_1_d').html(buildBodyFemale(age, 1, 2));
      $('#class_female_2_d').html(buildBodyFemale(age, -1, 1));
      $('#class_female_3_d').html(buildBodyFemale(age, -2, -1));

      $('#class_male_1_d').html(buildBodyMale(age, 1, 2));
      $('#class_male_2_d').html(buildBodyMale(age, -1, 1));
      $('#class_male_3_d').html(buildBodyMale(age, -2, -1));

      $('#class_female_1_e').html(buildWeightFemale(age, -1, -1, 1, 2));
      $('#class_female_2_e').html(buildWeightFemale(age, -1, -1, -1, 1));
      $('#class_female_3_e').html(buildWeightFemale(age, -2, -1, -2, -1));

      $('#class_male_1_e').html(buildWeightMale(age, 1, 2, 1, 2));
      $('#class_male_2_e').html(buildWeightMale(age, -1, 1, -1, 1));
      $('#class_male_3_e').html(buildWeightMale(age, -2, -1, -2, -1));
    }

    function formatValues(from, to)
    {
      return from.toFixed(2) + ' &ndash; ' + to.toFixed(2);
    }

    function calculateWidthFemale(age, constants)
    {
      return 40.05/(1+1.52*(Math.pow(2.71828,(-0.16*(age+constants)))));
    }

    function calculateWidthMale(age, constants)
    {
      return 50.0032/(1+2.24*(Math.pow(2.71828,(-0.14*(age+constants)))));
    }

    function calculateHeightFemale(age, constants)
    {
      return 115.500005/(1+1.06*(Math.pow(2.71828,(-0.22*(age+constants)))));
    }

    function calculateHeightMale(age, constants)
    {
      return 130.000052/(1+1.34*(Math.pow(2.71828,(-0.16*(age+constants)))));
    }

    function calculateLengthFemale(age, constants)
    {
      return 120.1/(1+1.42*(Math.pow(2.71828,(-0.17*(age+constants)))))
    }

    function calculateLengthMale(age, constants)
    {
      return 140.5/(1+1.81*(Math.pow(2.71828,(-0.14*(age+constants)))))
    }

    function calculateBodyFemale(age, constants)
    {
      return 162.05/(1+1.49*(Math.pow(2.71828,(-0.15*(age+constants)))))
    }

    function calculateBodyMale(age, constants)
    {
      return 189.1/(1+1.9*(Math.pow(2.71828,(-0.14*(age+constants)))))
    }

    function buildWidthFemale(age, from, to)
    {
      var from = calculateWidthFemale(age, from);
      var to = calculateWidthFemale(age, to);
      return formatValues(from, to);
    }

    function buildWidthMale(age, from, to)
    {
      var from = calculateWidthMale(age, from);
      var to = calculateWidthMale(age, to);
      return formatValues(from, to);
    }

    function buildHeightFemale(age, from, to)
    {
      from = calculateHeightFemale(age, from);
      to = calculateHeightFemale(age, to);
      return formatValues(from, to);
    }

    function buildHeightMale(age, from, to)
    {
      from = calculateHeightMale(age, from);
      to = calculateHeightMale(age, to);
      return formatValues(from, to);
    }

    function buildLengthFemale(age, from, to)
    {
      from = calculateLengthFemale(age, from)
      to = calculateLengthFemale(age, to)
      return formatValues(from, to);
    }

    function buildLengthMale(age, from, to)
    {
      from = calculateLengthMale(age, from)
      to = calculateLengthMale(age, to)
      return formatValues(from, to);
    }

    function buildBodyFemale(age, from, to)
    {
      from = calculateBodyFemale(age, from)
      to = calculateBodyFemale(age, to)
      return formatValues(from, to);
    }

    function buildBodyMale(age, from, to)
    {
      from = calculateBodyMale(age, from)
      to = calculateBodyMale(age, to)
      return formatValues(from, to);
    }

    function buildWeightFemale(age, from_length, to_length, from_weight, to_weight)
    {
      var from = 0;
      var panjangTubuhFrom = calculateLengthFemale(age, from_length);
      var lingkarDadaFrom = calculateBodyFemale(age, from_weight);

      if (age < 25)
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/(12400+20*age);
      }
      else if (age<275)
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/(12400+20*(24-(age-24)))
      }
      else
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/7860
      }

      var to = 0;
      var panjangTubuhTo = calculateLengthFemale(age, to_length);
      var lingkarDadaTo = calculateBodyFemale(age, to_weight);
      
      if (age < 25)
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/(12400+20*age)
      }
      else if (age<275)
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/(12400+20*(24-(age-24)))
      }
      else
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/7860
      }

      return formatValues(from, to);
    }

    function buildWeightMale(age, from_length, to_length, from_weight, to_weight)
    {
      var from = 0;
      var panjangTubuhFrom = calculateLengthMale(age, from_length);
      var lingkarDadaFrom = calculateBodyMale(age, from_weight);

      if (age < 25)
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/(12400+150*age);
      }
      else if (age<76)
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/(12400+150*(24-(age-24)))
      }
      else
      {
        from = (panjangTubuhFrom * Math.pow(lingkarDadaFrom, 2))/8350
      }

      var to = 0;
      var panjangTubuhTo = calculateLengthMale(age, to_length);
      var lingkarDadaTo = calculateBodyMale(age, to_weight);
      
      if (age < 25)
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/(12400+150*age)
      }
      else if (age<76)
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/(12400+150*(24-(age-24)))
      }
      else
      {
        to = (panjangTubuhTo * Math.pow(lingkarDadaTo, 2))/8350
      }

      return formatValues(from, to);
    }
