# Identificació dels espais de noms en documents (`AndroidManifest.xml`)

L'identificació dels espais de noms en documents com el fitxer `AndroidManifest.xml` és una part crucial en el desenvolupament d'aplicacions Android. Els espais de noms (**namespaces**) permeten diferenciar i organitzar les etiquetes XML, especialment quan es treballa amb elements personalitzats o definits per tercers.

## Què és un espai de noms?

Un **espai de noms** en XML és un mecanisme per evitar conflictes entre etiquetes que poden tenir el mateix nom, però que tenen significats diferents segons el context. Es defineix mitjançant una URL que actua com a identificador únic.

## Exemple d'espais de noms en un `AndroidManifest.xml`

A continuació es mostra un exemple d'un fitxer `AndroidManifest.xml` amb espais de noms:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
    
</manifest>
