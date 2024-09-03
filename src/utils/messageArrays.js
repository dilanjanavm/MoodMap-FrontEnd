const calenderCardsData = [
    // January 2020
    { day: "Monday", message: "Ensure consistent labels since 2020.", date: "2020-01-06" },
    { day: "Wednesday", message: "Labels must match model output accurately.", date: "2020-01-15" },
    { day: "Friday", message: "Review label consistency across the dataset.", date: "2020-01-24" },
    { day: "Sunday", message: "Double-check label alignment for January.", date: "2020-01-19" },
    { day: "Tuesday", message: "Verify accuracy of labels in predictions.", date: "2020-01-28" },

    // February 2020
    { day: "Saturday", message: "Labels should match probability values.", date: "2020-02-01" },
    { day: "Thursday", message: "Check for correct labels in February data.", date: "2020-02-06" },
    { day: "Monday", message: "Ensure labels are relevant to model output.", date: "2020-02-10" },
    { day: "Wednesday", message: "Adjust labels for better accuracy.", date: "2020-02-12" },
    { day: "Friday", message: "Consistent labels lead to better predictions.", date: "2020-02-21" },

    // March 2020
    { day: "Sunday", message: "Review label accuracy for March data.", date: "2020-03-01" },
    { day: "Tuesday", message: "Ensure labels fit the model's categories.", date: "2020-03-03" },
    { day: "Thursday", message: "Double-check the labels and probabilities.", date: "2020-03-05" },
    { day: "Saturday", message: "Labels must be consistent with model training.", date: "2020-03-07" },
    { day: "Monday", message: "Verify label matching in March predictions.", date: "2020-03-09" },

    // April 2020
    { day: "Wednesday", message: "Labels need to align with April data.", date: "2020-04-01" },
    { day: "Friday", message: "Review and adjust labels for April.", date: "2020-04-03" },
    { day: "Sunday", message: "Check label consistency across datasets.", date: "2020-04-05" },
    { day: "Tuesday", message: "Accurate labels improve model accuracy.", date: "2020-04-07" },
    { day: "Thursday", message: "Labels should reflect training data.", date: "2020-04-09" },

    // May 2020
    { day: "Monday", message: "Consistent labels are key in May.", date: "2020-05-04" },
    { day: "Wednesday", message: "Ensure label relevance to model output.", date: "2020-05-06" },
    { day: "Friday", message: "Review label alignment with training data.", date: "2020-05-15" },
    { day: "Sunday", message: "Labels must match model predictions in May.", date: "2020-05-17" },
    { day: "Tuesday", message: "Verify labels in May's data.", date: "2020-05-26" },

    // June 2020
    { day: "Thursday", message: "Check label accuracy for June.", date: "2020-06-04" },
    { day: "Saturday", message: "Labels need to match June predictions.", date: "2020-06-06" },
    { day: "Monday", message: "Ensure consistency in June's labels.", date: "2020-06-08" },
    { day: "Wednesday", message: "Labels should align with model output.", date: "2020-06-10" },
    { day: "Friday", message: "Review label relevance in June.", date: "2020-06-19" },

    // July 2020
    { day: "Sunday", message: "Labels should reflect July's predictions.", date: "2020-07-05" },
    { day: "Tuesday", message: "Check labels for consistency in July.", date: "2020-07-07" },
    { day: "Thursday", message: "Verify accuracy of July's labels.", date: "2020-07-09" },
    { day: "Saturday", message: "Review labels and probabilities in July.", date: "2020-07-11" },
    { day: "Monday", message: "Ensure model output matches July labels.", date: "2020-07-20" },

    // August 2020
    { day: "Wednesday", message: "Labels should be accurate in August.", date: "2020-08-05" },
    { day: "Friday", message: "Ensure labels reflect model's training.", date: "2020-08-07" },
    { day: "Sunday", message: "Check labels for accuracy in August.", date: "2020-08-09" },
    { day: "Tuesday", message: "Review label alignment in August.", date: "2020-08-11" },
    { day: "Thursday", message: "Labels must match August predictions.", date: "2020-08-13" },

    // September 2020
    { day: "Saturday", message: "Check label consistency in September.", date: "2020-09-05" },
    { day: "Monday", message: "Ensure September labels are accurate.", date: "2020-09-07" },
    { day: "Wednesday", message: "Review labels for September data.", date: "2020-09-09" },
    { day: "Friday", message: "Labels should align with model output.", date: "2020-09-11" },
    { day: "Sunday", message: "Check labels in September predictions.", date: "2020-09-20" },

    // October 2020
    { day: "Tuesday", message: "Ensure label accuracy in October.", date: "2020-10-06" },
    { day: "Thursday", message: "Check October labels for consistency.", date: "2020-10-08" },
    { day: "Saturday", message: "Review labels and predictions in October.", date: "2020-10-10" },
    { day: "Monday", message: "Labels should reflect October's output.", date: "2020-10-12" },
    { day: "Wednesday", message: "Verify October labels and model accuracy.", date: "2020-10-14" },

    // November 2020
    { day: "Friday", message: "Labels must be consistent in November.", date: "2020-11-06" },
    { day: "Sunday", message: "Check November labels and probabilities.", date: "2020-11-08" },
    { day: "Tuesday", message: "Ensure accuracy in November's labels.", date: "2020-11-10" },
    { day: "Thursday", message: "Review labels for November data.", date: "2020-11-12" },
    { day: "Saturday", message: "Verify consistency in November's labels.", date: "2020-11-14" },

    // December 2020
    { day: "Monday", message: "Check December's labels for accuracy.", date: "2020-12-07" },
    { day: "Wednesday", message: "Ensure labels match December output.", date: "2020-12-09" },
    { day: "Friday", message: "Labels should reflect model predictions.", date: "2020-12-11" },
    { day: "Sunday", message: "Review December labels and data.", date: "2020-12-13" },
    { day: "Tuesday", message: "Ensure label consistency in December.", date: "2020-12-15" },

    // January 2021
    { day: "Thursday", message: "Labels should be accurate in January.", date: "2021-01-07" },
    { day: "Saturday", message: "Review label consistency for January.", date: "2021-01-09" },
    { day: "Monday", message: "Ensure labels reflect January output.", date: "2021-01-11" },
    { day: "Wednesday", message: "Labels must match January's predictions.", date: "2021-01-13" },
    { day: "Friday", message: "Check labels for accuracy in January.", date: "2021-01-15" },

    // February 2021
    { day: "Sunday", message: "Verify February labels and predictions.", date: "2021-02-07" },
    { day: "Tuesday", message: "Ensure label accuracy in February.", date: "2021-02-09" },
    { day: "Thursday", message: "Review February's labels for consistency.", date: "2021-02-11" },
    { day: "Saturday", message: "Labels should reflect February's output.", date: "2021-02-13" },
    { day: "Monday", message: "Check February's labels for accuracy.", date: "2021-02-15" },

    // March 2021
    { day: "Wednesday", message: "Ensure March labels are consistent.", date: "2021-03-03" },
    { day: "Friday", message: "Labels must match March's output.", date: "2021-03-05" },
    { day: "Sunday", message: "Review March's labels for accuracy.", date: "2021-03-07" },
    { day: "Tuesday", message: "Check label alignment in March.", date: "2021-03-09" },
    { day: "Thursday", message: "Verify consistency in March labels.", date: "2021-03-11" },

    // April 2021
    { day: "Saturday", message: "Labels should be accurate in April.", date: "2021-04-03" },
    { day: "Monday", message: "Review April labels and predictions.", date: "2021-04-05" },
    { day: "Wednesday", message: "Ensure labels match April's output.", date: "2021-04-07" },
    { day: "Friday", message: "Check labels for consistency in April.", date: "2021-04-09" },
    { day: "Sunday", message: "Review label alignment in April.", date: "2021-04-11" },

    // May 2021
    { day: "Tuesday", message: "Labels must be accurate in May.", date: "2021-05-04" },
    { day: "Thursday", message: "Check label consistency in May data.", date: "2021-05-06" },
    { day: "Saturday", message: "Review May's labels for accuracy.", date: "2021-05-08" },
    { day: "Monday", message: "Ensure labels reflect May's predictions.", date: "2021-05-10" },
    { day: "Wednesday", message: "Labels should match May's output.", date: "2021-05-12" },

    // June 2021
    { day: "Friday", message: "Verify label accuracy in June.", date: "2021-06-04" },
    { day: "Sunday", message: "Check labels for consistency in June.", date: "2021-06-06" },
    { day: "Tuesday", message: "Review June labels and predictions.", date: "2021-06-08" },
    { day: "Thursday", message: "Ensure labels match June's output.", date: "2021-06-10" },
    { day: "Saturday", message: "Labels must reflect June's predictions.", date: "2021-06-12" },

    // July 2021
    { day: "Monday", message: "Check labels for accuracy in July.", date: "2021-07-05" },
    { day: "Wednesday", message: "Labels should be consistent in July.", date: "2021-07-07" },
    { day: "Friday", message: "Ensure July's labels match model output.", date: "2021-07-09" },
    { day: "Sunday", message: "Review label alignment in July.", date: "2021-07-11" },
    { day: "Tuesday", message: "Labels must be accurate in July.", date: "2021-07-13" },

    // August 2021
    { day: "Thursday", message: "Check label consistency in August.", date: "2021-08-05" },
    { day: "Saturday", message: "Ensure labels match August's output.", date: "2021-08-07" },
    { day: "Monday", message: "Review labels for accuracy in August.", date: "2021-08-09" },
    { day: "Wednesday", message: "Labels should reflect August predictions.", date: "2021-08-11" },
    { day: "Friday", message: "Verify label consistency in August.", date: "2021-08-13" },

    // September 2021
    { day: "Sunday", message: "Labels must be accurate in September.", date: "2021-09-05" },
    { day: "Tuesday", message: "Check September labels for accuracy.", date: "2021-09-07" },
    { day: "Thursday", message: "Ensure labels match September output.", date: "2021-09-09" },
    { day: "Saturday", message: "Review September labels and predictions.", date: "2021-09-11" },
    { day: "Monday", message: "Labels should be consistent in September.", date: "2021-09-13" },

    // October 2021
    { day: "Wednesday", message: "Check October labels for accuracy.", date: "2021-10-06" },
    { day: "Friday", message: "Labels should match October's predictions.", date: "2021-10-08" },
    { day: "Sunday", message: "Review October's labels for consistency.", date: "2021-10-10" },
    { day: "Tuesday", message: "Ensure labels are accurate in October.", date: "2021-10-12" },
    { day: "Thursday", message: "Labels should reflect October output.", date: "2021-10-14" },

    // November 2021
    { day: "Saturday", message: "Labels must be consistent in November.", date: "2021-11-06" },
    { day: "Monday", message: "Check November labels for accuracy.", date: "2021-11-08" },
    { day: "Wednesday", message: "Ensure November's labels match output.", date: "2021-11-10" },
    { day: "Friday", message: "Review November labels and predictions.", date: "2021-11-12" },
    { day: "Sunday", message: "Verify label consistency in November.", date: "2021-11-14" },

    // December 2021
    { day: "Tuesday", message: "Check December labels for accuracy.", date: "2021-12-07" },
    { day: "Thursday", message: "Labels should be consistent in December.", date: "2021-12-09" },
    { day: "Saturday", message: "Ensure labels match December predictions.", date: "2021-12-11" },
    { day: "Monday", message: "Review December labels for consistency.", date: "2021-12-13" },
    { day: "Wednesday", message: "Labels should reflect December output.", date: "2021-12-15" },

    // January 2022
    { day: "Friday", message: "Labels should be accurate in January.", date: "2022-01-07" },
    { day: "Sunday", message: "Check January labels for consistency.", date: "2022-01-09" },
    { day: "Tuesday", message: "Ensure labels reflect January predictions.", date: "2022-01-11" },
    { day: "Thursday", message: "Labels must match January output.", date: "2022-01-13" },
    { day: "Saturday", message: "Review January labels and predictions.", date: "2022-01-15" },

    // February 2022
    { day: "Monday", message: "Ensure February labels are accurate.", date: "2022-02-07" },
    { day: "Wednesday", message: "Labels should match February's output.", date: "2022-02-09" },
    { day: "Friday", message: "Check February labels for consistency.", date: "2022-02-11" },
    { day: "Sunday", message: "Review label alignment in February.", date: "2022-02-13" },
    { day: "Tuesday", message: "Labels must be consistent in February.", date: "2022-02-15" },

    // March 2022
    { day: "Thursday", message: "Ensure March labels are accurate.", date: "2022-03-03" },
    { day: "Saturday", message: "Check label consistency in March.", date: "2022-03-05" },
    { day: "Monday", message: "Labels should reflect March predictions.", date: "2022-03-07" },
    { day: "Wednesday", message: "Verify March's label accuracy.", date: "2022-03-09" },
    { day: "Friday", message: "Review labels for March data.", date: "2022-03-11" },

    // April 2022
    { day: "Sunday", message: "Check April labels for accuracy.", date: "2022-04-03" },
    { day: "Tuesday", message: "Labels must be consistent in April.", date: "2022-04-05" },
    { day: "Thursday", message: "Ensure April's labels match output.", date: "2022-04-07" },
    { day: "Saturday", message: "Review April labels for consistency.", date: "2022-04-09" },
    { day: "Monday", message: "Labels should reflect April predictions.", date: "2022-04-11" },

    // May 2022
    { day: "Wednesday", message: "Labels should be accurate in May.", date: "2022-05-04" },
    { day: "Friday", message: "Ensure May labels are consistent.", date: "2022-05-06" },
    { day: "Sunday", message: "Review May labels for accuracy.", date: "2022-05-08" },
    { day: "Tuesday", message: "Labels must match May's output.", date: "2022-05-10" },
    { day: "Thursday", message: "Check May label alignment.", date: "2022-05-12" },

    // June 2022
    { day: "Saturday", message: "Labels should reflect June predictions.", date: "2022-06-04" },
    { day: "Monday", message: "Check labels for consistency in June.", date: "2022-06-06" },
    { day: "Wednesday", message: "Review label accuracy for June data.", date: "2022-06-08" },
    { day: "Friday", message: "Labels must match June's output.", date: "2022-06-10" },
    { day: "Sunday", message: "Ensure labels are consistent in June.", date: "2022-06-12" },

    // July 2022
    { day: "Tuesday", message: "Labels should be accurate in July.", date: "2022-07-05" },
    { day: "Thursday", message: "Check July labels for consistency.", date: "2022-07-07" },
    { day: "Saturday", message: "Ensure labels match July's output.", date: "2022-07-09" },
    { day: "Monday", message: "Review July label alignment.", date: "2022-07-11" },
    { day: "Wednesday", message: "Labels must reflect July predictions.", date: "2022-07-13" },

    // August 2022
    { day: "Friday", message: "Check labels for accuracy in August.", date: "2022-08-05" },
    { day: "Sunday", message: "Labels should match August's output.", date: "2022-08-07" },
    { day: "Tuesday", message: "Review August labels for consistency.", date: "2022-08-09" },
    { day: "Thursday", message: "Ensure labels are accurate in August.", date: "2022-08-11" },
    { day: "Saturday", message: "Labels should be consistent in August.", date: "2022-08-13" },

    // September 2022
    { day: "Monday", message: "Check labels for consistency in September.", date: "2022-09-05" },
    { day: "Wednesday", message: "Labels must match September's output.", date: "2022-09-07" },
    { day: "Friday", message: "Review September label accuracy.", date: "2022-09-09" },
    { day: "Sunday", message: "Ensure labels reflect September predictions.", date: "2022-09-11" },
    { day: "Tuesday", message: "Labels should be consistent in September.", date: "2022-09-13" },

    // October 2022
    { day: "Thursday", message: "Labels must be accurate in October.", date: "2022-10-06" },
    { day: "Saturday", message: "Check labels for consistency in October.", date: "2022-10-08" },
    { day: "Monday", message: "Ensure October labels reflect predictions.", date: "2022-10-10" },
    { day: "Wednesday", message: "Review labels for October data.", date: "2022-10-12" },
    { day: "Friday", message: "Labels should match October's output.", date: "2022-10-14" },

    // November 2022
    { day: "Sunday", message: "Labels must be consistent in November.", date: "2022-11-06" },
    { day: "Tuesday", message: "Check labels for accuracy in November.", date: "2022-11-08" },
    { day: "Thursday", message: "Labels should match November's output.", date: "2022-11-10" },
    { day: "Saturday", message: "Review November label alignment.", date: "2022-11-12" },
    { day: "Monday", message: "Ensure November labels are consistent.", date: "2022-11-14" },

    // December 2022
    { day: "Wednesday", message: "Labels should be accurate in December.", date: "2022-12-07" },
    { day: "Friday", message: "Check December labels for consistency.", date: "2022-12-09" },
    { day: "Sunday", message: "Ensure labels match December predictions.", date: "2022-12-11" },
    { day: "Tuesday", message: "Review December labels for consistency.", date: "2022-12-13" },
    { day: "Thursday", message: "Labels must be consistent in December.", date: "2022-12-15" },

    // January 2023
    { day: "Saturday", message: "Check labels for accuracy in January.", date: "2023-01-07" },
    { day: "Monday", message: "Labels should reflect January predictions.", date: "2023-01-09" },
    { day: "Wednesday", message: "Ensure January labels match output.", date: "2023-01-11" },
    { day: "Friday", message: "Review label accuracy for January data.", date: "2023-01-13" },
    { day: "Sunday", message: "Labels must be consistent in January.", date: "2023-01-15" },

    // February 2023
    { day: "Tuesday", message: "Check labels for consistency in February.", date: "2023-02-07" },
    { day: "Thursday", message: "Labels should reflect February output.", date: "2023-02-09" },
    { day: "Saturday", message: "Ensure February labels are accurate.", date: "2023-02-11" },
    { day: "Monday", message: "Review labels for February data.", date: "2023-02-13" },
    { day: "Wednesday", message: "Labels must be consistent in February.", date: "2023-02-15" },

    // March 2023
    { day: "Friday", message: "Check March labels for accuracy.", date: "2023-03-03" },
    { day: "Sunday", message: "Labels should reflect March predictions.", date: "2023-03-05" },
    { day: "Tuesday", message: "Ensure March labels match output.", date: "2023-03-07" },
    { day: "Thursday", message: "Review March label alignment.", date: "2023-03-09" },
    { day: "Saturday", message: "Labels must be accurate in March.", date: "2023-03-11" },

    // April 2023
    { day: "Monday", message: "Labels should be consistent in April.", date: "2023-04-03" },
    { day: "Wednesday", message: "Check labels for accuracy in April.", date: "2023-04-05" },
    { day: "Friday", message: "Ensure April labels reflect output.", date: "2023-04-07" },
    { day: "Sunday", message: "Review April labels for consistency.", date: "2023-04-09" },
    { day: "Tuesday", message: "Labels must match April predictions.", date: "2023-04-11" },

    // May 2023
    { day: "Thursday", message: "Check labels for consistency in May.", date: "2023-05-04" },
    { day: "Saturday", message: "Labels should match May's output.", date: "2023-05-06" },
    { day: "Monday", message: "Review May labels and predictions.", date: "2023-05-08" },
    { day: "Wednesday", message: "Ensure labels are accurate in May.", date: "2023-05-10" },
    { day: "Friday", message: "Labels should reflect May predictions.", date: "2023-05-12" },

    // June 2023
    { day: "Sunday", message: "Check labels for accuracy in June.", date: "2023-06-04" },
    { day: "Tuesday", message: "Labels must be consistent in June.", date: "2023-06-06" },
    { day: "Thursday", message: "Ensure labels match June output.", date: "2023-06-08" },
    { day: "Saturday", message: "Review June label accuracy.", date: "2023-06-10" },
    { day: "Monday", message: "Labels should reflect June predictions.", date: "2023-06-12" },

    // July 2023
    { day: "Wednesday", message: "Check labels for consistency in July.", date: "2023-07-05" },
    { day: "Friday", message: "Ensure July labels match output.", date: "2023-07-07" },
    { day: "Sunday", message: "Labels should be consistent in July.", date: "2023-07-09" },
    { day: "Tuesday", message: "Review labels for accuracy in July.", date: "2023-07-11" },
    { day: "Thursday", message: "Labels should match July's output.", date: "2023-07-13" },

    // August 2023
    { day: "Saturday", message: "Ensure labels are accurate in August.", date: "2023-08-05" },
    { day: "Monday", message: "Labels must be consistent in August.", date: "2023-08-07" },
    { day: "Wednesday", message: "Check labels for accuracy in August.", date: "2023-08-09" },
    { day: "Friday", message: "Labels should reflect August predictions.", date: "2023-08-11" },
    { day: "Sunday", message: "Review labels for August output.", date: "2023-08-13" },

    // September 2023
    { day: "Tuesday", message: "Labels should match September's output.", date: "2023-09-05" },
    { day: "Thursday", message: "Review September label accuracy.", date: "2023-09-07" },
    { day: "Saturday", message: "Ensure labels are consistent in September.", date: "2023-09-09" },
    { day: "Monday", message: "Labels must reflect September predictions.", date: "2023-09-11" },
    { day: "Wednesday", message: "Check labels for accuracy in September.", date: "2023-09-13" },

    // October 2023
    { day: "Friday", message: "Labels should be consistent in October.", date: "2023-10-06" },
    { day: "Sunday", message: "Ensure October labels are accurate.", date: "2023-10-08" },
    { day: "Tuesday", message: "Review October label alignment.", date: "2023-10-10" },
    { day: "Thursday", message: "Labels must match October's output.", date: "2023-10-12" },
    { day: "Saturday", message: "Check labels for consistency in October.", date: "2023-10-14" },

    // November 2023
    { day: "Monday", message: "Labels should reflect November predictions.", date: "2023-11-06" },
    { day: "Wednesday", message: "Ensure November labels are consistent.", date: "2023-11-08" },
    { day: "Friday", message: "Review labels for accuracy in November.", date: "2023-11-10" },
    { day: "Sunday", message: "Labels should match November's output.", date: "2023-11-12" },
    { day: "Tuesday", message: "Check labels for November alignment.", date: "2023-11-14" },

    // December 2023
    { day: "Thursday", message: "Labels should be consistent in December.", date: "2023-12-07" },
    { day: "Saturday", message: "Ensure labels reflect December predictions.", date: "2023-12-09" },
    { day: "Monday", message: "Review December label accuracy.", date: "2023-12-11" },
    { day: "Wednesday", message: "Labels should match December's output.", date: "2023-12-13" },
    { day: "Friday", message: "Check labels for accuracy in December.", date: "2023-12-15" },

    // January 2024
    { day: "Sunday", message: "Labels should be accurate in January.", date: "2024-01-07" },
    { day: "Tuesday", message: "Ensure January labels are consistent.", date: "2024-01-09" },
    { day: "Thursday", message: "Review labels for January predictions.", date: "2024-01-11" },
    { day: "Saturday", message: "Labels must match January's output.", date: "2024-01-13" },
    { day: "Monday", message: "Check January label accuracy.", date: "2024-01-15" },

    // February 2024
    { day: "Wednesday", message: "Labels should reflect February predictions.", date: "2024-02-07" },
    { day: "Friday", message: "Ensure February labels are consistent.", date: "2024-02-09" },
    { day: "Sunday", message: "Review February label alignment.", date: "2024-02-11" },
    { day: "Tuesday", message: "Labels must match February's output.", date: "2024-02-13" },
    { day: "Thursday", message: "Check labels for accuracy in February.", date: "2024-02-15" },

    // March 2024
    { day: "Saturday", message: "Labels should be accurate in March.", date: "2024-03-02" },
    { day: "Monday", message: "Ensure March labels are consistent.", date: "2024-03-04" },
    { day: "Wednesday", message: "Review March labels for predictions.", date: "2024-03-06" },
    { day: "Friday", message: "Labels must reflect March output.", date: "2024-03-08" },
    { day: "Sunday", message: "Check labels for consistency in March.", date: "2024-03-10" },

    // April 2024
    { day: "Tuesday", message: "Labels should match April's predictions.", date: "2024-04-02" },
    { day: "Thursday", message: "Ensure labels are consistent in April.", date: "2024-04-04" },
    { day: "Saturday", message: "Review labels for accuracy in April.", date: "2024-04-06" },
    { day: "Monday", message: "Labels should reflect April output.", date: "2024-04-08" },
    { day: "Wednesday", message: "Check April labels for consistency.", date: "2024-04-10" },

    // May 2024
    { day: "Friday", message: "Labels must be accurate in May.", date: "2024-05-03" },
    { day: "Sunday", message: "Ensure May labels are consistent.", date: "2024-05-05" },
    { day: "Tuesday", message: "Review May label accuracy.", date: "2024-05-07" },
    { day: "Thursday", message: "Labels should match May's output.", date: "2024-05-09" },
    { day: "Saturday", message: "Check labels for May alignment.", date: "2024-05-11" },

    // June 2024
    { day: "Monday", message: "Labels should reflect June predictions.", date: "2024-06-03" },
    { day: "Wednesday", message: "Ensure labels are consistent in June.", date: "2024-06-05" },
    { day: "Friday", message: "Review labels for accuracy in June.", date: "2024-06-07" },
    { day: "Sunday", message: "Labels must match June's output.", date: "2024-06-09" },
    { day: "Tuesday", message: "Check June labels for consistency.", date: "2024-06-11" },

    // July 2024
    { day: "Thursday", message: "Labels should be consistent in July.", date: "2024-07-04" },
    { day: "Saturday", message: "Ensure July labels are accurate.", date: "2024-07-06" },
    { day: "Monday", message: "Review July label alignment.", date: "2024-07-08" },
    { day: "Wednesday", message: "Labels must reflect July predictions.", date: "2024-07-10" },
    { day: "Friday", message: "Check labels for consistency in July.", date: "2024-07-12" },

    // August 2024
    { day: "Sunday", message: "Labels should match August output.", date: "2024-08-04" },
    { day: "Tuesday", message: "Ensure labels are consistent in August.", date: "2024-08-06" },
    { day: "Thursday", message: "Review August label accuracy.", date: "2024-08-08" },
    { day: "Saturday", message: "Labels should reflect August predictions.", date: "2024-08-10" },
    { day: "Monday", message: "Check labels for accuracy in August.", date: "2024-08-12" },

    // September 2024 (up to the current date)
    { day: "Wednesday", message: "Labels must match September's output.", date: "2024-09-04" },
    { day: "Friday", message: "Review labels for consistency in September.", date: "2024-09-06" },
    { day: "Sunday", message: "Ensure September labels are accurate.", date: "2024-09-08" },
    { day: "Tuesday", message: "Labels should be consistent in September.", date: "2024-09-10" },
    { day: "Thursday", message: "Check labels for September predictions.", date: "2024-09-12" },

];

export default calenderCardsData;