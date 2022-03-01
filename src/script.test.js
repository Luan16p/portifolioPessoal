function init() {
    function data(data_val) {
        data_val = [
            {id: 0, token: "content_01"},
            {id: 1, token: "content_02"},
            {id: 2, token: "content_03"},
            {id: 3, token: "content_04"},
            {id: 4, token: "content_05"},
            {id: 5, token: "content_06"},
        ];
    }

    const project_start = new Boolean(true);

    try {
        data();
    }

    catch {
        project_start === true;
    }

}