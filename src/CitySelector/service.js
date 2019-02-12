const Service = {

    getLocation(url, Success) {
        $.get(
            url,
            Success
        );
    },

    postLocation(url, id, location) {
        $.post(url, {region: id, location: location}).done(function (res) {
            $('body').html(JSON.stringify(res));

        });
    },

    deleteLocation(arr) {
        for (let i = 0; i < arr.length; i++) {
            $.ajax({
                url: `http://localhost:3000/selectedRegions/${arr[i].id}`,
                type: 'DELETE',
            });
        }
        alert(`http://localhost:3000/selectedRegions  Очищен`);
    },
};

export default Service;
