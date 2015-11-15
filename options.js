(function () {

    document.addEventListener('DOMContentLoaded', restoreOptions);
    document.getElementById('save').addEventListener('click', saveOptions);

    function saveOptions() {

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var description = document.getElementById('description').value;
        var baseUrl = document.getElementById('baseUrl').value;
        var apiExtension = document.getElementById('apiExtension').value;

        chrome.storage.sync.set({
            username: username,
            password: password,
            description: description,
            baseUrl: baseUrl,
            apiExtension: apiExtension
        }, function() {
            var status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(function() {
              status.textContent = '';
            }, 750);
        });
    }


    function restoreOptions() {

        chrome.storage.sync.get({
            username: '',
            password: '',
            description: '',
            baseUrl: '',
            apiExtension: '/rest/api/2'
        }, function(items) {

            document.getElementById('username').value = items.username;
            document.getElementById('password').value = items.password;
            document.getElementById('description').value = items.description;
            document.getElementById('baseUrl').value = items.baseUrl;
            document.getElementById('apiExtension').value = items.apiExtension;

        });
    }
    
})(); 
