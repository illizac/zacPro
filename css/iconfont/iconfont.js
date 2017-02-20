;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontshunfeng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.1568 58.6414c-241.3782 0-437.0546 195.6673-437.0546 437.0367 0 241.3684 195.6764 437.0367 437.0546 437.0367s437.0546-195.6683 437.0546-437.0367C964.2114 254.3087 768.5351 58.6414 527.1568 58.6414zM527.1568 868.2585c-205.7789 0-372.5957-166.8099-372.5957-372.5804s166.8167-372.5804 372.5957-372.5804 372.5957 166.8099 372.5957 372.5804S732.9358 868.2585 527.1568 868.2585zM484.517 396.5783l0-59.959348c-29.2314-29.2302-210.8657-51.9648-210.8657 69.9526 0 116.9207 168.8924 111.4245 168.8924 171.8835 0 66.9546-96.4386 68.4536-161.8969 7.9946l0 69.952572c62.4602 52.4644 225.8561 41.4719 225.8561-72.9505 0-112.4238-163.3959-122.9167-163.3959-177.8794C343.1071 372.5945 406.5667 346.1125 484.517 396.5783zM549.4756 691.3784l0-350.762183c0 0 108.9306-48.9668 216.8619 0l0 61.957992c0 0-92.9408-40.9722-154.9013 0l0 288.804191L549.475628 691.3784zM697.0486 495.6781m-32.8121 0a32.833 32.833 0 1 0 65.6242 0 32.833 32.833 0 1 0-65.6242 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M470.584742 374.084742C458.111533 361.611533 458.179565 341.320435 470.594464 328.905536L473.405536 326.094464C485.884112 313.615887 506.032272 313.532272 518.6556 326.1556L681.3444 488.8444C693.856742 501.356742 693.967728 521.532272 681.3444 534.1556L518.6556 696.8444C506.143258 709.356742 485.820435 709.320435 473.405536 696.905536L470.594464 694.094464C458.115888 681.615888 458.008717 661.491283 470.584742 648.915258L608 511.5 470.584742 374.084742Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.227789 0 0 229.227789 0 512c0 282.745263 229.227789 512 512 512s512-229.254737 512-512C1024 229.227789 794.772211 0 512 0L512 0zM738.856421 637.062737c0 0-16.208842 44.220632-45.945263 83.941053 0 0 53.126737 18.054737 48.64 64.983579 0 0 1.778526 52.345263-113.461895 48.734316 0 0-81.071158-6.319158-105.377684-40.609684l-21.423158 0c-24.306526 34.304-105.350737 40.609684-105.350737 40.609684-115.280842 3.610947-113.475368-48.734316-113.475368-48.734316-4.500211-46.928842 48.626526-64.983579 48.626526-64.983579-29.709474-39.720421-45.918316-83.941053-45.918316-83.941053-72.057263 116.439579-64.848842-16.249263-64.848842-16.249263 13.527579-78.524632 70.238316-129.967158 70.238316-129.967158-8.111158-71.316211 21.611789-83.941053 21.611789-83.941053C318.410105 186.287158 508.025263 190.140632 512 190.248421c3.988211-0.107789 193.576421-3.961263 199.828211 216.643368 0 0 29.709474 12.638316 21.611789 83.941053 0 0 56.737684 51.442526 70.238316 129.967158l0 0C803.678316 620.813474 810.873263 753.502316 738.856421 637.062737L738.856421 637.062737zM738.856421 637.062737"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M958.92847 888.74655l-60.819181 60.797691L699.361737 750.775198c-152.059208 128.796388-379.882983 121.785717-523.292184-21.665439-151.134139-151.092183-151.134139-396.111596 0-547.245735 151.11265-151.092183 396.110573-151.092183 547.245735 0 138.181129 138.202619 149.58076 354.690208 35.059494 506.328837L958.92847 888.74655zM670.115646 235.08311c-121.742738-121.722272-319.126224-121.722272-440.848497 0-121.742738 121.742738-121.742738 319.105758 0 440.828031 114.038266 114.038266 294.41645 121.240295 416.85299 21.624507l-6.402827-6.424316 60.777225-60.797691 4.114714 4.114714C790.158672 512.789992 778.842952 343.830883 670.115646 235.08311z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuchekong01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.439568 212.283848c0.062422-0.738827 0.091074-1.471514 0.11154-2.204202 0.00921-0.350994 0.053212-0.692778 0.053212-1.045819 0-0.195451-0.026606-0.384763-0.029676-0.580215-0.011256-0.810459-0.060375-1.611707-0.121773-2.412956-0.037862-0.50142-0.071631-1.00284-0.128937-1.49812-0.088004-0.756223-0.210801-1.50119-0.342808-2.246157-0.095167-0.543376-0.186242-1.087774-0.303922-1.622964-0.146333-0.660032-0.324388-1.307785-0.503467-1.956561-0.164752-0.595564-0.325411-1.191128-0.51677-1.774413-0.187265-0.571005-0.405229-1.127683-0.618077-1.688455-0.239454-0.630357-0.477884-1.258667-0.74906-1.87265-0.225127-0.50756-0.475837-0.99977-0.721431-1.497097-0.309038-0.62524-0.61603-1.25048-0.957815-1.856277-0.274246-0.48607-0.574075-0.954745-0.868787-1.428535-0.358157-0.576121-0.713244-1.153266-1.100054-1.707898-0.342808-0.49221-0.712221-0.963954-1.077541-1.440815-0.382717-0.49835-0.759293-0.998747-1.164522-1.476631-0.425695-0.503467-0.87902-0.981351-1.331321-1.463328-0.388856-0.413416-0.769526-0.832971-1.176802-1.230014-0.50756-0.496304-1.042749-0.962931-1.576915-1.431605-0.393973-0.344854-0.780783-0.696872-1.189082-1.026376-0.569982-0.460488-1.164522-0.88823-1.762133-1.315972-0.419556-0.300852-0.833995-0.608867-1.26583-0.893346-0.594541-0.390903-1.210571-0.751107-1.829671-1.110287-0.480954-0.280386-0.956791-0.563842-1.450025-0.823761-0.583285-0.305969-1.184989-0.583285-1.786693-0.860601-0.569982-0.264013-1.13894-0.528026-1.724271-0.76441-0.552585-0.223081-1.119497-0.418532-1.686409-0.61603-0.665149-0.233314-1.329275-0.462534-2.010797-0.660032-0.536212-0.155543-1.081635-0.285502-1.62808-0.418532-0.721431-0.176009-1.443885-0.344854-2.180666-0.479931-0.214894-0.039909-0.418532-0.103354-0.63445-0.13917-0.3776-0.062422-0.751107-0.077771-1.127683-0.128937-0.695848-0.095167-1.39272-0.183172-2.099824-0.240477-0.669242-0.055259-1.333368-0.079818-1.998517-0.100284-0.400113-0.01228-0.789992-0.060375-1.193175-0.060375l-681.020508 0L232.92291 32.305777c-0.022513-0.12689-0.062422-0.245593-0.085958-0.37146-0.156566-0.828878-0.360204-1.638313-0.567935-2.446725-0.11768-0.456395-0.220011-0.919952-0.353041-1.369184-0.214894-0.724501-0.472767-1.428535-0.728594-2.134617-0.190335-0.529049-0.367367-1.064238-0.579191-1.581008-0.225127-0.545422-0.485047-1.071402-0.733711-1.604544-0.300852-0.648776-0.595564-1.300622-0.929162-1.926886-0.191358-0.357134-0.408299-0.696872-0.60989-1.046842-0.440022-0.76441-0.88209-1.524726-1.370207-2.252297-0.137123-0.203638-0.290619-0.394996-0.430812-0.595564-0.584308-0.837064-1.183965-1.659803-1.828648-2.443655-0.095167-0.115634-0.200568-0.222057-0.296759-0.335644-0.708128-0.841158-1.439792-1.659803-2.214435-2.434445-0.092098-0.092098-0.193405-0.176009-0.286526-0.267083-0.788969-0.773619-1.600451-1.521656-2.449795-2.224668-0.147356-0.122797-0.305969-0.230244-0.455371-0.349971-0.811482-0.650823-1.63729-1.282203-2.49789-1.866511-0.229221-0.155543-0.472767-0.291642-0.706081-0.443092-0.803295-0.51984-1.611707-1.028423-2.450818-1.487887-0.311085-0.170892-0.63752-0.315178-0.953721-0.477884-0.789992-0.405229-1.582031-0.803295-2.399653-1.155313-0.36532-0.156566-0.744967-0.284479-1.116427-0.430812-0.799202-0.314155-1.599428-0.624217-2.421142-0.88516-0.38681-0.122797-0.786922-0.215918-1.178849-0.327458-0.831948-0.23536-1.663896-0.465604-2.514263-0.645706-0.394996-0.083911-0.800225-0.138146-1.199315-0.209778-0.868787-0.155543-1.737574-0.302899-2.62171-0.400113-0.420579-0.046049-0.848321-0.061398-1.272993-0.094144-0.861624-0.065492-1.723248-0.12382-2.596128-0.130983-0.132006-0.001023-0.260943-0.019443-0.39295-0.019443L85.254709 0.346901c-21.459754 0-38.85903 17.383926-38.85903 38.824237s17.399275 38.824237 38.85903 38.824237l76.92602 0 87.234807 485.044068c0.005117 0.025583 0.008186 0.052189 0.014326 0.077771l32.839943 182.598758c0.01535 0.085958 0.052189 0.161682 0.067538 0.24764 0.385786 2.076288 0.950651 4.084015 1.65264 6.031367 0.106424 0.297782 0.211824 0.593518 0.325411 0.887206 0.716314 1.842974 1.563612 3.615341 2.540869 5.309936 0.189312 0.328481 0.388856 0.644683 0.587378 0.966001 1.013073 1.642406 2.12029 3.217275 3.358491 4.684696 0.194428 0.230244 0.405229 0.440022 0.604774 0.665149 1.300622 1.471514 2.688225 2.861164 4.195555 4.120854 0.052189 0.044002 0.098237 0.094144 0.151449 0.137123 1.562589 1.292436 3.25002 2.431376 5.003967 3.470031 0.220011 0.12996 0.429789 0.270153 0.652869 0.397043 1.696642 0.959861 3.477194 1.778506 5.320169 2.478448 0.313132 0.118704 0.623193 0.232291 0.939395 0.343831 1.825578 0.639566 3.703345 1.160429 5.64251 1.523703 0.334621 0.063445 0.673335 0.099261 1.011027 0.154519 1.934049 0.310062 3.903913 0.511653 5.921873 0.524956 0.075725 0 0.148379 0.019443 0.224104 0.019443 0.023536 0 0.047072-0.00614 0.070608-0.00614l533.403472 0c21.459754 0 38.85903-17.383926 38.85903-38.824237s-17.399275-38.824237-38.85903-38.824237L353.011986 700.023304l-19.050891-105.926518 546.692127 0c0.024559 0 0.051165 0.00614 0.075725 0.00614 0.074701 0 0.145309-0.019443 0.218988-0.019443 2.048659-0.013303 4.047176-0.218988 6.008854-0.538259 0.323365-0.053212 0.647753-0.086981 0.969071-0.147356 1.963725-0.370437 3.864004-0.904603 5.711072-1.558495 0.309038-0.109494 0.61296-0.218988 0.917906-0.335644 1.859347-0.711198 3.650133-1.549286 5.360078-2.524496 0.229221-0.130983 0.447185-0.273223 0.674359-0.408299 1.749854-1.045819 3.428076-2.197038 4.984524-3.496637 0.105401-0.088004 0.199545-0.187265 0.303922-0.276293 1.514493-1.291412 2.921539-2.698458 4.222161-4.204765 0.135076-0.155543 0.281409-0.296759 0.414439-0.455371 1.274016-1.523703 2.403746-3.165086 3.435239-4.874007 0.172939-0.286526 0.354064-0.563842 0.51984-0.855484 0.982374-1.726318 1.819438-3.538593 2.530636-5.417383 0.11461-0.303922 0.227174-0.605797 0.334621-0.913812 0.678452-1.937119 1.209548-3.937682 1.574868-6.000668 0.024559-0.135076 0.079818-0.254803 0.102331-0.38988l58.060347-346.239745c0.065492-0.38988 0.081864-0.775666 0.135076-1.165546C977.298352 213.619262 977.383286 212.957183 977.439568 212.283848zM271.690866 247.858064l621.141746 0-45.039799 268.591271L319.996035 516.449335 271.690866 247.858064z"  ></path>' +
    '' +
    '<path d="M388.902404 809.349245c-59.135842 0-107.247606 48.068785-107.247606 107.152439s48.111764 107.152439 107.247606 107.152439 107.247606-48.068785 107.247606-107.152439S448.038246 809.349245 388.902404 809.349245zM388.902404 946.004625c-16.279778 0-29.529547-13.238512-29.529547-29.503964s13.249769-29.503964 29.529547-29.503964 29.529547 13.238512 29.529547 29.503964S405.182182 946.004625 388.902404 946.004625z"  ></path>' +
    '' +
    '<path d="M785.555329 809.349245c-59.135842 0-107.247606 48.068785-107.247606 107.152439s48.111764 107.152439 107.247606 107.152439 107.247606-48.068785 107.247606-107.152439S844.691171 809.349245 785.555329 809.349245zM785.555329 946.004625c-16.279778 0-29.529547-13.238512-29.529547-29.503964s13.249769-29.503964 29.529547-29.503964 29.529547 13.238512 29.529547 29.503964S801.835108 946.004625 785.555329 946.004625z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont7tian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.235306 311.99992c0 0-0.069585 0.190335-0.195451 0.542352l-0.076748-0.542352-73.084529 151.585417 77.526701-8.919137c5.582135 64.582901-3.53757 130.080637-27.467585 192.110389-20.960381 54.332443-51.928696 102.927207-92.044346 144.4366-38.752606 40.099277-84.373643 71.942519-135.594211 94.64559-51.220568 22.702048-105.452727 35.117822-161.189146 36.899398-57.697073 1.845021-114.499777-7.847735-168.83222-28.807093-54.332443-20.960381-102.928231-51.928696-144.437623-92.044346-40.098253-38.752606-71.942519-84.373643-94.64559-135.594211-22.702048-51.220568-35.117822-105.452727-36.899398-161.189146-1.843998-57.69605 7.847735-114.499777 28.808116-168.83222 20.960381-54.332443 51.928696-102.928231 92.043323-144.437623 38.752606-40.098253 84.374666-71.942519 135.594211-94.64559 51.220568-22.702048 105.45375-35.117822 161.189146-36.899398 57.69605-1.843998 114.499777 7.847735 168.83222 28.808116 49.389874 19.053961 94.204545 46.495964 133.199675 81.566714l20.528546-22.825868c-41.784662-37.578874-89.788979-66.979484-142.679583-87.383186-58.186214-22.447245-119.037117-32.82664-180.862207-30.849612-59.706847 1.909489-117.794823 15.204283-172.648129 39.517015-54.853305 24.312732-103.715153 58.421574-145.229662 101.376898-42.987047 44.479027-76.163657 96.535637-98.610902 154.721851C74.014714 383.427716 63.635319 444.278619 65.612347 506.10371c1.908466 59.70787 15.204283 117.794823 39.517015 172.648129 24.312732 54.853305 58.421574 103.716176 101.376898 145.230686 44.479027 42.987047 96.535637 76.163657 154.721851 98.610902 58.186214 22.447245 119.037117 32.82664 180.862207 30.849612 59.70787-1.908466 117.794823-15.204283 172.648129-39.518039 54.853305-24.312732 103.716176-58.420551 145.229662-101.376898 42.987047-44.479027 76.163657-96.535637 98.610902-154.721851C1001.871003 545.607422 999.97277 422.790212 953.235306 311.99992z"  ></path>' +
    '' +
    '<path d="M521.193383 695.52485c10.339486-119.020744 57.552787-232.886071 141.671627-341.565283l0-60.162218L367.876532 293.797349l0 67.925019 205.715245 0c-77.628008 104.798834-124.204813 216.086453-139.731438 333.802482L521.193383 695.52485z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontarrowright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M772.458707 499.408403 287.262511 5.843236c-7.552486-7.756607-19.799761-7.756607-27.556368-0.204121-7.756607 7.552486-7.756607 19.799761-0.204121 27.556368l471.724194 479.684923L253.378384 990.728237c-7.552486 7.552486-7.552486 19.799761 0 27.556368 3.878304 3.878304 8.777213 5.715395 13.676123 5.715395 4.89891 0 10.001941-1.837091 13.676123-5.715395L772.458707 526.76065C780.011193 519.208164 780.011193 506.960889 772.458707 499.408403L772.458707 499.408403zM772.458707 499.408403"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowdown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.288161 679.018043C520.530018 679.014602 525.767422 677.016987 529.74889 673.035519L826.635522 376.148887C834.629339 368.15507 834.609723 355.174918 826.62806 347.193255 818.630123 339.195318 805.63784 339.220382 797.672428 347.185794L515.274803 629.583418 232.877179 347.185794C224.883361 339.191976 211.90321 339.211592 203.921546 347.193255 195.923609 355.191193 195.948673 368.183475 203.914085 376.148887L500.800717 673.035519C504.79638 677.031183 510.037851 679.024736 515.278192 679.022597Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengpin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.199293 34.82004 136.724964 160.293753l1.948375 488.586754 0.438998 5.285377c0.699941 3.214205 15.537881 80.834027 89.705068 155.608034 57.027831 57.639768 196.868763 132.927475 256.54798 165.064406 9.383718 5.066389 16.380062 8.794293 20.38119 11.089569l14.176884 7.878434 17.390066-9.054213c34.890648-17.537422 212.298174-108.36301 278.237979-174.868703 74.239841-74.866105 89.078805-152.466484 89.699951-155.680688l2.423189-493.873154L522.199293 34.82004 522.199293 34.82004 522.199293 34.82004 522.199293 34.82004zM846.452281 645.51383c-2.788509 11.385305-18.766412 67.63133-72.844052 122.207319-54.960753 55.547107-208.918193 136.215358-252.656347 158.604274-2.314719-1.216711-4.828982-2.520403-7.472182-3.969405-52.463885-28.242228-191.765535-103.235223-242.614643-154.63487-54.233182-54.648644-70.087265-110.822015-72.881914-122.207319l-1.77032-441.885106L522.199293 97.458659l325.982376 106.171088L846.452281 645.51383 846.452281 645.51383 846.452281 645.51383 846.452281 645.51383zM735.580125 690.488137 305.160141 690.488137c-19.269879 0-34.899858-15.702634-34.899858-35.07382 0-19.37528 15.629979-35.07382 34.899858-35.07382l58.165748 0L363.325889 444.973444c0-19.370163 15.625886-35.07382 34.886555-35.07382 19.284205 0 34.908044 15.702634 34.908044 35.07382l0 175.368076 58.157561 0L491.278049 328.060711l-139.589199 0c-19.269879 0-34.899858-15.702634-34.899858-35.07382 0-19.37528 15.629979-35.07382 34.899858-35.07382l337.354378 0c19.283182 0 34.889625 15.69854 34.889625 35.07382 0 19.370163-15.607466 35.07382-34.889625 35.07382L561.072649 328.060711l0 81.84403 116.327402 0c19.284205 0 34.890648 15.69854 34.890648 35.07382 0 19.370163-15.607466 35.054377-34.890648 35.054377L561.072649 480.032938l0 140.308583 174.507476 0c19.279089 0 34.886555 15.702634 34.886555 35.07382C770.465656 674.78448 754.859213 690.488137 735.580125 690.488137L735.580125 690.488137 735.580125 690.488137 735.580125 690.488137zM735.580125 690.488137"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontdidian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M856.826832 231.949045c-6.0562-15.004133-23.083281-22.286745-38.056708-16.286537-14.966202 5.99479-22.288552 23.029095-16.340723 38.026003 17.883221 44.658382 27.197813 87.172801 27.197813 129.571623 0 54.908587-33.947595 139.364858-94.856391 243.138476-22.288552 37.827321-47.654874 77.540318-75.600455 118.510432-38.002522 55.771953-78.799242 111.13751-119.595961 163.4849-11.286966 14.465884-21.925505 27.878752-31.77112 40.104943-9.845615-12.226192-20.48596-25.637253-31.77112-40.104943-40.796719-52.349197-81.568152-107.714754-119.601379-163.4849-27.938356-40.971921-53.342609-80.683112-75.567943-118.510432-60.939501-103.773618-94.879872-188.229889-94.879872-243.138476 0-176.942923 144.877392-321.827539 321.822121-321.827539 59.94067 0 119.07758 17.88864 171.654359 51.059568 13.600713 8.626428 31.657329 4.571501 40.33975-9.117715 8.566823-13.653093 4.571501-31.709709-9.141196-40.337944-61.717975-38.972454-131.598183-60.114066-202.852913-60.114066-209.25771 0-380.339503 171.081792-380.339503 380.339503 0 68.424408 37.025366 160.567882 102.940958 272.796338 22.944203 38.972454 49.027589 79.769173 77.684814 121.824816 38.771965 56.91528 80.280328 113.144202 121.77063 166.400113 14.539938 18.685176 28.023248 35.652652 40.139261 50.510482 7.315124 9.027405 12.544084 15.316606 15.401498 18.74478 11.682524 13.936666 33.109517 13.936666 44.79746 0 2.855608-3.428174 8.115272-9.713763 15.430397-18.74478 12.110595-14.85783 25.601129-31.8235 40.108556-50.510482 41.484883-53.257717 82.973378-109.484833 121.772436-166.400113 28.624714-42.055643 54.746029-82.852362 77.654108-121.824816 65.944491-112.22665 102.971663-204.37193 102.971663-272.796338C888.139176 332.861637 877.282087 283.145884 856.826832 231.949045L856.826832 231.949045zM332.263783 394.97517c0 92.080256 74.654004 166.737873 166.768578 166.737873 92.083869 0 166.766772-74.659423 166.766772-166.737873 0-92.114574-74.682904-166.766772-166.766772-166.766772C406.917788 228.208398 332.263783 302.860596 332.263783 394.97517L332.263783 394.97517zM607.288977 394.97517c0 59.770887-48.514627 108.225909-108.254809 108.225909-59.801593 0-108.256615-48.462247-108.256615-108.225909 0-59.799787 48.462247-108.254809 108.256615-108.254809C558.77435 286.720361 607.288977 335.175383 607.288977 394.97517L607.288977 394.97517zM607.288977 394.97517"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kefu" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512.003453-0.000208c-282.768998 0-512.003861 229.234463-512.003861 512.003461 0 282.771995 229.234863 511.997067 512.003861 511.997067 282.771995 0 511.997067-229.230866 511.997067-511.997067C1024.00032 229.234255 794.768455-0.000208 512.003453-0.000208zM237.269002 587.733455c0 4.882835-4.021969 8.854447-8.962755 8.854447-4.943783 0-8.880825-3.971612-8.880825-8.854447l0-75.834713c0-4.845866 3.937042-8.820476 8.880825-8.820476 4.940786 0 8.962755 3.97461 8.962755 8.820476L237.269002 587.733455zM791.684085 613.653346c0 21.295835-17.381174 38.517944-38.943781 38.517944l-37.150111 0c-21.403743-0.157865-38.695992-17.311234-38.695992-38.517944l0-134.553426c0-18.429679 13.149783-33.834539 30.651854-37.609719-36.017277-78.108174-107.005524-131.449074-188.629699-131.449074-81.537648 0-152.523098 53.3409-188.587135 131.449074 17.505068 3.768785 30.661246 19.174045 30.661246 37.609719l0 134.553426c0 15.87346-9.717111 29.402919-23.541319 35.331862l96.9525 78.40592 39.579639 0 0-1.995298c0-7.036997 5.818037-12.751123 12.985324-12.751123l61.518325 0c7.163889 0 13.029886 5.714126 13.029886 12.751123l0 22.448851c0 7.043991-5.865996 12.840047-13.029886 12.840047l-61.518325 0c-7.160892 0-12.985324-5.802051-12.985324-12.840047l0-1.982309-46.281322 0-115.714895-93.683888-26.885467 0c-21.527037 0-38.949776-17.229303-38.949776-38.512948l0-134.565416c0-21.28924 17.422539-38.515546 38.949776-38.515546l10.346574 0c39.149605-95.91998 124.589525-162.639469 223.47038-162.639469 98.885451 0 184.366336 66.719488 223.473777 162.639469l10.350171 0c21.562607 0 38.943781 17.226306 38.943781 38.515546L791.684285 613.653346zM819.200614 587.733455c0 4.882835-4.016574 8.854447-8.919392 8.854447-4.940786 0-8.918393-3.971612-8.918393-8.854447l0-75.834713c0-4.845866 3.977607-8.820476 8.918393-8.820476 4.902818 0 8.919392 3.97461 8.919392 8.820476L819.200614 587.733455z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.809524 1024c-4.87619 0-14.628571 0-19.504762-4.87619l-487.619048-487.619048c-9.752381-9.752381-9.752381-24.380952 0-34.133333l487.619048-487.619048c9.752381-9.752381 24.380952-9.752381 34.133333 0s9.752381 24.380952 0 34.133333l-468.114285 468.114286 468.114285 468.114286c9.752381 9.752381 9.752381 24.380952 0 34.133333 0 9.752381-9.752381 9.752381-14.628571 9.752381z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)