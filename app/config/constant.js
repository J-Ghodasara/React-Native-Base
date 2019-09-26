import { Platform } from 'react-native';
const constant = {

        onBoarding: {
                onBoarding_image_one: require('../assets/image/onb_one.png'),
                onBoarding_image_two: require('../assets/image/onb_two.png'),
                onBoarding_image_three: require('../assets/image/onb_three.png'),
                onBoarding_image_four: require('../assets/image/onb_four.png'),
        },
        splash: {
                grubshoots_image: require('../assets/image/grub_shoots.png'),
                bg_food: require('../assets/image/bg_food.svg'),
                bg_food2: require('../assets/image/bg_food2.png')
        },
       

        completeProfile: {
                userPlaceHolder: require('../assets/image/user_place.png'),
                postPlaceHolder: require('../assets/image/post_placeholder.png')
        },
        post: {
                userPostPendingStatus: 'pending',
                userPostDeclineStatus: 'decline',
                userPostApprovedStatus: 'approved'
        },
        keyAllConstant: {
                gotLocation:'keyGotLocation',
                isUserFirstTime: 'isFirstTime',
                isFindFriendsFirstTime: 'isFindFriendsFirstTime',
                isLocationChange: 'isLocationChange',
                isFirstTimeSetLocationScreen: 'isFirstTimeSetLocation',
                keySignIn: 'key_sign_in',
                keyRegister: 'key_register',
                isTokenAvailable: 'token-available',
                choosePhoto: 'Choose Photo',
                key_ffContacts: 'key_ffContacts',
                key_ffFacebook: 'key_ffFacebook',
                key_ffNearby: 'key_ffNearby',
                key_grid: 'keyGrid',
                key_list: 'keyList',
                key_popular: 'keyPopular',
                isSetRadius: 'keyISSetRadius',
                key_history: 'keyHistory',
                // key_google: 'AIzaSyCXDaogAL6Eg5cSNBDNg6KcBxUeqL4zd98',
                // key_google: 'AIzaSyCdEb3uvFJaWHKelhEW3dS2HHkil0zjo1Q',
                isFromTopBar: 'isFromTopBar',
                // key_google: 'AIzaSyCXDaogAL6Eg5cSNBDNg6KcBxUeqL4zd98',
                // key_google: 'AIzaSyCv33-dX3cS2LBVqu8-CG1fvzCPP_XshYU',
                key_google: 'AIzaSyCdEb3uvFJaWHKelhEW3dS2HHkil0zjo1Q',
                key_latitudeDelta:"keyLatitudeDelta",
                key_longitudeDelta:"keyLongitudeDelta",
                key_radius:"keyRadius",
                keyLocation: 'location',
                keyUserCity:'UserCity',
                isLocationSelected: 'isLocationSelected',
                userData: 'userData',
                keyLocationPermissionAsked: 'locationPermissionAsked',
                termsAndConditions: 'termsAndConcitions',
                isSignIn: 'isSignIn',
                keyContactsPermissionAsked: 'contactsPermissionAsked',
                keyCameraPermissionAsked: 'cameraPermissionAsked',
                keyGalleryPermissionAsked: 'galleryPermissionAsked',
                keyCompleteProfileName:'name',
                keyCompleteProfileUserName:'username' ,
                keyCompleteProfilePassword:'password',
                keyCompleteProfileEmail:'email',
                keyCompleteProfilePhone:'phone',
                keyCompleteProfileSocialId:'socialId',
                keyCompleteProfileSocialToken:'socialToken',
                keyCompleteProfileDeviceId:'deviceId',
                keyEditProfileTown:'town',
                keyEditProfileLatitude:'latitude',
                keyEditProfileLongitude:'longitude',
                keyEditProfileCountry:'country',
                keyLocality:'locality',
                keyAdminLevel2:'administrative_area_level_2',
                keyPolitical:'political',
                keyAdminLevel1:'administrative_area_level_1',
                keyDenied:'denied',
                keyAuthorized:'authorized',
                keyContacts:'contacts',
                keyffContacts:'key_ffContacts',
                keyffFacebook:'key_ffFacebook',
                keyffNearby:'key_ffNearby',
                keyFromSettings:'fromSettings',
                keyPubupdateLocation:'updateLocation',
                keyPubMoveToIndex:'moveToIndex',
                keyPrivacyLink:'https://www.iubenda.com/privacy-policy/71630770',
                keyPubProgress:'progressShow'
        },
        font: {
                robotoBold: Platform.OS === 'android' ? 'roboto_bold' : 'Roboto-Bold',
                muliBold: Platform.OS === 'android' ? 'muli_bold' : 'Muli-Bold',
                muliRegular: Platform.OS === 'android' ? 'muli_regular' : 'Muli-Regular',
                robotoRegular: Platform.OS === 'android' ? 'roboto_regular' : 'Roboto-Regular',
                // muliExtraBold : Platform.OS === 'android' ? 'muli_extra_bold' : 'MuliExtraBold'
        },
        api: {
                RegisterApi: "signup",
                LoginApi: "login",
                ForgotPassword: "forgot-password",
                GetSuggestedUsername: "suggest-username",
                VerifyOTP: 'verify-otp',
                ChangeNumberApi: 'change-phone-number',
                getContacts: 'near-contacts',
                ResendOTP: 'resend-otp',
                getNearbyFriends: 'nearby-friends',
                followUser: 'follow-unfollow',
                getFbFriends: 'near-fb-users',
                getUserProfile: 'user-profile',
                SearchHistroryApi: 'location-history',
                SearchPopularApi: 'popular-location',
                setLocation: 'set-location',
                mealDietaryCusine: 'list-cuisine-diet-meal',
                statusList: 'status-list',
                changePassword: 'change-password',
                getMyProfile: 'get-profile',
                saveUserData: 'edit-profile',
                logout: 'logout',
                getUsers: 'status-list',
                create_post: 'create-post',
                termsAndPrivacy: 'privacy-policy-terms',
                overall_search:'overall-search',
                user_search:'search-username',
                resendVerification:'resend-verification',
                historySearch:'search-history',
                checkEmail:'check-email',
               
        },
        action: {
                PostRestaurant: "post_restaurant",
                PostHome: "post_home",
                PostBusiness: "post_business",
                SearchPopular :'popular',
                SearchHistory :'history'

        },

        value: {
                max_tag_user: 10
        }


};

export default constant;