(function () {
    var searchForm = document.getElementById("searchForm");
    var tabs = document.querySelectorAll(".tab-button");
    var panels = document.querySelectorAll("[data-tab-panel]");
    var topbar = document.querySelector(".topbar");
    var tabsNav = document.querySelector(".tabs-nav");
    var body = document.body;
    var profileMenuTrigger = document.querySelector(".profile-menu");
    var profileDrawerOverlay = document.getElementById("profileDrawerOverlay");
    var profileDrawer = profileDrawerOverlay ? profileDrawerOverlay.querySelector(".profile-drawer") : null;
    var profileDrawerCloseButtons = profileDrawerOverlay ? Array.from(profileDrawerOverlay.querySelectorAll("[data-profile-drawer-close]")) : [];
    var notificationButton = document.querySelector(".icon-button");
    var notificationsOverlay = document.getElementById("notificationsOverlay");
    var notificationsDrawer = notificationsOverlay ? notificationsOverlay.querySelector(".notifications-drawer") : null;
    var notificationsCloseButtons = notificationsOverlay ? Array.from(notificationsOverlay.querySelectorAll("[data-notifications-close]")) : [];
    var quickNavLinks = Array.from(document.querySelectorAll(".quick-nav-link"));
    var quickScrollLinks = Array.from(document.querySelectorAll(".quick-card a[href^='#']"));
    var summaryModalTrigger = document.getElementById("summaryModalTrigger");
    var personalDetailsModalTrigger = document.getElementById("personalDetailsModalTrigger");
    var addressModalTrigger = document.getElementById("addressModalTrigger");
    var languagesModalTrigger = document.getElementById("languagesModalTrigger");
    var educationModalTrigger = document.querySelector("#education .text-link");
    var achievementsModalTrigger = document.getElementById("achievementsModalTrigger");
    var skillsModalTrigger = document.getElementById("skills");
    var experienceModalTrigger = document.getElementById("experience");
    var projectsModalTrigger = document.getElementById("projects");
    var profilePhotoTrigger = document.getElementById("profilePhotoTrigger");
    var quickSections = quickNavLinks
        .map(function (link) {
            return document.querySelector(link.getAttribute("href"));
        })
        .filter(Boolean);
    var editLink = document.querySelector(".edit-link");
    var modalOverlay = document.getElementById("profileModalOverlay");
    var profileModal = modalOverlay ? modalOverlay.querySelector(".profile-modal") : null;
    var modalCloseButtons = modalOverlay ? Array.from(modalOverlay.querySelectorAll("[data-modal-close]")) : [];
    var profileModalForm = document.getElementById("profileModalForm");
    var educationModalOverlay = document.getElementById("educationModalOverlay");
    var educationModal = educationModalOverlay ? educationModalOverlay.querySelector(".education-modal") : null;
    var educationCloseButtons = educationModalOverlay ? Array.from(educationModalOverlay.querySelectorAll("[data-education-close]")) : [];
    var educationModalForm = document.getElementById("educationModalForm");
    var educationSchoolInput = document.getElementById("educationSchoolInput");
    var educationDegreeInput = document.getElementById("educationDegreeInput");
    var educationFieldInput = document.getElementById("educationFieldInput");
    var educationStartMonth = document.getElementById("educationStartMonth");
    var educationStartYear = document.getElementById("educationStartYear");
    var educationEndMonth = document.getElementById("educationEndMonth");
    var educationEndYear = document.getElementById("educationEndYear");
    var educationGradeInput = document.getElementById("educationGradeInput");
    var educationActivitiesInput = document.getElementById("educationActivitiesInput");
    var educationDescriptionInput = document.getElementById("educationDescriptionInput");
    var educationDeleteButton = educationModalOverlay ? educationModalOverlay.querySelector(".delete-link") : null;
    var educationCounters = educationModalOverlay ? Array.from(educationModalOverlay.querySelectorAll("[data-counter-for]")) : [];
    var experienceModalOverlay = document.getElementById("experienceModalOverlay");
    var experienceModal = experienceModalOverlay ? experienceModalOverlay.querySelector(".experience-modal") : null;
    var experienceCloseButtons = experienceModalOverlay ? Array.from(experienceModalOverlay.querySelectorAll("[data-experience-close]")) : [];
    var experienceEditTriggers = Array.from(document.querySelectorAll("[data-experience-edit]"));
    var experienceRemoveButtons = Array.from(document.querySelectorAll("[data-experience-remove]"));
    var experienceModalForm = document.getElementById("experienceModalForm");
    var experienceRoleInput = document.getElementById("experienceRoleInput");
    var experienceCompanyInput = document.getElementById("experienceCompanyInput");
    var experienceStartMonth = document.getElementById("experienceStartMonth");
    var experienceStartYear = document.getElementById("experienceStartYear");
    var experienceEndMonth = document.getElementById("experienceEndMonth");
    var experienceEndYear = document.getElementById("experienceEndYear");
    var experienceDescriptionInput = document.getElementById("experienceDescriptionInput");
    var projectsModalOverlay = document.getElementById("projectsModalOverlay");
    var projectsModal = projectsModalOverlay ? projectsModalOverlay.querySelector(".projects-modal") : null;
    var projectsCloseButtons = projectsModalOverlay ? Array.from(projectsModalOverlay.querySelectorAll("[data-projects-close]")) : [];
    var projectsModalForm = document.getElementById("projectsModalForm");
    var projectNameInput = document.getElementById("projectNameInput");
    var projectStartMonth = document.getElementById("projectStartMonth");
    var projectStartYear = document.getElementById("projectStartYear");
    var projectEndMonth = document.getElementById("projectEndMonth");
    var projectEndYear = document.getElementById("projectEndYear");
    var projectDescriptionInput = document.getElementById("projectDescriptionInput");
    var projectSkillsInput = document.getElementById("projectSkillsInput");
    var projectUrlInput = document.getElementById("projectUrlInput");
    var photoModalOverlay = document.getElementById("photoModalOverlay");
    var photoModal = photoModalOverlay ? photoModalOverlay.querySelector(".photo-modal") : null;
    var photoCloseButtons = photoModalOverlay ? Array.from(photoModalOverlay.querySelectorAll("[data-photo-close]")) : [];
    var changePhotoBtn = document.getElementById("changePhotoBtn");
    var deletePhotoBtn = document.getElementById("deletePhotoBtn");
    var profilePhotoInput = document.getElementById("profilePhotoInput");
    var photoPreviewCircle = document.getElementById("photoPreviewCircle");
    var skillsModalOverlay = document.getElementById("skillsModalOverlay");
    var skillsModal = skillsModalOverlay ? skillsModalOverlay.querySelector(".skills-modal") : null;
    var skillsCloseButtons = skillsModalOverlay ? Array.from(skillsModalOverlay.querySelectorAll("[data-skills-close]")) : [];
    var skillsModalForm = document.getElementById("skillsModalForm");
    var skillsChipList = document.getElementById("skillsChipList");
    var profileSkillsList = document.getElementById("profileSkillsList");
    var skillsInput = document.getElementById("skillsInput");
    var skillsPlaceholder = document.getElementById("skillsPlaceholder");
    var languagesModalOverlay = document.getElementById("languagesModalOverlay");
    var languagesModal = languagesModalOverlay ? languagesModalOverlay.querySelector(".languages-modal") : null;
    var languagesCloseButtons = languagesModalOverlay ? Array.from(languagesModalOverlay.querySelectorAll("[data-languages-close]")) : [];
    var languagesModalForm = document.getElementById("languagesModalForm");
    var languagesChipList = document.getElementById("languagesChipList");
    var languagesList = document.getElementById("languagesList");
    var languagesInput = document.getElementById("languagesInput");
    var summaryModalOverlay = document.getElementById("summaryModalOverlay");
    var summaryModal = summaryModalOverlay ? summaryModalOverlay.querySelector(".summary-modal") : null;
    var summaryCloseButtons = summaryModalOverlay ? Array.from(summaryModalOverlay.querySelectorAll("[data-summary-close]")) : [];
    var summaryModalForm = document.getElementById("summaryModalForm");
    var summaryInput = document.getElementById("summaryInput");
    var profileSummaryText = document.getElementById("profileSummaryText");
    var achievementsModalOverlay = document.getElementById("achievementsModalOverlay");
    var achievementsModal = achievementsModalOverlay ? achievementsModalOverlay.querySelector(".achievements-modal") : null;
    var achievementsCloseButtons = achievementsModalOverlay ? Array.from(achievementsModalOverlay.querySelectorAll("[data-achievements-close]")) : [];
    var achievementsModalForm = document.getElementById("achievementsModalForm");
    var achievementsInput = document.getElementById("achievementsInput");
    var achievementsChipList = document.getElementById("achievementsChipList");
    var academicAchievementsList = document.getElementById("academicAchievementsList");
    var uploadResumeBtn = document.getElementById("uploadResumeBtn");
    var resumeInput = document.getElementById("resumeInput");
    var resumeDisplay = document.getElementById("resumeDisplay");
    var resumeUploadState = document.getElementById("resumeUploadState");
    var fullNameInput = document.getElementById("fullNameInput");
    var dobInput = document.getElementById("dobInput") || document.getElementById("birthDate");
    var streetInput = document.getElementById("streetInput");
    var cityInput = document.getElementById("cityInput");
    var stateInput = document.getElementById("StateInput");
    var countryInput = document.getElementById("CountryInput");
    var pinCodeInput = document.getElementById("pinCodeInput");
    var mobileInput = document.getElementById("mobileInput");
    var residingInIndiaInput = document.getElementById("residingInIndia");
    var profileNameHeading = document.getElementById("profileName");
    var profileFullNameValue = document.getElementById("profileFullNameValue");
    var profileGenderSummary = document.getElementById("profileGenderSummary");
    var profileGenderValue = document.getElementById("profileGenderValue");
    var profileCategoryValue = document.getElementById("profileCategoryValue");
    var profileDobSummary = document.getElementById("profileDobSummary");
    var profileDobValue = document.getElementById("profileDobValue");
    var profileCurrentLocationSummary = document.getElementById("profileCurrentLocationSummary");
    var profileStreetValue = document.getElementById("profileStreetValue");
    var profileCityValue = document.getElementById("profileCityValue");
    var profileStateValue = document.getElementById("profileStateValue");
    var profileCountryValue = document.getElementById("profileCountryValue");
    var profilePinCodeValue = document.getElementById("profilePinCodeValue");
    var profilePhoneSummary = document.getElementById("profilePhoneSummary");
    var profilePhoneValue = document.getElementById("profilePhoneValue");
    var progressRing = document.querySelector(".progress-ring");
    var progressRingFill = document.querySelector(".progress-ring-fill");
    var progressBadge = document.querySelector(".progress-badge");
    var profileDrawerTitle = document.getElementById("profileDrawerTitle");
    var profileDrawerLink = document.querySelector(".profile-link");
    var educationRecordTitle = document.getElementById("educationRecordTitle");
    var educationRecordMeta = document.getElementById("educationRecordMeta");
    var educationRecordYear = document.getElementById("educationRecordYear");
    var experienceRoleValue = document.getElementById("experienceRoleValue");
    var experienceCompanyValue = document.getElementById("experienceCompanyValue");
    var experienceTimespanValue = document.getElementById("experienceTimespanValue");
    var experienceDescriptionValue = document.getElementById("experienceDescriptionValue");
    var projectNameValue = document.getElementById("projectNameValue");
    var projectSkillsValue = document.getElementById("projectSkillsValue");
    var projectDurationValue = document.getElementById("projectDurationValue");
    var projectDescriptionValue = document.getElementById("projectDescriptionValue");
    var projectUrlValue = document.getElementById("projectUrlValue");
    var profileAvatar = document.getElementById("profileAvatar");
    var headerProfileAvatar = document.getElementById("headerProfileAvatar");
    var lastModalFocusedElement = null;
    var lastEducationModalFocusedElement = null;
    var lastExperienceModalFocusedElement = null;
    var lastProjectsModalFocusedElement = null;
    var lastPhotoModalFocusedElement = null;
    var lastSkillsModalFocusedElement = null;
    var lastLanguagesModalFocusedElement = null;
    var lastSummaryModalFocusedElement = null;
    var lastAchievementsModalFocusedElement = null;
    var lastProfileDrawerFocusedElement = null;
    var lastNotificationsFocusedElement = null;
    var focusableSelector = [
        "button:not([disabled])",
        "[href]",
        "input:not([type='hidden']):not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])"
    ].join(", ");
    var profileState = {
        fullName: fullNameInput ? fullNameInput.value.trim() : "",
        gender: getCheckedRadioValue("gender"),
        category: getCheckedRadioValue("category"),
        dateOfBirth: dobInput ? dobInput.value.trim() : "",
        street: streetInput ? streetInput.value.trim() : "",
        city: cityInput ? cityInput.value.trim() : "",
        state: stateInput ? stateInput.value.trim() : "",
        country: countryInput ? countryInput.value.trim() : "",
        pinCode: pinCodeInput ? pinCodeInput.value.trim() : "",
        mobileNumber: mobileInput ? mobileInput.value.trim() : "",
        residingInIndia: residingInIndiaInput ? residingInIndiaInput.checked : true
    };
    var experienceState = {
        role: experienceRoleValue ? experienceRoleValue.textContent.trim() : "Frontend Intern",
        company: experienceCompanyValue ? experienceCompanyValue.textContent.trim() : "Campus Project Lab",
        startMonth: experienceStartMonth ? experienceStartMonth.value : "May",
        startYear: experienceStartYear ? experienceStartYear.value : "2025",
        endMonth: experienceEndMonth ? experienceEndMonth.value : "July",
        endYear: experienceEndYear ? experienceEndYear.value : "2025",
        description: experienceDescriptionValue ? experienceDescriptionValue.textContent.trim() : ""
    };
    var experienceDraftState = Object.assign({}, experienceState);
    var experienceModalMode = "edit";
    var projectsState = {
        name: projectNameValue ? projectNameValue.textContent.trim() : "Job Portal Dashboard",
        startMonth: "January",
        startYear: "2025",
        endMonth: "April",
        endYear: "2025",
        description: projectDescriptionValue ? projectDescriptionValue.textContent.trim() : "",
        skills: projectSkillsValue ? projectSkillsValue.textContent.trim() : "HTML, CSS, JavaScript",
        url: projectUrlValue ? projectUrlValue.textContent.trim() : "https://example.com/job-portal-dashboard"
    };
    var skillsState = [
        "Java",
        "Java Developer",
        "Java Development",
        "Java Programming"
    ];
    var skillsDraftState = skillsState.slice();
    var languagesState = [];
    var languagesDraftState = languagesState.slice();
    var summaryState = profileSummaryText ? profileSummaryText.textContent.trim() : "";
    var achievementsState = [
        "my greare achivment is own 4th in entire university"
    ];
    var achievementsDraftState = achievementsState.slice();
    var resumeStorageKey = "user_resume";
    var profilePhotoStorageKey = "user_profile_photo";

    function getCheckedRadioValue(name) {
        var checkedRadio = document.querySelector("input[name='" + name + "']:checked");
        return checkedRadio ? checkedRadio.value : "";
    }

    function isProfileModalOpen() {
        return Boolean(modalOverlay && !modalOverlay.hidden);
    }

    function isEducationModalOpen() {
        return Boolean(educationModalOverlay && !educationModalOverlay.hidden);
    }

    function isExperienceModalOpen() {
        return Boolean(experienceModalOverlay && !experienceModalOverlay.hidden);
    }

    function isProjectsModalOpen() {
        return Boolean(projectsModalOverlay && !projectsModalOverlay.hidden);
    }

    function isPhotoModalOpen() {
        return Boolean(photoModalOverlay && !photoModalOverlay.hidden);
    }

    function isSkillsModalOpen() {
        return Boolean(skillsModalOverlay && !skillsModalOverlay.hidden);
    }

    function isLanguagesModalOpen() {
        return Boolean(languagesModalOverlay && !languagesModalOverlay.hidden);
    }

    function isSummaryModalOpen() {
        return Boolean(summaryModalOverlay && !summaryModalOverlay.hidden);
    }

    function isAchievementsModalOpen() {
        return Boolean(achievementsModalOverlay && !achievementsModalOverlay.hidden);
    }

    function isProfileDrawerOpen() {
        return Boolean(profileDrawerOverlay && !profileDrawerOverlay.hidden && profileDrawerOverlay.classList.contains("open"));
    }

    function isNotificationsOpen() {
        return Boolean(notificationsOverlay && !notificationsOverlay.hidden && notificationsOverlay.classList.contains("open"));
    }

    function syncBodyScrollLock() {
        body.classList.toggle("modal-open", isProfileModalOpen() || isEducationModalOpen() || isExperienceModalOpen() || isProjectsModalOpen() || isPhotoModalOpen() || isSkillsModalOpen() || isLanguagesModalOpen() || isSummaryModalOpen() || isAchievementsModalOpen() || isProfileDrawerOpen() || isNotificationsOpen());
    }

    function setCheckedRadioValue(name, value) {
        var radio = document.querySelector("input[name='" + name + "'][value='" + value + "']");

        if (radio) {
            radio.checked = true;
        }
    }

    function getStickyOffset() {
        var offset = 12;

        if (topbar) {
            offset += topbar.getBoundingClientRect().height;
        }

        if (tabsNav && window.getComputedStyle(tabsNav).position === "sticky") {
            offset += tabsNav.getBoundingClientRect().height;
        }

        return offset;
    }

    function setActiveQuickLink(sectionId) {
        quickNavLinks.forEach(function (link) {
            var isActive = link.getAttribute("href") === "#" + sectionId;
            link.classList.toggle("active", isActive);
            link.classList.toggle("is-active", isActive);
            link.setAttribute("aria-current", isActive ? "true" : "false");
        });
    }

    function clearActiveQuickLinks() {
        quickNavLinks.forEach(function (link) {
            link.classList.remove("active");
            link.classList.remove("is-active");
            link.removeAttribute("aria-current");
        });
    }

    function updateActiveQuickLink() {
        var viewEditPanel = document.getElementById("panel-view-edit");
        var activeSectionId = "";
        var marker = window.scrollY + getStickyOffset() + 24;
        var projectsSection = document.getElementById("projects-section");
        var projectsResumeHandoffPoint = projectsSection ? projectsSection.offsetTop + (projectsSection.offsetHeight * 0.75) : 0;

        if (!viewEditPanel || !viewEditPanel.classList.contains("active")) {
            clearActiveQuickLinks();
            return;
        }

        quickSections.forEach(function (section) {
            if (section.offsetTop <= marker) {
                activeSectionId = section.id;
            }
        });

        if (!activeSectionId && quickSections.length) {
            activeSectionId = quickSections[0].id;
        }

        if (activeSectionId === "projects-section" && projectsSection && marker >= projectsResumeHandoffPoint) {
            activeSectionId = "resume";
        }

        if (activeSectionId) {
            setActiveQuickLink(activeSectionId);
        }
    }

    function setDisplayValue(element, value, emptyText, useLinkStyleWhenEmpty) {
        var resolvedValue = value ? value.trim() : "";
        var hasValue = Boolean(resolvedValue);

        if (!element) {
            return;
        }

        element.textContent = hasValue ? resolvedValue : emptyText;
        element.classList.toggle("empty-value", !hasValue && !useLinkStyleWhenEmpty);
        element.classList.toggle("detail-empty", !hasValue && useLinkStyleWhenEmpty);
        element.classList.toggle("text-link", !hasValue && useLinkStyleWhenEmpty);
    }

    function formatPhoneSummary(value) {
        var resolvedValue = value ? value.trim() : "";

        if (resolvedValue.indexOf("+91 ") === 0) {
            return resolvedValue.slice(4);
        }

        return resolvedValue;
    }

    function getRingColor(percent) {
        if (percent <= 25) {
            return "#ef4444";
        }

        if (percent <= 50) {
            return "#f97316";
        }

        if (percent <= 75) {
            return "#facc15";
        }

        return "#22c55e";
    }

    function updateProfileCompletionRing(percent) {
        var resolvedPercent = Number(percent);
        var safePercent;
        var ringColor;
        var dashOffset;

        if (Number.isNaN(resolvedPercent)) {
            resolvedPercent = 0;
        }

        safePercent = Math.min(Math.max(Math.round(resolvedPercent), 0), 100);
        ringColor = getRingColor(safePercent);

        if (progressRing && progressRingFill) {
            dashOffset = 100 - safePercent;

            progressRing.style.setProperty("--ring", ringColor);
            progressRing.style.setProperty("--ring-track", "#d9dee9");
            progressRing.setAttribute("aria-label", "Profile completion " + safePercent + " percent");

            progressRingFill.style.stroke = ringColor;
            progressRingFill.style.strokeDasharray = "100";
            progressRingFill.style.strokeDashoffset = String(dashOffset);
        }

        if (progressBadge) {
            progressBadge.textContent = safePercent + "%";
            progressBadge.style.color = ringColor;
        }
    }

    function syncFormFromState() {
        if (streetInput) {
            streetInput.value = profileState.street;
        }

        if (cityInput) {
            cityInput.value = profileState.city;
        }

        if (stateInput) {
            stateInput.value = profileState.state;
        }

        if (countryInput) {
            countryInput.value = profileState.country;
        }

        if (pinCodeInput) {
            pinCodeInput.value = profileState.pinCode;
        }

        if (fullNameInput) {
            fullNameInput.value = profileState.fullName;
        }

        if (dobInput) {
            dobInput.value = profileState.dateOfBirth;
        }

        if (mobileInput) {
            mobileInput.value = profileState.mobileNumber;
        }

        if (residingInIndiaInput) {
            residingInIndiaInput.checked = profileState.residingInIndia;
        }

        setCheckedRadioValue("gender", profileState.gender);
        setCheckedRadioValue("category", profileState.category);
    }

    function applyProfileState() {
        var addressSummary = [profileState.city, profileState.state].filter(Boolean).join(", ");

        if (profileNameHeading) {
            profileNameHeading.textContent = profileState.fullName || "Not added";
        }

        setDisplayValue(profileFullNameValue, profileState.fullName, "Not added", false);
        setDisplayValue(profileGenderSummary, profileState.gender, "Add Gender", true);
        setDisplayValue(profileGenderValue, profileState.gender, "Not added", false);
        setDisplayValue(profileCategoryValue, profileState.category, "Not added", false);
        setDisplayValue(profileDobSummary, profileState.dateOfBirth, "Add birthday", true);
        setDisplayValue(profileDobValue, profileState.dateOfBirth, "Not added", false);
        setDisplayValue(profileCurrentLocationSummary, addressSummary, "Not added", false);
        setDisplayValue(profileStreetValue, profileState.street, "Not added", false);
        setDisplayValue(profileCityValue, profileState.city, "Not added", false);
        setDisplayValue(profileStateValue, profileState.state, "Not added", false);
        setDisplayValue(profileCountryValue, profileState.country, "Not added", false);
        setDisplayValue(profilePinCodeValue, profileState.pinCode, "Not added", false);
        setDisplayValue(profilePhoneValue, profileState.mobileNumber, "Not added", false);

        if (profilePhoneSummary) {
            profilePhoneSummary.textContent = formatPhoneSummary(profileState.mobileNumber) || "Not added";
        }

        if (profileDrawerTitle) {
            profileDrawerTitle.textContent = profileState.fullName || "Nilayesh Adhikari";
        }
    }

    var educationState = {
        school: educationSchoolInput ? educationSchoolInput.value.trim() : "",
        degree: educationDegreeInput ? educationDegreeInput.value.trim() : "",
        fieldOfStudy: educationFieldInput ? educationFieldInput.value.trim() : "",
        startMonth: educationStartMonth ? educationStartMonth.value : "",
        startYear: educationStartYear ? educationStartYear.value : "",
        endMonth: educationEndMonth ? educationEndMonth.value : "",
        endYear: educationEndYear ? educationEndYear.value : "",
        grade: educationGradeInput ? educationGradeInput.value.trim() : "",
        activities: educationActivitiesInput ? educationActivitiesInput.value : "",
        description: educationDescriptionInput ? educationDescriptionInput.value : ""
    };

    function updateCounter(input) {
        var counter;
        var maxLength;
        var valueLength;

        if (!input) {
            return;
        }

        counter = document.querySelector("[data-counter-for='" + input.id + "']");
        maxLength = input.getAttribute("maxlength") || "0";
        valueLength = input.value.length;

        if (counter) {
            counter.textContent = valueLength + "/" + maxLength;
        }
    }

    function getStoredResume() {
        try {
            return JSON.parse(window.localStorage.getItem(resumeStorageKey) || "null");
        } catch (error) {
            window.localStorage.removeItem(resumeStorageKey);
            return null;
        }
    }

    function saveResumeMetadata(resume) {
        window.localStorage.setItem(resumeStorageKey, JSON.stringify(resume));
    }

    function clearResumeMetadata() {
        window.localStorage.removeItem(resumeStorageKey);
    }

    function formatResumeFileSize(size) {
        if (!size) {
            return "";
        }

        if (size >= 1024 * 1024) {
            return (size / (1024 * 1024)).toFixed(1).replace(".0", "") + " MB";
        }

        return Math.max(1, Math.round(size / 1024)) + " KB";
    }

    function getStoredProfilePhoto() {
        return window.localStorage.getItem(profilePhotoStorageKey) || "";
    }

    function setProfilePhoto(photoDataUrl) {
        [profileAvatar, headerProfileAvatar, photoPreviewCircle].forEach(function (element) {
            if (!element) {
                return;
            }

            if (photoDataUrl) {
                element.style.backgroundImage = "url(\"" + photoDataUrl + "\")";
                element.classList.add("has-photo");
            } else {
                element.style.backgroundImage = "";
                element.classList.remove("has-photo");
            }
        });
    }

    function saveProfilePhoto(photoDataUrl) {
        window.localStorage.setItem(profilePhotoStorageKey, photoDataUrl);
        setProfilePhoto(photoDataUrl);
    }

    function clearProfilePhoto() {
        window.localStorage.removeItem(profilePhotoStorageKey);
        setProfilePhoto("");
    }

    function getCurrentFormattedDate() {
        return new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    function renderResume() {
        var resume = getStoredResume();
        var fileCard;
        var details;
        var name;
        var meta;
        var size;
        var removeButton;

        if (!resumeDisplay || !resumeUploadState) {
            return;
        }

        resumeDisplay.innerHTML = "";
        resumeUploadState.classList.toggle("is-hidden", Boolean(resume));

        if (!resume) {
            return;
        }

        fileCard = document.createElement("div");
        details = document.createElement("div");
        name = document.createElement("p");
        meta = document.createElement("p");
        size = document.createElement("p");
        removeButton = document.createElement("button");

        fileCard.className = "resume-file-card";
        details.className = "resume-file-meta";
        name.className = "record-title";
        meta.className = "record-meta";
        size.className = "resume-file-size";
        removeButton.className = "text-link";
        removeButton.id = "removeResume";
        removeButton.type = "button";
        removeButton.textContent = "Remove";

        name.textContent = resume.name;
        meta.textContent = "Last updated on " + resume.date;
        size.textContent = formatResumeFileSize(resume.size);

        details.appendChild(name);
        details.appendChild(meta);
        details.appendChild(size);
        fileCard.appendChild(details);
        fileCard.appendChild(removeButton);
        resumeDisplay.appendChild(fileCard);

        removeButton.addEventListener("click", function () {
            clearResumeMetadata();

            if (resumeInput) {
                resumeInput.value = "";
            }

            renderResume();
        });
    }

    function openPhotoModal() {
        if (!photoModalOverlay) {
            return;
        }

        lastPhotoModalFocusedElement = document.activeElement;
        setProfilePhoto(getStoredProfilePhoto());
        photoModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (changePhotoBtn) {
                changePhotoBtn.focus();
            }
        });
    }

    function closePhotoModal() {
        if (!photoModalOverlay || photoModalOverlay.hidden) {
            return;
        }

        photoModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastPhotoModalFocusedElement && typeof lastPhotoModalFocusedElement.focus === "function") {
            lastPhotoModalFocusedElement.focus();
        }
    }

    function syncEducationFormFromState() {
        if (educationSchoolInput) {
            educationSchoolInput.value = educationState.school;
        }

        if (educationDegreeInput) {
            educationDegreeInput.value = educationState.degree;
        }

        if (educationFieldInput) {
            educationFieldInput.value = educationState.fieldOfStudy;
        }

        if (educationStartMonth) {
            educationStartMonth.value = educationState.startMonth;
        }

        if (educationStartYear) {
            educationStartYear.value = educationState.startYear;
        }

        if (educationEndMonth) {
            educationEndMonth.value = educationState.endMonth;
        }

        if (educationEndYear) {
            educationEndYear.value = educationState.endYear;
        }

        if (educationGradeInput) {
            educationGradeInput.value = educationState.grade;
        }

        if (educationActivitiesInput) {
            educationActivitiesInput.value = educationState.activities;
        }

        if (educationDescriptionInput) {
            educationDescriptionInput.value = educationState.description;
        }

        educationCounters.forEach(function (counter) {
            var target = document.getElementById(counter.getAttribute("data-counter-for"));
            updateCounter(target);
        });
    }

    function applyEducationState() {
        var metaParts = [];

        if (educationRecordTitle) {
            educationRecordTitle.textContent = educationState.degree || "Education";
        }

        if (educationState.school) {
            metaParts.push(educationState.school);
        }

        if (educationState.fieldOfStudy) {
            metaParts.push(educationState.fieldOfStudy);
        }

        if (educationRecordMeta) {
            educationRecordMeta.textContent = metaParts.join(", ") || "Not added";
        }

        if (educationRecordYear) {
            educationRecordYear.textContent = educationState.endYear ? "Passing year: " + educationState.endYear : "Passing year: Not added";
        }
    }

    function formatExperienceTimespan(state) {
        var start = normalizeSkill((state.startMonth || "") + " " + (state.startYear || ""));
        var end = normalizeSkill((state.endMonth || "") + " " + (state.endYear || ""));

        if (start && end) {
            return start + " - " + end;
        }

        return start || end || "Add duration";
    }

    function syncExperienceFormFromState() {
        if (experienceRoleInput) {
            experienceRoleInput.value = experienceDraftState.role || "";
        }

        if (experienceCompanyInput) {
            experienceCompanyInput.value = experienceDraftState.company || "";
        }

        if (experienceStartMonth) {
            experienceStartMonth.value = experienceDraftState.startMonth || experienceStartMonth.value;
        }

        if (experienceStartYear) {
            experienceStartYear.value = experienceDraftState.startYear || experienceStartYear.value;
        }

        if (experienceEndMonth) {
            experienceEndMonth.value = experienceDraftState.endMonth || experienceEndMonth.value;
        }

        if (experienceEndYear) {
            experienceEndYear.value = experienceDraftState.endYear || experienceEndYear.value;
        }

        if (experienceDescriptionInput) {
            experienceDescriptionInput.value = experienceDraftState.description || "";
        }
    }

    function applyExperienceState() {
        if (experienceRoleValue) {
            experienceRoleValue.textContent = experienceState.role || "Not added";
        }

        if (experienceCompanyValue) {
            experienceCompanyValue.textContent = experienceState.company || "Not added";
        }

        if (experienceTimespanValue) {
            experienceTimespanValue.textContent = formatExperienceTimespan(experienceState);
        }

        if (experienceDescriptionValue) {
            experienceDescriptionValue.textContent = experienceState.description || "Add your next internship or job experience here with role, duration, and key contributions.";
        }
    }

    function clearExperienceState() {
        experienceState = {
            role: "",
            company: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            description: ""
        };

        applyExperienceState();
    }

    function formatProjectDuration(state) {
        var start = normalizeSkill((state.startMonth || "") + " " + (state.startYear || ""));
        var end = normalizeSkill((state.endMonth || "") + " " + (state.endYear || ""));

        if (start && end) {
            return start + " - " + end;
        }

        return start || end || "Add duration";
    }

    function syncProjectsFormFromState() {
        if (projectNameInput) {
            projectNameInput.value = projectsState.name || "";
        }

        if (projectStartMonth) {
            projectStartMonth.value = projectsState.startMonth || "";
        }

        if (projectStartYear) {
            projectStartYear.value = projectsState.startYear || "";
        }

        if (projectEndMonth) {
            projectEndMonth.value = projectsState.endMonth || "";
        }

        if (projectEndYear) {
            projectEndYear.value = projectsState.endYear || "";
        }

        if (projectDescriptionInput) {
            projectDescriptionInput.value = projectsState.description || "";
        }

        if (projectSkillsInput) {
            projectSkillsInput.value = projectsState.skills || "";
        }

        if (projectUrlInput) {
            projectUrlInput.value = projectsState.url || "";
        }

        updateCounter(projectDescriptionInput);
    }

    function applyProjectsState() {
        if (projectNameValue) {
            projectNameValue.textContent = projectsState.name || "Project name not added";
        }

        if (projectSkillsValue) {
            projectSkillsValue.textContent = projectsState.skills || "Skills not added";
        }

        if (projectDurationValue) {
            projectDurationValue.textContent = formatProjectDuration(projectsState);
        }

        if (projectDescriptionValue) {
            projectDescriptionValue.textContent = projectsState.description || "Add project details, your learnings, and outcomes here.";
        }

        if (projectUrlValue) {
            projectUrlValue.textContent = projectsState.url || "Project URL not added";
        }
    }

    function openProjectsModal() {
        if (!projectsModalOverlay) {
            return;
        }

        lastProjectsModalFocusedElement = document.activeElement;
        syncProjectsFormFromState();
        projectsModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (projectNameInput) {
                projectNameInput.focus();
            }
        });
    }

    function closeProjectsModal() {
        if (!projectsModalOverlay || projectsModalOverlay.hidden) {
            return;
        }

        projectsModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastProjectsModalFocusedElement && typeof lastProjectsModalFocusedElement.focus === "function") {
            lastProjectsModalFocusedElement.focus();
        }
    }

    function openExperienceModal(mode) {
        var titleElement;

        if (!experienceModalOverlay) {
            return;
        }

        experienceModalMode = mode || "edit";
        lastExperienceModalFocusedElement = document.activeElement;
        titleElement = document.getElementById("experienceModalTitle");

        if (experienceModalMode === "add") {
            experienceDraftState = {
                role: "",
                company: "",
                startMonth: experienceStartMonth ? experienceStartMonth.value : "May",
                startYear: experienceStartYear ? experienceStartYear.value : "2025",
                endMonth: experienceEndMonth ? experienceEndMonth.value : "July",
                endYear: experienceEndYear ? experienceEndYear.value : "2025",
                description: ""
            };
        } else {
            experienceDraftState = Object.assign({}, experienceState);
        }

        if (titleElement) {
            titleElement.textContent = experienceModalMode === "add" ? "Add experience" : "Edit experience";
        }

        syncExperienceFormFromState();
        experienceModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (experienceRoleInput) {
                experienceRoleInput.focus();
            }
        });
    }

    function closeExperienceModal() {
        if (!experienceModalOverlay || experienceModalOverlay.hidden) {
            return;
        }

        experienceModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastExperienceModalFocusedElement && typeof lastExperienceModalFocusedElement.focus === "function") {
            lastExperienceModalFocusedElement.focus();
        }
    }

    function normalizeSkill(value) {
        return (value || "").replace(/\s+/g, " ").trim();
    }

    function updateSkillsPlaceholder() {
        if (!skillsPlaceholder) {
            return;
        }

        skillsPlaceholder.classList.toggle("is-hidden", Boolean(skillsInput && (skillsInput.value.trim() || document.activeElement === skillsInput)));
    }

    function renderProfileSkills() {
        if (!profileSkillsList) {
            return;
        }

        profileSkillsList.innerHTML = "";

        if (!skillsState.length) {
            profileSkillsList.innerHTML = "<span class=\"empty-value\">No key skills added</span>";
            return;
        }

        skillsState.forEach(function (skill) {
            var pill = document.createElement("span");

            pill.className = "skill-pill";
            pill.textContent = skill;
            profileSkillsList.appendChild(pill);
        });
    }

    function renderSkillsDraft() {
        if (!skillsChipList) {
            return;
        }

        skillsChipList.innerHTML = "";

        skillsDraftState.forEach(function (skill, index) {
            var chip = document.createElement("div");
            var label = document.createElement("span");
            var removeButton = document.createElement("button");

            chip.className = "skill-chip";
            label.textContent = skill;

            removeButton.className = "skill-chip-remove";
            removeButton.type = "button";
            removeButton.setAttribute("aria-label", "Remove " + skill);
            removeButton.setAttribute("data-skill-index", String(index));
            removeButton.innerHTML = "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 6 18 18\"></path><path d=\"M18 6 6 18\"></path></svg>";

            chip.appendChild(label);
            chip.appendChild(removeButton);
            skillsChipList.appendChild(chip);
        });

        updateSkillsPlaceholder();
    }

    function addSkillToDraft(value) {
        var normalizedValue = normalizeSkill(value);
        var alreadyExists = skillsDraftState.some(function (skill) {
            return skill.toLowerCase() === normalizedValue.toLowerCase();
        });

        if (!normalizedValue || alreadyExists) {
            return false;
        }

        skillsDraftState.push(normalizedValue);
        renderSkillsDraft();
        return true;
    }

    function normalizeLanguage(value) {
        return (value || "").replace(/\s+/g, " ").trim();
    }

    function renderProfileSummary() {
        if (!profileSummaryText) {
            return;
        }

        setDisplayValue(profileSummaryText, summaryState, "Add a short professional summary", false);
    }

    function openSummaryModal() {
        if (!summaryModalOverlay) {
            return;
        }

        lastSummaryModalFocusedElement = document.activeElement;

        if (summaryInput) {
            summaryInput.value = summaryState;
        }

        summaryModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (summaryInput) {
                summaryInput.focus();
                summaryInput.setSelectionRange(summaryInput.value.length, summaryInput.value.length);
            }
        });
    }

    function closeSummaryModal() {
        if (!summaryModalOverlay || summaryModalOverlay.hidden) {
            return;
        }

        summaryModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastSummaryModalFocusedElement && typeof lastSummaryModalFocusedElement.focus === "function") {
            lastSummaryModalFocusedElement.focus();
        }
    }

    function normalizeAchievement(value) {
        return (value || "").replace(/\s+/g, " ").trim();
    }

    function renderProfileAchievements() {
        if (!academicAchievementsList) {
            return;
        }

        academicAchievementsList.innerHTML = "";

        if (!achievementsState.length) {
            academicAchievementsList.innerHTML = "<span class=\"empty-value\">No academic achievements added</span>";
            return;
        }

        achievementsState.forEach(function (achievement) {
            var item = document.createElement("div");

            item.className = "achievement-item";
            item.textContent = achievement;
            academicAchievementsList.appendChild(item);
        });
    }

    function renderAchievementsDraft() {
        if (!achievementsChipList) {
            return;
        }

        achievementsChipList.innerHTML = "";

        achievementsDraftState.forEach(function (achievement, index) {
            var chip = document.createElement("div");
            var label = document.createElement("span");
            var removeButton = document.createElement("button");

            chip.className = "tag-chip";
            label.textContent = achievement;

            removeButton.className = "tag-chip-remove";
            removeButton.type = "button";
            removeButton.setAttribute("aria-label", "Remove " + achievement);
            removeButton.setAttribute("data-achievement-index", String(index));
            removeButton.innerHTML = "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 6 18 18\"></path><path d=\"M18 6 6 18\"></path></svg>";

            chip.appendChild(label);
            chip.appendChild(removeButton);
            achievementsChipList.appendChild(chip);
        });
    }

    function addAchievementToDraft(value) {
        var normalizedValue = normalizeAchievement(value);
        var alreadyExists = achievementsDraftState.some(function (achievement) {
            return achievement.toLowerCase() === normalizedValue.toLowerCase();
        });

        if (!normalizedValue || alreadyExists) {
            return false;
        }

        achievementsDraftState.push(normalizedValue);
        renderAchievementsDraft();
        return true;
    }

    function openAchievementsModal() {
        if (!achievementsModalOverlay) {
            return;
        }

        lastAchievementsModalFocusedElement = document.activeElement;
        achievementsDraftState = achievementsState.slice();

        if (achievementsInput) {
            achievementsInput.value = "";
        }

        renderAchievementsDraft();
        achievementsModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (achievementsInput) {
                achievementsInput.focus();
            }
        });
    }

    function closeAchievementsModal() {
        if (!achievementsModalOverlay || achievementsModalOverlay.hidden) {
            return;
        }

        if (achievementsInput) {
            achievementsInput.value = "";
        }

        achievementsModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastAchievementsModalFocusedElement && typeof lastAchievementsModalFocusedElement.focus === "function") {
            lastAchievementsModalFocusedElement.focus();
        }
    }

    function renderProfileLanguages() {
        if (!languagesList) {
            return;
        }

        languagesList.innerHTML = "";

        if (!languagesState.length) {
            languagesList.innerHTML = "<span class=\"empty-value\">No languages added</span>";
            return;
        }

        languagesState.forEach(function (language) {
            var pill = document.createElement("span");

            pill.className = "language-pill";
            pill.textContent = language;
            languagesList.appendChild(pill);
        });
    }

    function renderLanguagesDraft() {
        if (!languagesChipList) {
            return;
        }

        languagesChipList.innerHTML = "";

        languagesDraftState.forEach(function (language, index) {
            var chip = document.createElement("div");
            var label = document.createElement("span");
            var removeButton = document.createElement("button");

            chip.className = "tag-chip";
            label.textContent = language;

            removeButton.className = "tag-chip-remove";
            removeButton.type = "button";
            removeButton.setAttribute("aria-label", "Remove " + language);
            removeButton.setAttribute("data-language-index", String(index));
            removeButton.innerHTML = "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 6 18 18\"></path><path d=\"M18 6 6 18\"></path></svg>";

            chip.appendChild(label);
            chip.appendChild(removeButton);
            languagesChipList.appendChild(chip);
        });
    }

    function addLanguageToDraft(value) {
        var normalizedValue = normalizeLanguage(value);
        var alreadyExists = languagesDraftState.some(function (language) {
            return language.toLowerCase() === normalizedValue.toLowerCase();
        });

        if (!normalizedValue || alreadyExists) {
            return false;
        }

        languagesDraftState.push(normalizedValue);
        renderLanguagesDraft();
        return true;
    }

    function openLanguagesModal() {
        if (!languagesModalOverlay) {
            return;
        }

        lastLanguagesModalFocusedElement = document.activeElement;
        languagesDraftState = languagesState.slice();

        if (languagesInput) {
            languagesInput.value = "";
        }

        renderLanguagesDraft();
        languagesModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (languagesInput) {
                languagesInput.focus();
            }
        });
    }

    function closeLanguagesModal() {
        if (!languagesModalOverlay || languagesModalOverlay.hidden) {
            return;
        }

        if (languagesInput) {
            languagesInput.value = "";
        }

        languagesModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastLanguagesModalFocusedElement && typeof lastLanguagesModalFocusedElement.focus === "function") {
            lastLanguagesModalFocusedElement.focus();
        }
    }

    function openSkillsModal() {
        if (!skillsModalOverlay) {
            return;
        }

        lastSkillsModalFocusedElement = document.activeElement;
        skillsDraftState = skillsState.slice();

        if (skillsInput) {
            skillsInput.value = "";
        }

        renderSkillsDraft();
        skillsModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (skillsInput) {
                skillsInput.focus();
            }
        });
    }

    function closeSkillsModal() {
        if (!skillsModalOverlay || skillsModalOverlay.hidden) {
            return;
        }

        if (skillsInput) {
            skillsInput.value = "";
        }

        updateSkillsPlaceholder();
        skillsModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastSkillsModalFocusedElement && typeof lastSkillsModalFocusedElement.focus === "function") {
            lastSkillsModalFocusedElement.focus();
        }
    }

    function getFocusableElements(container) {
        if (!container) {
            return [];
        }

        return Array.from(container.querySelectorAll(focusableSelector)).filter(function (element) {
            return !element.hasAttribute("hidden");
        });
    }

    function openProfileModal() {
        if (!modalOverlay) {
            return;
        }

        lastModalFocusedElement = document.activeElement;
        syncFormFromState();
        modalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (fullNameInput) {
                fullNameInput.focus();
                fullNameInput.select();
            }
        });
    }

    function closeProfileModal() {
        if (!modalOverlay || modalOverlay.hidden) {
            return;
        }

        modalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastModalFocusedElement && typeof lastModalFocusedElement.focus === "function") {
            lastModalFocusedElement.focus();
        }
    }

    function openEducationModal() {
        if (!educationModalOverlay) {
            return;
        }

        lastEducationModalFocusedElement = document.activeElement;
        syncEducationFormFromState();
        educationModalOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            if (educationSchoolInput) {
                educationSchoolInput.focus();
                educationSchoolInput.select();
            }
        });
    }

    function closeEducationModal() {
        if (!educationModalOverlay || educationModalOverlay.hidden) {
            return;
        }

        educationModalOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastEducationModalFocusedElement && typeof lastEducationModalFocusedElement.focus === "function") {
            lastEducationModalFocusedElement.focus();
        }
    }

    function openNotificationsDrawer() {
        if (!notificationsOverlay) {
            return;
        }

        lastNotificationsFocusedElement = document.activeElement;
        notificationsOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            notificationsOverlay.classList.add("open");

            if (notificationsCloseButtons.length) {
                notificationsCloseButtons[0].focus();
            }
        });
    }

    function closeNotificationsDrawer() {
        if (!notificationsOverlay || notificationsOverlay.hidden) {
            return;
        }

        notificationsOverlay.classList.remove("open");
        notificationsOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastNotificationsFocusedElement && typeof lastNotificationsFocusedElement.focus === "function") {
            lastNotificationsFocusedElement.focus();
        }
    }

    function openProfileDrawer() {
        if (!profileDrawerOverlay) {
            return;
        }

        lastProfileDrawerFocusedElement = document.activeElement;
        profileDrawerOverlay.hidden = false;
        syncBodyScrollLock();

        window.requestAnimationFrame(function () {
            profileDrawerOverlay.classList.add("open");

            if (profileDrawerCloseButtons.length) {
                profileDrawerCloseButtons[0].focus();
            }
        });
    }

    function closeProfileDrawer() {
        if (!profileDrawerOverlay || profileDrawerOverlay.hidden) {
            return;
        }

        profileDrawerOverlay.classList.remove("open");
        profileDrawerOverlay.hidden = true;
        syncBodyScrollLock();

        if (lastProfileDrawerFocusedElement && typeof lastProfileDrawerFocusedElement.focus === "function") {
            lastProfileDrawerFocusedElement.focus();
        }
    }

    function trapFocus(event, container) {
        var focusableElements;
        var firstElement;
        var lastElement;

        focusableElements = getFocusableElements(container);

        if (!focusableElements.length) {
            return;
        }

        firstElement = focusableElements[0];
        lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    function handleGlobalKeydown(event) {
        if (event.key === "Escape") {
            if (isPhotoModalOpen()) {
                event.preventDefault();
                closePhotoModal();
                return;
            }

            if (isProjectsModalOpen()) {
                event.preventDefault();
                closeProjectsModal();
                return;
            }

            if (isExperienceModalOpen()) {
                event.preventDefault();
                closeExperienceModal();
                return;
            }

            if (isSkillsModalOpen()) {
                event.preventDefault();
                closeSkillsModal();
                return;
            }

            if (isAchievementsModalOpen()) {
                event.preventDefault();
                closeAchievementsModal();
                return;
            }

            if (isLanguagesModalOpen()) {
                event.preventDefault();
                closeLanguagesModal();
                return;
            }

            if (isSummaryModalOpen()) {
                event.preventDefault();
                closeSummaryModal();
                return;
            }

            if (isProfileDrawerOpen()) {
                event.preventDefault();
                closeProfileDrawer();
                return;
            }

            if (isNotificationsOpen()) {
                event.preventDefault();
                closeNotificationsDrawer();
                return;
            }

            if (isEducationModalOpen()) {
                event.preventDefault();
                closeEducationModal();
                return;
            }

            if (isProfileModalOpen()) {
                event.preventDefault();
                closeProfileModal();
                return;
            }
        }

        if (event.key !== "Tab") {
            return;
        }

        if (isProfileDrawerOpen()) {
            trapFocus(event, profileDrawerOverlay);
            return;
        }

        if (isNotificationsOpen()) {
            trapFocus(event, notificationsOverlay);
            return;
        }

        if (isPhotoModalOpen()) {
            trapFocus(event, photoModalOverlay);
            return;
        }

        if (isProjectsModalOpen()) {
            trapFocus(event, projectsModalOverlay);
            return;
        }

        if (isExperienceModalOpen()) {
            trapFocus(event, experienceModalOverlay);
            return;
        }

        if (isSkillsModalOpen()) {
            trapFocus(event, skillsModalOverlay);
            return;
        }

        if (isAchievementsModalOpen()) {
            trapFocus(event, achievementsModalOverlay);
            return;
        }

        if (isLanguagesModalOpen()) {
            trapFocus(event, languagesModalOverlay);
            return;
        }

        if (isSummaryModalOpen()) {
            trapFocus(event, summaryModalOverlay);
            return;
        }

        if (isEducationModalOpen()) {
            trapFocus(event, educationModalOverlay);
            return;
        }

        if (isProfileModalOpen()) {
            trapFocus(event, modalOverlay);
        }
    }

    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            tabs.forEach(function (button) {
                button.classList.remove("active");
                button.setAttribute("aria-selected", "false");
            });

            panels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            var targetId = tab.getAttribute("aria-controls");
            var targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                targetPanel.classList.add("active");
            }

            updateActiveQuickLink();
        });
    });

    quickScrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var target = document.querySelector(link.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();

            window.scrollTo({
                top: Math.max(target.getBoundingClientRect().top + window.scrollY - getStickyOffset(), 0),
                behavior: "smooth"
            });

            if (link.classList.contains("quick-nav-link")) {
                setActiveQuickLink(target.id);
            }
        });
    });

    if (editLink) {
        editLink.addEventListener("click", function (event) {
            event.preventDefault();
            openProfileModal();
        });
    }

    if (personalDetailsModalTrigger) {
        personalDetailsModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openProfileModal();
        });
    }

    if (summaryModalTrigger) {
        summaryModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openSummaryModal();
        });
    }

    if (addressModalTrigger) {
        addressModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openProfileModal();
        });
    }

    if (educationModalTrigger) {
        educationModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openEducationModal();
        });
    }

    if (experienceModalTrigger) {
        experienceModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openExperienceModal("add");
        });
    }

    if (profilePhotoTrigger) {
        profilePhotoTrigger.addEventListener("click", function () {
            openPhotoModal();
        });
    }

    if (projectsModalTrigger) {
        projectsModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openProjectsModal();
        });
    }

    experienceEditTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            openExperienceModal("edit");
        });

        trigger.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openExperienceModal("edit");
            }
        });
    });

    experienceRemoveButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            clearExperienceState();
        });
    });

    if (skillsModalTrigger) {
        skillsModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openSkillsModal();
        });
    }

    if (languagesModalTrigger) {
        languagesModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openLanguagesModal();
        });
    }

    if (achievementsModalTrigger) {
        achievementsModalTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openAchievementsModal();
        });
    }

    if (notificationButton) {
        notificationButton.addEventListener("click", function () {
            openNotificationsDrawer();
        });
    }

    if (profileMenuTrigger) {
        profileMenuTrigger.addEventListener("click", function () {
            openProfileDrawer();
        });
    }

    modalCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeProfileModal();
        });
    });

    educationCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeEducationModal();
        });
    });

    experienceCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeExperienceModal();
        });
    });

    photoCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closePhotoModal();
        });
    });

    projectsCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeProjectsModal();
        });
    });

    skillsCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeSkillsModal();
        });
    });

    languagesCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeLanguagesModal();
        });
    });

    summaryCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeSummaryModal();
        });
    });

    achievementsCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeAchievementsModal();
        });
    });

    profileDrawerCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeProfileDrawer();
        });
    });

    notificationsCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeNotificationsDrawer();
        });
    });

    if (modalOverlay && profileModal) {
        modalOverlay.addEventListener("click", function (event) {
            if (event.target === modalOverlay) {
                closeProfileModal();
            }
        });

        profileModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (educationModalOverlay && educationModal) {
        educationModalOverlay.addEventListener("click", function (event) {
            if (event.target === educationModalOverlay) {
                closeEducationModal();
            }
        });

        educationModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (experienceModalOverlay && experienceModal) {
        experienceModalOverlay.addEventListener("click", function (event) {
            if (event.target === experienceModalOverlay) {
                closeExperienceModal();
            }
        });

        experienceModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (photoModalOverlay && photoModal) {
        photoModalOverlay.addEventListener("click", function (event) {
            if (event.target === photoModalOverlay) {
                closePhotoModal();
            }
        });

        photoModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (projectsModalOverlay && projectsModal) {
        projectsModalOverlay.addEventListener("click", function (event) {
            if (event.target === projectsModalOverlay) {
                closeProjectsModal();
            }
        });

        projectsModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (skillsModalOverlay && skillsModal) {
        skillsModalOverlay.addEventListener("click", function (event) {
            if (event.target === skillsModalOverlay) {
                closeSkillsModal();
            }
        });

        skillsModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (languagesModalOverlay && languagesModal) {
        languagesModalOverlay.addEventListener("click", function (event) {
            if (event.target === languagesModalOverlay) {
                closeLanguagesModal();
            }
        });

        languagesModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (summaryModalOverlay && summaryModal) {
        summaryModalOverlay.addEventListener("click", function (event) {
            if (event.target === summaryModalOverlay) {
                closeSummaryModal();
            }
        });

        summaryModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (achievementsModalOverlay && achievementsModal) {
        achievementsModalOverlay.addEventListener("click", function (event) {
            if (event.target === achievementsModalOverlay) {
                closeAchievementsModal();
            }
        });

        achievementsModal.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (profileDrawerOverlay && profileDrawer) {
        profileDrawerOverlay.addEventListener("click", function (event) {
            if (event.target === profileDrawerOverlay) {
                closeProfileDrawer();
            }
        });

        profileDrawer.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (notificationsOverlay && notificationsDrawer) {
        notificationsOverlay.addEventListener("click", function (event) {
            if (event.target === notificationsOverlay) {
                closeNotificationsDrawer();
            }
        });

        notificationsDrawer.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (profileModalForm) {
        profileModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            profileState = {
                fullName: fullNameInput ? fullNameInput.value.trim() || "Nilayesh Adhikari" : "Nilayesh Adhikari",
                gender: getCheckedRadioValue("gender"),
                category: getCheckedRadioValue("category"),
                dateOfBirth: dobInput ? dobInput.value.trim() : "",
                street: streetInput ? streetInput.value.trim() : "",
                city: cityInput ? cityInput.value.trim() : "",
                state: stateInput ? stateInput.value.trim() : "",
                country: countryInput ? countryInput.value.trim() : "",
                pinCode: pinCodeInput ? pinCodeInput.value.trim() : "",
                mobileNumber: mobileInput ? mobileInput.value.trim() : "",
                residingInIndia: residingInIndiaInput ? residingInIndiaInput.checked : true
            };

            applyProfileState();
            closeProfileModal();
        });
    }

    if (educationModalForm) {
        educationModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            educationState = {
                school: educationSchoolInput ? educationSchoolInput.value.trim() : "",
                degree: educationDegreeInput ? educationDegreeInput.value.trim() : "",
                fieldOfStudy: educationFieldInput ? educationFieldInput.value.trim() : "",
                startMonth: educationStartMonth ? educationStartMonth.value : "",
                startYear: educationStartYear ? educationStartYear.value : "",
                endMonth: educationEndMonth ? educationEndMonth.value : "",
                endYear: educationEndYear ? educationEndYear.value : "",
                grade: educationGradeInput ? educationGradeInput.value.trim() : "",
                activities: educationActivitiesInput ? educationActivitiesInput.value : "",
                description: educationDescriptionInput ? educationDescriptionInput.value : ""
            };

            applyEducationState();
            closeEducationModal();
        });
    }

    if (experienceModalForm) {
        experienceModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            experienceState = {
                role: experienceRoleInput ? experienceRoleInput.value.trim() : "",
                company: experienceCompanyInput ? experienceCompanyInput.value.trim() : "",
                startMonth: experienceStartMonth ? experienceStartMonth.value : "",
                startYear: experienceStartYear ? experienceStartYear.value : "",
                endMonth: experienceEndMonth ? experienceEndMonth.value : "",
                endYear: experienceEndYear ? experienceEndYear.value : "",
                description: experienceDescriptionInput ? experienceDescriptionInput.value.trim() : ""
            };

            applyExperienceState();
            closeExperienceModal();
        });
    }

    if (projectsModalForm) {
        projectsModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            projectsState = {
                name: projectNameInput ? projectNameInput.value.trim() : "",
                startMonth: projectStartMonth ? projectStartMonth.value : "",
                startYear: projectStartYear ? projectStartYear.value : "",
                endMonth: projectEndMonth ? projectEndMonth.value : "",
                endYear: projectEndYear ? projectEndYear.value : "",
                description: projectDescriptionInput ? projectDescriptionInput.value.trim() : "",
                skills: projectSkillsInput ? projectSkillsInput.value.trim() : "",
                url: projectUrlInput ? projectUrlInput.value.trim() : ""
            };

            applyProjectsState();
            closeProjectsModal();
        });
    }

    if (skillsChipList) {
        skillsChipList.addEventListener("click", function (event) {
            var removeButton = event.target.closest(".skill-chip-remove");
            var skillIndex;

            if (!removeButton) {
                return;
            }

            skillIndex = Number(removeButton.getAttribute("data-skill-index"));

            if (Number.isNaN(skillIndex)) {
                return;
            }

            skillsDraftState.splice(skillIndex, 1);
            renderSkillsDraft();
        });
    }

    if (skillsInput) {
        skillsInput.addEventListener("focus", updateSkillsPlaceholder);
        skillsInput.addEventListener("blur", function () {
            addSkillToDraft(skillsInput.value);
            skillsInput.value = "";
            updateSkillsPlaceholder();
        });
        skillsInput.addEventListener("input", updateSkillsPlaceholder);
        skillsInput.addEventListener("keydown", function (event) {
            if (event.key !== "Enter" && event.key !== ",") {
                return;
            }

            event.preventDefault();

            if (addSkillToDraft(skillsInput.value)) {
                skillsInput.value = "";
            }

            updateSkillsPlaceholder();
        });
    }

    if (skillsModalForm) {
        skillsModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (skillsInput && addSkillToDraft(skillsInput.value)) {
                skillsInput.value = "";
            }

            skillsState = skillsDraftState.slice();
            renderProfileSkills();
            closeSkillsModal();
        });
    }

    if (languagesChipList) {
        languagesChipList.addEventListener("click", function (event) {
            var removeButton = event.target.closest(".tag-chip-remove");
            var languageIndex;

            if (!removeButton) {
                return;
            }

            languageIndex = Number(removeButton.getAttribute("data-language-index"));

            if (Number.isNaN(languageIndex)) {
                return;
            }

            languagesDraftState.splice(languageIndex, 1);
            renderLanguagesDraft();
        });
    }

    if (summaryModalForm) {
        summaryModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            summaryState = summaryInput ? summaryInput.value.trim() : "";
            renderProfileSummary();
            closeSummaryModal();
        });
    }

    if (languagesInput) {
        languagesInput.addEventListener("keydown", function (event) {
            if (event.key !== "Enter" && event.key !== ",") {
                return;
            }

            event.preventDefault();

            if (addLanguageToDraft(languagesInput.value)) {
                languagesInput.value = "";
            }
        });
    }

    if (languagesModalForm) {
        languagesModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (languagesInput && addLanguageToDraft(languagesInput.value)) {
                languagesInput.value = "";
            }

            languagesState = languagesDraftState.slice();
            renderProfileLanguages();
            closeLanguagesModal();
        });
    }

    if (achievementsChipList) {
        achievementsChipList.addEventListener("click", function (event) {
            var removeButton = event.target.closest(".tag-chip-remove");
            var achievementIndex;

            if (!removeButton) {
                return;
            }

            achievementIndex = Number(removeButton.getAttribute("data-achievement-index"));

            if (Number.isNaN(achievementIndex)) {
                return;
            }

            achievementsDraftState.splice(achievementIndex, 1);
            renderAchievementsDraft();
        });
    }

    if (achievementsInput) {
        achievementsInput.addEventListener("keydown", function (event) {
            if (event.key !== "Enter" && event.key !== ",") {
                return;
            }

            event.preventDefault();

            if (addAchievementToDraft(achievementsInput.value)) {
                achievementsInput.value = "";
            }
        });
    }

    if (achievementsModalForm) {
        achievementsModalForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (achievementsInput && addAchievementToDraft(achievementsInput.value)) {
                achievementsInput.value = "";
            }

            achievementsState = achievementsDraftState.slice();
            renderProfileAchievements();
            closeAchievementsModal();
        });
    }

    if (uploadResumeBtn && resumeInput) {
        uploadResumeBtn.addEventListener("click", function () {
            resumeInput.click();
        });

        resumeInput.addEventListener("change", function (event) {
            var file = event.target.files && event.target.files[0];
            var extension;
            var allowedExtensions;

            if (!file) {
                return;
            }

            extension = file.name.split(".").pop();
            allowedExtensions = ["pdf", "doc", "docx", "rtf"];

            if (!extension || allowedExtensions.indexOf(extension.toLowerCase()) === -1) {
                window.alert("Invalid file type");
                resumeInput.value = "";
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                window.alert("File size must be under 2MB");
                resumeInput.value = "";
                return;
            }

            saveResumeMetadata({
                name: file.name,
                size: file.size,
                date: getCurrentFormattedDate()
            });

            resumeInput.value = "";
            renderResume();
        });
    }

    if (changePhotoBtn && profilePhotoInput) {
        changePhotoBtn.addEventListener("click", function () {
            profilePhotoInput.click();
        });

        profilePhotoInput.addEventListener("change", function (event) {
            var file = event.target.files && event.target.files[0];
            var extension;
            var allowedExtensions;
            var reader;

            if (!file) {
                return;
            }

            extension = file.name.split(".").pop();
            allowedExtensions = ["png", "jpg", "jpeg", "gif"];

            if (!extension || allowedExtensions.indexOf(extension.toLowerCase()) === -1) {
                window.alert("Invalid file type");
                profilePhotoInput.value = "";
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                window.alert("File size must be under 2MB");
                profilePhotoInput.value = "";
                return;
            }

            reader = new FileReader();
            reader.onload = function (loadEvent) {
                saveProfilePhoto(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
            profilePhotoInput.value = "";
        });
    }

    if (deletePhotoBtn) {
        deletePhotoBtn.addEventListener("click", function () {
            clearProfilePhoto();

            if (profilePhotoInput) {
                profilePhotoInput.value = "";
            }
        });
    }

    if (dobInput) {
        dobInput.addEventListener("input", function (event) {
            var value = event.target.value.replace(/\D/g, "").slice(0, 8);

            if (value.length > 4) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
            } else if (value.length > 2) {
                value = value.slice(0, 2) + "/" + value.slice(2);
            }

            event.target.value = value;
        });
    }

    [educationGradeInput, educationActivitiesInput, educationDescriptionInput, projectDescriptionInput].forEach(function (input) {
        if (!input) {
            return;
        }

        input.addEventListener("input", function () {
            updateCounter(input);
        });

        updateCounter(input);
    });

    if (educationDeleteButton) {
        educationDeleteButton.addEventListener("click", function () {
            closeEducationModal();
        });
    }

    if (profileDrawerLink) {
        profileDrawerLink.addEventListener("click", function () {
            closeProfileDrawer();
        });
    }

    document.addEventListener("keydown", handleGlobalKeydown);

    window.addEventListener("scroll", updateActiveQuickLink, { passive: true });
    window.addEventListener("resize", updateActiveQuickLink);
    window.updateProfileCompletionRing = updateProfileCompletionRing;

    applyProfileState();
    applyEducationState();
    applyExperienceState();
    applyProjectsState();
    updateProfileCompletionRing(progressBadge ? parseInt(progressBadge.textContent, 10) : 0);
    setProfilePhoto(getStoredProfilePhoto());
    renderProfileSummary();
    renderProfileSkills();
    renderProfileAchievements();
    renderProfileLanguages();
    renderResume();
    updateSkillsPlaceholder();
    updateActiveQuickLink();
}());
